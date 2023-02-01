import { Yoga } from './app';
import { createYoga, createSchema } from 'graphql-yoga';
import { getUser } from './graphql/resolvers/query';
import { typeDefinitions } from './graphql/schema';
import { createContext, GraphQLContext } from './context';
import type { PrismaClient } from '@prisma/client';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { Resolvers } from './types';

const cache = setupCache({
  maxAge: 7 * 60 * 60 * 1000,
});

const googleCerts = axios.create({
  adapter: cache.adapter,
  baseURL:
    'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com',
});

const options: jwt.VerifyOptions = {
  algorithms: ['RS256'],
  complete: true,
};

/**
 * Pulls certs from googles public endpoint
 * @param {Object} header
 * @param {Function} callback
 */
async function getKey(header: jwt.JwtPayload): Promise<string> {
  const keys = (await googleCerts.get('')).data;
  if (!Object.keys(keys).includes(header.kid)) {
    throw new Error('Invalid KID');
  }
  return keys[header.kid];
}
const resolvers: Resolvers = {
  Query: {
    user: async (
      parent: unknown,
      args: Record<string, any>,
      context: GraphQLContext
    ) => await getUser(context),
  },
};
export const yogaGraphQLServer = async (yoga: Yoga) =>
  createYoga({
    schema: createSchema({
      typeDefs: typeDefinitions,
      resolvers,
    }),
    graphqlEndpoint: '/graphql',
    context: async ({ request }) => await createContext(yoga, request),
    logging: true,
  });

export const authenticateUser = async (
  prisma: PrismaClient,
  request: any
): Promise<string | null> => {
  try {
    const token =
      request.headers.get('authorization') ||
      request.headers.get('Authorization');
    const authBearer = token.split('Bearer ');
    const decodedToken = authBearer[authBearer.length > 1 ? 1 : 0];
    const header = JSON.parse(
      Buffer.from(decodedToken.split('.')[0], 'base64').toString('ascii')
    );
    const key = await getKey(header);
    const decoded = jwt.verify(decodedToken, key as Secret, options);
    const decodedPayload = decoded as JwtPayload;
    const userId = decodedPayload?.payload?.user_id;
    if (userId) {
      return userId;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

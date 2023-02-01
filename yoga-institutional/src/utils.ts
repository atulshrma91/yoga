import { Yoga } from './app';
import { createYoga, createSchema } from 'graphql-yoga';
import { getUser } from './graphql/resolvers/query';
import { typeDefinitions } from './graphql/schema';
import { createContext, GraphQLContext } from './context';
import { Resolvers } from './types';

const resolvers: Resolvers = {
  Query: {
    users: async (
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

import type { PrismaClient, users } from '@prisma/client';
import { Yoga } from './app';
import { authenticateUser } from './utils';

export type GraphQLContext = {
  prisma: PrismaClient;
  currentUser: null | users;
};

export const createContext = async (
  yoga: Yoga,
  request: any
): Promise<GraphQLContext> => {
  const prisma = yoga.prismaClient;
  const userId = await authenticateUser(prisma, request);
  return {
    prisma,
    currentUser: userId
      ? await prisma.users.findUnique({
          where: { uuid: userId as string },
        })
      : null,
  };
};

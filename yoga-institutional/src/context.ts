import type { PrismaClient } from '@prisma/client';
import { Yoga } from './app';

export type GraphQLContext = {
  prisma: PrismaClient;
};

export const createContext = async (
  yoga: Yoga,
  request: any
): Promise<GraphQLContext> => {
  const prisma = yoga.prismaClient;
  return {
    prisma,
  };
};

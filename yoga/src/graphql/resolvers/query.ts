import type { GraphQLContext } from '../../context';
import { GraphQLError } from 'graphql';
import { User } from '../../types';

export const getUser = async (context: GraphQLContext): Promise<User> => {
  try {
    if (context.currentUser === null) {
      return Promise.reject(new GraphQLError(`Unauthorized`));
    }
    const user = (await context.prisma.users.findUnique({
      select: {
        uuid: true,
        firstName: true,
        lastName: true,
      },
      where: {
        uuid: context.currentUser?.uuid,
      },
    })) as User;
    return user;
  } catch (err) {
    return Promise.reject(new GraphQLError((err as Error).message));
  }
};

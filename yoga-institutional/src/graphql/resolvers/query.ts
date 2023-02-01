import type { GraphQLContext } from '../../context';
import { GraphQLError } from 'graphql';
import { User } from '../../types';

export const getUser = async (
  context: GraphQLContext
): Promise<Array<User>> => {
  try {
    const user = (await context.prisma.users.findMany({
      select: {
        firstName: true,
        lastName: true,
      },
    })) as User[];
    console.log(user);
    return user;
  } catch (err) {
    return Promise.reject(new GraphQLError((err as Error).message));
  }
};

export const typeDefinitions = `
  type Query {
    user: User
  }

  type User{
    uuid: String!
    firstName: String!
    lastName: String!
  }
`;

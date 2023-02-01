export const typeDefinitions = `
  type Query {
    users: [User]
  }

  type User{
    firstName: String!
    lastName: String
  }
`;

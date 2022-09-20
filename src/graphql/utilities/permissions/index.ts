import { shield, allow } from "graphql-shield";
import { isAuthenticated } from "graphql/utilities/permissions/rules/isAuthenticated";

export const permissions = shield({
  Query: {
    "*": isAuthenticated,
  },
  Mutation: {
    "*": allow,
  },
});

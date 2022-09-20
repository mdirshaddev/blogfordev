/* eslint-disable no-console */
import { rule } from "graphql-shield";

export const isAuthenticated = rule({ cache: "contextual" })(
  async (_, __, ___) => {
    return false;
  }
);

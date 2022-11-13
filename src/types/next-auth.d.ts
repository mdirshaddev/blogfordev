/*eslint no-unused-vars: "off"*/
import NextAuth, { DefaultSession } from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      // extended user in session for accessToken
      accessToken: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
  }
}

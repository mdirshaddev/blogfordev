import NextAuth from "next-auth";
import { prisma } from "libs/prisma";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// Enable studio auth in development mode
const cookiesPolicy =
  process.env.NODE_ENV === "development"
    ? {
        sessionToken: {
          name: `_Secure_next-auth.session-token`,
          options: {
            httpOnly: true,
            sameSite: "None",
            path: "/",
            secure: true,
          },
        },
      }
    : {};

// TODO: Need to add loggers for catching errors
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.PROVIDER_GITHUB_ID,
      clientSecret: process.env.PROVIDER_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    // called after sucessful signin
    jwt: async ({ token, user, account }) => {
      if (user) token.id = user.id;
      if (account) token.accessToken = account.access_token;
      return token;
    }, // called whenever session is checked
    session: async ({ session, token }) => {
      if (token) session.id = token.id;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  cookies: cookiesPolicy,
});

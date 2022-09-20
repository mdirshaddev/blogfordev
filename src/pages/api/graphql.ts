import { createContext } from "graphql/utilities/context";
import { schema } from "graphql/utilities/schema";
import cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { PageConfig } from "next";
import { RequestHandler } from "micro";
import { IncomingMessage, ServerResponse } from "http";

// Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

// TODO: Need to add loggers
const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

let apolloServerHandler: RequestHandler;

async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }

  return apolloServerHandler;
}

const handler: RequestHandler = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const apolloServerHandler = await getApolloServerHandler();

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  return apolloServerHandler(req, res);
};

// Enable studio in development mode
const corsConfig =
  process.env.NODE_ENV === "development"
    ? {
        origin: "https://studio.apollographql.com",
        allowCredentials: true,
      }
    : {};

export default cors(corsConfig)(handler);

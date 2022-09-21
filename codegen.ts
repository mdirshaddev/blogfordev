import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: ["./src/graphql/**/*.graphql"],
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        isReactHook: true,
        fetcher: "graphql-request",
        addInfiniteQuery: true,
      },
    },
    "graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  require: ["ts-node/register"],
};

export default config;

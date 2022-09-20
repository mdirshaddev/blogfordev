import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: ["./src/graphql/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
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
  },
  require: ["ts-node/register"],
};

export default config;

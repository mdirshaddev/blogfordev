module.exports = {
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
};

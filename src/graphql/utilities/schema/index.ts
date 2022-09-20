import { join } from "path";
import { makeSchema, asNexusMethod } from "nexus";
import { DateTimeResolver } from "graphql-scalars";
import { applyMiddleware } from "graphql-middleware";

// Permissions
import { permissions } from "graphql/utilities/permissions";

// Queries
import { UserQueries } from "graphql/utilities/schema/queries/User.queries";

// Mutations
import { UserMutations } from "graphql/utilities/schema/mutations/User.mutation";

// Nexus Types
import { User } from "graphql/utilities/schema/types/User";

export const GQLDate = asNexusMethod(DateTimeResolver, "date");

export const baseSchema = makeSchema({
  types: [User, UserQueries, UserMutations, GQLDate],
  plugins: [],
  outputs: {
    typegen: join(process.cwd(), "src/generated/nexus-typegen.ts"),
    schema: join(process.cwd(), "schema.graphql"),
  },
  contextType: {
    module: join(process.cwd(), "src/graphql/utilities/context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});

export const schema = applyMiddleware(
  baseSchema,
  permissions.generate(baseSchema)
);

import { extendType, stringArg, nonNull } from "nexus";

export const UserMutations = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createOneUser", {
      type: "User",
      args: {
        name: stringArg(),
        email: nonNull(stringArg()),
      },
      resolve: async (_, { name, email }, context) => {
        return context.prisma.user.create({
          data: {
            name,
            email,
          },
        });
      },
    });
  },
});

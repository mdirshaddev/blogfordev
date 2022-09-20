import { extendType, nonNull, stringArg } from "nexus";

export const UserQueries = extendType({
  type: "Query",
  definition: (t) => {
    t.field("user", {
      type: "User",
      args: {
        userId: nonNull(stringArg()),
      },
      async resolve(_, { userId }, context) {
        return context.prisma.user.findFirst({
          where: {
            id: userId,
          },
        });
      },
    });
  },
});

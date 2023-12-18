import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx, args) => {
    const footer1 = await ctx.db.query("footer1").collect();

    return footer1.at(0);
  },
});

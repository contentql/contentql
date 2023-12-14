import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx, args) => {
    const hero2 = await ctx.db.query("hero2").collect();

    return hero2.at(0);
  },
});

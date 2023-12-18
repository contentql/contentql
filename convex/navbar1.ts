import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx, args) => {
    const navbar1 = await ctx.db.query("navbar1").collect();

    return navbar1.at(0);
  },
});

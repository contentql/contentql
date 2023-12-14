import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx, args) => {
    const hero1 = await ctx.db.query("hero1").collect();

    return hero1;
  },
});

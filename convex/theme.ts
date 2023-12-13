import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const get = query({
  args: {},
  handler: async (ctx, args) => {
    const theme = await ctx.db.query('theme').collect();

    return theme.at(0).theme;
  },
});

export const update = mutation({
  args: { id: v.id('theme'), theme: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, { theme: args.theme });
  },
});

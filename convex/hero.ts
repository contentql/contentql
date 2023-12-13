import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const get = query({
  args: {},
  handler: async (ctx, args) => {
    const hero = await ctx.db.query('hero').collect();

    return hero.at(0);
  },
});

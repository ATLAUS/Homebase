import { mutation } from "./_generated/server";

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    if (!identity.email) {
      throw new Error("User email is required");
    }

    // Check if we've already stored this identity before.
    const user = await ctx.db
    .query("users")
    .withIndex("by_token", (q) =>
      q.eq("tokenIdentifier", identity.tokenIdentifier),
    )
    .unique();
  if (user !== null) {
    // If we've seen this identity before but the name has changed, patch the value.
    if (user.email !== identity.email) {
      await ctx.db.patch(user._id, { email: identity.email });
    }
    return user._id;
  }


    // If it's a new identity, create a new `User`.
    return await ctx.db.insert("users", {
      tokenIdentifier: identity.tokenIdentifier,
      email: identity.email,
    });
  },
});
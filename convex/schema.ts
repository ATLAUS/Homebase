import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        tokenIdentifier: v.string(),
        email: v.optional(v.string()),
    }).index("by_token", ["tokenIdentifier"]).index("by_email", ["email"]),

    tasks: defineTable({
        taskName: v.string(),
        isCompleted:v.boolean(),
        parentId: v.optional(v.id("tasks")),
        userId: v.string(),
    }).index("by_parentId", ["parentId"]).index("by_user", ["userId"] )
})
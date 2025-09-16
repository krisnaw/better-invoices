import {integer, pgTable, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {user} from "@/db/schema/auth-schema";
import {createInsertSchema, createSelectSchema} from "drizzle-zod";

export const customersTable = pgTable("customers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  contact: varchar({ length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const customerInsertSchema = createInsertSchema(customersTable).omit({
  createdAt: true,
  updatedAt: true,
})

export const customerSelectSchema = createSelectSchema(customersTable);
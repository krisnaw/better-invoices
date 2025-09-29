import {integer, pgTable, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {user} from "@/db/schema/auth-schema";
import {customer} from "@/db/schema/customer-schema";
import {createSelectSchema} from "drizzle-zod";

export const invoicesTable = pgTable("invoices", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  customerId: integer("customer_id")
    .notNull()
    .references(() => customer.id, { onDelete: "cascade" }),
  invoiceNumber: varchar("invoice_number",{ length: 255 }).notNull(),

  status: varchar("status",{ length: 255 }).notNull().default("draft"),
  currency: varchar("currency",{ length: 255 }).notNull().default("IDR"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const invoiceSelectSchema = createSelectSchema(invoicesTable);

export const invoicesRelations = relations(invoicesTable, ({one}) => ({
  customer: one(customer, {
    fields: [invoicesTable.customerId],
    references: [customer.id],
  }),
}));

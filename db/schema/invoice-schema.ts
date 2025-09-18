import {integer, pgTable, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {user} from "@/db/schema/auth-schema";
import {customersTable} from "@/db/schema/customer-schema";
import {createSelectSchema} from "drizzle-zod";

export const invoicesTable = pgTable("invoices", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  customerId: integer("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  invoiceNumber: varchar("invoice_number",{ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const invoiceSelectSchema = createSelectSchema(invoicesTable);

export const invoicesRelations = relations(invoicesTable, ({one}) => ({
  customer: one(customersTable, {
    fields: [invoicesTable.customerId],
    references: [customersTable.id],
  }),
}));

import {integer, numeric, pgTable, timestamp, varchar} from "drizzle-orm/pg-core";
import {invoicesTable} from "@/db/schema/invoice-schema";
import {createSelectSchema} from "drizzle-zod";
import {z} from "zod";

export const invoiceItemsTable = pgTable("invoice_items", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  invoiceId: integer("invoice_id")
    .notNull()
    .references(() => invoicesTable.id, { onDelete: "cascade" }),
  name: varchar({ length: 255 }).notNull(),
  quantity: integer().notNull(),
  price: numeric("price", { precision: 12, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const invoiceItemsSelectSchema = createSelectSchema(invoiceItemsTable);
export type InvoiceItemSchema = z.infer<typeof invoiceItemsSelectSchema>
import {integer, pgTable, text, timestamp} from "drizzle-orm/pg-core";
import {invoicesTable} from "@/db/schema/invoice-schema";
import {createInsertSchema} from "drizzle-zod";

export const mailEventSchema = pgTable("mail_event", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  invoiceId: integer("invoice_id")
    .notNull()
    .references(() => invoicesTable.id, { onDelete: "cascade" }),

  resendMailId: text("resend_mail_id").notNull(),
  status: text("status").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});


export const mailInsertSchema = createInsertSchema(mailEventSchema);
// Define a type for Zod formatted errors (treeified)
import {z} from "zod";
import {invoiceSelectSchema} from "@/db/schema/invoice-schema";
import {customerSelectSchema} from "@/db/schema/customer-schema";

export type ZodFormattedErrors = {
  [field: string]: string[] | ZodFormattedErrors; // recursive for nested objects
};

export type ActionResponse = {
  success: boolean
  message: string,
  errors?: Record<string, string[]> | ZodFormattedErrors
  error?: string,
  data?: string | Array<object> | object | number,
}

export type InvoiceType = z.infer<typeof invoiceSelectSchema>
export type CustomerType = z.infer<typeof customerSelectSchema>
export type InvoiceWithCustomer = InvoiceType & {customer: CustomerType}

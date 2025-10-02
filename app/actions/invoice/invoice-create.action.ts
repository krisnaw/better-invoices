"use server"

import {ActionResponse} from "@/lib/types";
import {z} from "zod";
import {db} from "@/db/db-connection";
import {invoicesTable} from "@/db/schema/invoice-schema";
import {invoiceItemsTable} from "@/db/schema/invoice-item-schema";

const lineItemSchema = z.object({
  name: z.string(),
  quantity: z.number().int().nonnegative(),
  price: z.string(),
})

const invoiceStateSchema = z.object({
  userId: z.string(),
  invoiceNumber: z.string(),
  invoiceDate: z.date(),
  status: z.string(),
  currency: z.string(),
  customer: z.string(),
  lineItems: z.array(lineItemSchema),
})

type SubmitData = z.infer<typeof invoiceStateSchema>;

export async function createInvoiceAction(formData: SubmitData): Promise<ActionResponse> {
  const validate = invoiceStateSchema.safeParse(formData);
  // if (!validate.success) {
  //   return {
  //     success: false,
  //     message: "Invalid data",
  //     errors: z.formatError(validate.error),
  //   }
  // }

  console.log(formData)

  try {
    await db.transaction(async (tx) => {
      const [invoice] = await tx.insert(invoicesTable).values({
        userId: formData.userId,
        customerId: Number(formData.customer),
        invoiceNumber: formData.invoiceNumber,
        status: formData.status,
        currency: formData.currency,
      }).returning()

      const lineItems = formData.lineItems.map((item) => ({
        invoiceId: Number(invoice.id),
        name: item.name,
        quantity: Number(item.quantity),
        price: item.price,
      }))

      await tx.insert(invoiceItemsTable).values(lineItems)

    });

  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: "Sorry, something went wrong. Please try again later."
    }
  }

  return {
    success: true,
    message: "Invoice created successfully",
  }
}
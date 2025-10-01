"use server"

import {ActionResponse} from "@/lib/types";
import {db} from "@/db/db-connection";

export async function createInvoiceAction(): Promise<ActionResponse> {

  await db.transaction(async (tx) => {
    // const [invoice] = await tx.insert(invoicesTable).values({
    //   userId: '',
    //   customerId: 1,
    //   invoiceNumber: "INV-001",
    //   status: "paid",
    //   currency: "USD",
    //   description: "Test invoice",
    // }).returning()

    // await tx.insert(invoiceItemsTable).values(
    //   [
    //     {
    //       invoiceId: invoice.id,
    //       name: "Test item",
    //       quantity: 1,
    //       price: '10000',
    //     },
    //     {
    //       invoiceId: invoice.id,
    //       name: "Test item",
    //       quantity: 1,
    //       price: '10000',
    //     }
    //   ]
    // )

  });

  return {
    success: true,
    message: "Invoice created successfully",
  }
}
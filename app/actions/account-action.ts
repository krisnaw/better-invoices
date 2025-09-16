"use server"
import {ActionResponse} from "@/lib/types";
import {customerInsertSchema, customersTable} from "@/db/schema/customer-schema";
import {z} from "zod";
import {db} from "@/db/db-connection";

export type CustomerData = z.infer<typeof customerInsertSchema>

export default async function CreateCustomer(FormData: CustomerData): Promise<ActionResponse> {

  const validation = customerInsertSchema.safeParse(FormData)
  if (!validation.success) {
    return {
      success: false,
      message: 'Invalid data',
      errors: z.formatError(validation.error)
    }
  }

  const [inserted] = await db.insert(customersTable).values(validation.data).returning();
  console.log(inserted)

  if (!inserted) {
    return {
      success: false,
      message: 'Error creating customer',
    }
  }

  return {
    success: true,
    message: 'Success, customer created',
    data: inserted.id,
  }
}
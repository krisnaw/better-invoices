"use server"
import {ActionResponse} from "@/lib/types";
import {customerInsertSchema, customersTable} from "@/db/schema/customer-schema";
import {eq} from "drizzle-orm";
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

const customerUpdateSchema = customerInsertSchema.extend({
  id: z.number(),
})

export type CustomerUpdateData = z.infer<typeof customerUpdateSchema>

export async function UpdateCustomer(FormData: CustomerUpdateData): Promise<ActionResponse> {
  const validation = customerUpdateSchema.safeParse(FormData)
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid data",
      errors: z.formatError(validation.error),
    }
  }

  const {id, ...payload} = validation.data

  const [updated] = await db
    .update(customersTable)
    .set(payload)
    .where(eq(customersTable.id, id))
    .returning({id: customersTable.id})

  if (!updated) {
    return {
      success: false,
      message: "Error updating customer",
    }
  }

  return {
    success: true,
    message: "Success, customer updated",
    data: updated.id,
  }
}

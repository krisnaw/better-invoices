"use server"

import {ActionResponse} from "@/lib/types";
import {db} from "@/db/db-connection";
import {customer} from "@/db/schema/customer-schema";
import {eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

export async function customerDeleteAction(id: number) : Promise<ActionResponse> {
   await db.delete(customer).where(eq(customer.id, id));
   revalidatePath("/dashboard/customers", "page")
   return{
      success: true,
      message: "Customer deleted successfully"
   }
}
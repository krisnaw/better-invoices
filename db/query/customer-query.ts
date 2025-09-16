import {db} from "@/db/db-connection";
import {customersTable} from "@/db/schema/customer-schema";
import {eq} from "drizzle-orm";

export async function getCustomerById(id: number) {
  const customer = await db.select().from(customersTable).where(eq(customersTable.id, id)).limit(1);
  return customer[0]
}
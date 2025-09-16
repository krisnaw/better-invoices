import {db} from "@/db/db-connection";
import {customersTable} from "@/db/schema/customer-schema";
import {eq} from "drizzle-orm";

export async function getCustomers() {
  return db.select().from(customersTable).limit(10);
}

export async function getCustomersByUserId(userId: string) {
  return db.select().from(customersTable).where(eq(customersTable.userId, userId)).limit(10);
}

export async function getCustomerById(id: number) {
  const customer = await db.select().from(customersTable).where(eq(customersTable.id, id)).limit(1);
  return customer[0]
}
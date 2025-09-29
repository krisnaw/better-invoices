import {db} from "@/db/db-connection";
import {customer} from "@/db/schema/customer-schema";
import {eq} from "drizzle-orm";

export async function getCustomers() {
  return db.select().from(customer).limit(10);
}

export async function getCustomersByUserId(userId: string) {
  return db.select().from(customer).where(eq(customer.userId, userId)).limit(10);
}

export async function getCustomerById(id: number) {
  const customer = await db.select().from(customer).where(eq(customer.id, id)).limit(1);
  return customer[0]
}
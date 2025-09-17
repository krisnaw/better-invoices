"use server"

import {db} from "@/db/db-connection";
import {invoicesTable} from "@/db/schema/invoice-schema";

export async function getInvoices() {
  return db.select().from(invoicesTable).limit(10);
}

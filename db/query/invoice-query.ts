"use server"

import {db} from "@/db/db-connection";

export async function getInvoices() {
  return db.query.invoicesTable.findMany({
    with: {
      customer: true,
     }
  })
}

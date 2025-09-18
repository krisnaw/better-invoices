"use server"
import {db} from "@/db/db-connection";

export async function getInvoices() {
  return db.query.invoicesTable.findMany({
    with: {
      customer: true,
     }
  })
}


export async function getInvoicesById(id: number) {
  return db.query.invoicesTable.findFirst({
    where: (invoicesTable, { eq }) => (eq(invoicesTable.id, id)),
    with: {
      customer: true,
    }
  })
}

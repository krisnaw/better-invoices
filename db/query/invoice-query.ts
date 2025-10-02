"use server"
import {db} from "@/db/db-connection";

export async function getInvoicesById(id: number) {
  return db.query.invoicesTable.findFirst({
    where: (invoicesTable, { eq }) => (eq(invoicesTable.id, id)),
    with: {
      customer: true,
      items: true,
    }
  })
}


export async function getInvoices() {
  return db.query.invoicesTable.findMany({
    with: {
      customer: true,
     }
  })
}

export async function getInvoiceByUserId(userId: string) {
  return db.query.invoicesTable.findMany({
    where: (invoicesTable, { eq }) => (eq(invoicesTable.userId, userId)),
    with: {
      customer: true,
    }
  })
}



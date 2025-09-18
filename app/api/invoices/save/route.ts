import {NextRequest} from "next/server";
import {invoicesTable} from "@/db/schema/invoice-schema";
import {db} from "@/db/db-connection";

export async function POST(request: NextRequest) {
  const {customerId, invoiceNumber, userId} = await request.json()
  const [inserted] = await db.insert(invoicesTable).values({
    customerId: Number(customerId) ,
    invoiceNumber: invoiceNumber,
    userId: userId,
  }).returning();
  console.log(inserted);
  return new Response("Invoice saved successfully", {status: 200});
}
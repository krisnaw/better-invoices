import {NextRequest, NextResponse} from "next/server";

import {db} from "@/db/db-connection";
import {invoicesTable} from "@/db/schema/invoice-schema";

export async function POST(request: NextRequest) {
  try {
    const {customerId, invoiceNumber, userId} = await request.json();

    if (!customerId || !invoiceNumber || !userId) {
      return NextResponse.json({error: "Missing required fields"}, {status: 400});
    }

    // if (invoiceId) {
    //   const [updated] = await db
    //     .update(invoicesTable)
    //     .set({
    //       customerId: Number(customerId),
    //       invoiceNumber,
    //     })
    //     .where(eq(invoicesTable.id, Number(invoiceId)))
    //     .returning();
    //
    //   return NextResponse.json({invoice: updated});
    // }

    const [inserted] = await db
      .insert(invoicesTable)
      .values({
        customerId: Number(customerId),
        invoiceNumber,
        userId,
      })
      .returning();

    return NextResponse.json({invoice: inserted});
  } catch (error) {
    console.error("Failed to save invoice", error);
    return NextResponse.json({error: "Failed to save invoice"}, {status: 500});
  }
}

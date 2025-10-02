import {NextRequest, NextResponse} from "next/server";
import {getMailEventByResendId} from "@/db/query/mail-event.query";
import {db} from "@/db/db-connection";
import {mailEventSchema} from "@/db/schema/mail-event.schema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (body.data) {
    const emailId = body.data.id;
    const lastEvent = await getMailEventByResendId(emailId)
    console.log(lastEvent)
    if (lastEvent) {
      const data = await db.insert(mailEventSchema).values({
        invoiceId: lastEvent.invoiceId,
        resendMailId: emailId,
        status: body.type
      })
      console.log(data)
    }
  }
  console.log(body)
  return NextResponse.json({ message: "Webhook received"}, {status: 200});
}
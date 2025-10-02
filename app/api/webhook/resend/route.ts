import {NextRequest, NextResponse} from "next/server";
import {getMailEventByResendId} from "@/db/query/mail-event.query";

export async function POST(request: NextRequest) {

  const body = await request.json();
  console.log(body);
  if (body.data) {
    const emailId = body.data.id;
    const lastEvent = await getMailEventByResendId(emailId)

  }

  return NextResponse.json({ message: "Webhook received"}, {status: 200});
}
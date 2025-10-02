"use server"

import {Resend} from "resend";
import InvoiceEmail from "@/components/email/invoice.email";
import {db} from "@/db/db-connection";
import {mailEventSchema} from "@/db/schema/mail-event.schema";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendInvoiceEmailAction(invoiceId: number): Promise<void> {
  const { data, error } = await resend.emails.send({
    from: 'Acme <info@krisnawijaya.com>',
    to: ['krisna.w2010@gmail.com'],
    subject: 'Hello world',
    react: InvoiceEmail({ firstName: 'John' }),
    attachments: [
      {
        filename: 'sample.txt',
        // Resend expects attachment content as base64.
        content: Buffer.from('Sample attachment content').toString('base64')
      }
    ],
    tags: [
      {
        name: 'invoice',
        value: invoiceId.toString()
      }
    ]
  });
  if (data) {
    await db.insert(mailEventSchema).values({
      invoiceId: invoiceId,
      resendMailId: data.id,
      status: "processed"
    })
  }
}

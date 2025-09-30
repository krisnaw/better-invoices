"use server"

import {Resend} from "resend";
import InvoiceEmail from "@/components/email/invoice.email";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendAction(): Promise<void> {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: InvoiceEmail({ firstName: 'John' }),
  });
  console.log(data);
}
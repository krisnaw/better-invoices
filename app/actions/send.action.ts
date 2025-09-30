"use server"

import {Resend} from "resend";
import {EmailTemplate} from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendAction(): Promise<void> {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });
  console.log(data);
}
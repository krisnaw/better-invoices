import {betterAuth} from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import {db} from "@/db/db-connection"; // your drizzle instance
import {schema} from "@/db/schema";
import {transporter} from "@/lib/mail-transporter";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({user, url, token}, request) => {
      await transporter.sendMail({
        from: '"Better-Invoices" <info@better-invoices.com>',
        to: `${user.email}`,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
        html: `<b>Hello world? ${url}</b>`, // HTML body
      })
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
      user: schema.user,
    }
  }),
});
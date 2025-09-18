import {NextResponse} from "next/server";
import {transporter} from "@/lib/mail-transporter";
import {pdf} from "@react-pdf/renderer";
import {InvoiceTemplate} from "@/lib/invoice-template";
import {buffer} from 'node:stream/consumers';

export async function POST() {
  try {


    const invoice = await pdf(<InvoiceTemplate />).toBuffer()

    const info =  transporter.sendMail({
      from: '"Invoiceku" <no-reply@invoiceku.test>',
      to: "bar@example.com, baz@example.com",
      subject: `Invoice `,
      text: "Hello world?",
      attachments: [
        {
          filename: "invoice.pdf",
          content: await buffer(invoice),
        }
      ]
    });

    console.log("Email sent:", info);

    return NextResponse.json({
      message: "Invoice sent",
    });

  } catch (error) {
    console.error("Unable to send invoice email", error);
    return NextResponse.json({ error: "Failed to send invoice" }, { status: 500 });
  }
}

import React from "react";
import {NextRequest} from "next/server";
import {renderToBuffer} from "@react-pdf/renderer";
import {InvoicePdfDocument, InvoicePdfPayload} from "@/lib/invoice-pdf";

const FILE_NAME_FALLBACK = "invoice";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = body as InvoicePdfPayload;

    if (!data || !data.items || data.items.length === 0) {
      return new Response("Missing invoices data", {status: 400});
    }

    const buffer = await renderToBuffer(<InvoicePdfDocument data={data} />);

    const fileName = sanitizeFileName(data.invoiceNumber || FILE_NAME_FALLBACK);

    const payload = new Uint8Array(buffer);

    return new Response(payload, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}.pdf"`,
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Failed to generate invoices PDF", error);
    return new Response("Failed to generate invoices PDF", {status: 500});
  }
}

const sanitizeFileName = (value: string) => value.replace(/[^a-z0-9-_]+/gi, "_");

"use client"
import nextDynamic from "next/dynamic";
import {InvoiceTemplate} from "@/lib/invoice-template";

export const dynamic = "force-dynamic";

const PDFViewer = nextDynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {ssr: false},
);

export default function Page() {
  return (
    <div className="h-screen w-full">
      <PDFViewer>
        <InvoiceTemplate />
      </PDFViewer>
    </div>
  );
}

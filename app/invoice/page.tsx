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
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <PDFViewer style={{width: "80%", height: "100%"}}>
        <InvoiceTemplate />
      </PDFViewer>
    </div>
  );
}

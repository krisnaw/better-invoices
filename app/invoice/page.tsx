"use client"
import {InvoiceContainer} from "@/components/invoice/invoice-container";
import {InvoiceProvider} from "@/components/invoice/invoice-provider";

export default function Page() {
  return (
    <InvoiceProvider>
      <InvoiceContainer />
    </InvoiceProvider>
  )
}
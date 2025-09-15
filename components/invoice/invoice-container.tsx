"use client"
import {InvoiceForm} from "@/components/invoice/invoice-form";
import {InvoiceProvider} from "@/components/invoice/invoice-provider";

export function InvoiceContainer() {
  return (
    <InvoiceProvider>
      <InvoiceForm />
    </InvoiceProvider>
  )
}
"use client"
import {InvoiceContext, InvoiceProvider} from "@/components/invoice/invoice-provider";
import {InvoiceForm} from "@/components/invoice/invoice-form";
import {useContext} from "react";

export function InvoiceContainer() {
  const {issueDate} = useContext(InvoiceContext);
  const {invoiceNumber} = useContext(InvoiceContext);
  return (
    <InvoiceProvider>
      <div>
        Provider Data
        <ul>
          <li>
            Invoice Number: {invoiceNumber}
          </li>
          <li>
            Issue Date: {issueDate?.toLocaleDateString()}
          </li>
        </ul>
      </div>
      <InvoiceForm />
    </InvoiceProvider>
  )
}
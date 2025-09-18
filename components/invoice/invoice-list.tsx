"use client"

import {useRouter} from "next/navigation"
import {InvoiceType} from "@/lib/types";

const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(value)

export function InvoiceList({invoices}: {invoices: InvoiceType[]}) {
  const router = useRouter()

  return (
    <div style={{overflowX: "auto"}}>
      <table style={{width: "100%", borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={{textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb"}}>Number</th>
            <th style={{textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb"}}>Customer</th>
            <th style={{textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb"}}>Issue Date</th>
            <th style={{textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb"}}>Due Date</th>
            <th style={{textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb"}}>Amount</th>
            <th style={{textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb"}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                style={{
                  padding: "24px 16px",
                  textAlign: "center",
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                No invoices found. Create a new invoice to get started.
              </td>
            </tr>
          ) : (
            invoices.map((invoice: InvoiceType) => (
              <tr
                key={invoice.id}
                onClick={() => router.push(`/dashboard/invoice/${invoice.id}`)}
                style={{cursor: "pointer"}}
              >
                <td style={{padding: "10px 8px", borderBottom: "1px solid #f3f4f6", whiteSpace: "nowrap"}}>{invoice.invoiceNumber}</td>
                <td style={{padding: "10px 8px", borderBottom: "1px solid #f3f4f6"}}>{invoice.invoiceNumber}</td>
                <td style={{padding: "10px 8px", borderBottom: "1px solid #f3f4f6"}}>{invoice.invoiceNumber}</td>
                <td style={{padding: "10px 8px", borderBottom: "1px solid #f3f4f6"}}>{invoice.invoiceNumber}</td>
                <td style={{padding: "10px 8px", borderBottom: "1px solid #f3f4f6"}}>{invoice.invoiceNumber}</td>
                <td style={{padding: "10px 8px", borderBottom: "1px solid #f3f4f6"}}></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

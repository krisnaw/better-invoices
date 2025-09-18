"use client"

import {useRouter} from "next/navigation"
import {InvoiceType} from "@/lib/types";

const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(value)

export function InvoiceList({invoices}: {invoices: InvoiceType[]}) {
  const router = useRouter()

  const onClickHandler = async () => {
    const res = await fetch(`/api/send/`, {
      method: "POST",
    })
    if (res.ok) {
      console.log("success")
    }
  }

  return (
    <div style={{overflowX: "auto"}}>
      <button onClick={onClickHandler}>Send</button>
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
          {invoices.map((invoice: InvoiceType) => (
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
              <td style={{padding: "10px 8px", borderBottom: "1px solid #f3f4f6"}}>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

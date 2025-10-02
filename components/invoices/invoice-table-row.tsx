"use client"

import React from "react";
import {TableCell, TableRow} from "@/components/ui/table";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {sendInvoiceEmailAction} from "@/app/actions/sendInvoiceEmailAction";
import {InvoiceWithCustomer} from "@/db/schema/invoice-schema";

export default function InvoiceTableRow({invoice}: { invoice: InvoiceWithCustomer }) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/dashboard/invoices/${invoice.id}`);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavigate();
    }
  }

  return (
    <TableRow
      role="button"
      tabIndex={0}
      className="cursor-pointer"
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
    >
      <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
      <TableCell>{invoice.customer?.name ?? "-"}</TableCell>
      <TableCell>{invoice.status}</TableCell>
      <TableCell className="text-right">{invoice.currency}</TableCell>
      <TableCell className="text-right">
        <Button variant="outline"
                onClick={() => sendInvoiceEmailAction(invoice.id)}>Send</Button>
      </TableCell>
    </TableRow>
  )
}

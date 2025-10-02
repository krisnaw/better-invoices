"use client"

import React from "react";
import {TableCell, TableRow} from "@/components/ui/table";
import {useRouter} from "next/navigation";

interface InvoiceTableRowProps {
  invoice: {
    id: number
    invoiceNumber: string
    status: string
    currency: string
    customer?: {
      name: string | null
    } | null
  }
}

export default function InvoiceTableRow({invoice}: InvoiceTableRowProps) {
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
    </TableRow>
  )
}

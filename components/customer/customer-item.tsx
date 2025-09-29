"use client"

import Link from "next/link"

import {CustomerType} from "@/lib/types"
import {TableCell, TableRow} from "@/components/ui/table"
import {CustomerActions} from "@/components/customer/customer-actions"

export function CustomerItem({ customer }: { customer: CustomerType }) {
  const detailHref = `/dashboard/customers/${customer.id}`

  return (
    <TableRow>
      <TableCell className="font-medium">
        <Link href={detailHref} className="block w-full">
          {customer.name}
        </Link>
      </TableCell>
      <TableCell>
        <Link href={detailHref} className="block w-full text-muted-foreground">
          {customer.contact}
        </Link>
      </TableCell>
      <TableCell>
        <Link href={detailHref} className="block w-full text-muted-foreground">
          {customer.email}
        </Link>
      </TableCell>
      <TableCell className="text-right">
        <CustomerActions customerId={customer.id} />
      </TableCell>
    </TableRow>
  )
}

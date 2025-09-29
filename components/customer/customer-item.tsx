"use client"

import {CustomerType} from "@/lib/types"
import {TableCell, TableRow} from "@/components/ui/table"
import {CustomerActions} from "@/components/customer/customer-actions"

export function CustomerItem({ customer }: { customer: CustomerType }) {
  return (
    <TableRow>
      <TableCell>{customer.name}</TableCell>
      <TableCell>{customer.contact}</TableCell>
      <TableCell>{customer.email}</TableCell>
      <TableCell className="text-right">
        <CustomerActions customerId={customer.id} />
      </TableCell>
    </TableRow>
  )
}

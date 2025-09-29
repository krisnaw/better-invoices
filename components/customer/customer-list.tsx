"use client"

import { CustomerItem } from "@/components/customer/customer-item"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CustomerType } from "@/lib/types"

export function CustomerList({ customers }: { customers: CustomerType[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Contact Person</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.length ? (
          customers.map((customer) => (
            <CustomerItem key={customer.id} customer={customer} />
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center text-muted-foreground">
              No customers yet.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

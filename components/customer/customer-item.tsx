"use client"

import Link from "next/link"
import { Ellipsis } from "lucide-react"

import { CustomerType } from "@/lib/types"
import { Button } from "@/components/ui/button"
import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function CustomerItem({ customer }: { customer: CustomerType }) {
  return (
    <TableRow>
      <TableCell>{customer.name}</TableCell>
      <TableCell>{customer.contact}</TableCell>
      <TableCell>{customer.email}</TableCell>
      <TableCell>{customer.name}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open customer actions">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/customers/${customer.id}/edit`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}

"use client"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Ellipsis} from "lucide-react";
import Link from "next/link";

export function CustomerItem({customer} : {customer: any}) {

  // handle detele

  return (
    <tr>
      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6', whiteSpace: 'nowrap' }}>{customer.name}</td>
      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{customer.contact}</td>
      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{customer.email}</td>
      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>{customer.name}</td>
      <td style={{ padding: '10px 8px', borderBottom: '1px solid #f3f4f6' }}>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/dashboard/customers/${customer.id}/edit`}>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  )
}
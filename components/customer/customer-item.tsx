"use client"

import Link from "next/link"
import {Ellipsis, Loader2} from "lucide-react"

import {ActionResponse, CustomerType} from "@/lib/types"
import {Button} from "@/components/ui/button"
import {TableCell, TableRow,} from "@/components/ui/table"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {useActionState} from "react";
import {customerDeleteAction} from "@/app/actions/customer/customer-delete.action";
import {toast} from "sonner";

export function CustomerItem({customer}: { customer: CustomerType }) {

   const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(async (prevState, formData: FormData) => {
      const id = formData.get('id')
      const res = await customerDeleteAction(Number(id))
      if (!res.success) {
         toast.error(res.message)
      }
      toast.success(res.message)
      return res
   }, {
      success: false,
      message: ''
   })

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
                      <Ellipsis className="h-4 w-4"/>
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                   <DropdownMenuItem asChild>
                      <Link href={`/dashboard/customers/${customer.id}/edit`}>Edit</Link>
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-destructive">
                      <form action={formAction}>
                         <input type="hidden" name="id" value={customer.id}/>
                         <button type="submit">
                            Delete
                            {isPending && <Loader2 className="animate-spin"/>}
                         </button>
                      </form>
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </TableCell>
       </TableRow>
   )
}

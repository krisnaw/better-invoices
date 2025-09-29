"use client"

import Link from "next/link"
import {useActionState} from "react"
import {Ellipsis, Loader2} from "lucide-react"
import {toast} from "sonner"

import {ActionResponse} from "@/lib/types"
import {customerDeleteAction} from "@/app/actions/customer/customer-delete.action"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

type CustomerActionsProps = {
  customerId: number
}

export function CustomerActions({ customerId }: CustomerActionsProps) {
  const [, formAction, isPending] = useActionState<ActionResponse, FormData>(
    async (_prevState, formData) => {
      const id = formData.get("id")
      const res = await customerDeleteAction(Number(id))

      if (!res.success) {
        toast.error(res.message)
        return res
      }

      toast.success(res.message)
      return res
    },
    { success: false, message: "" }
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open customer actions">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/customers/${customerId}/edit`}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-destructive" asChild>
          <form action={formAction}>
            <input type="hidden" name="id" value={customerId} />
            <button
              type="submit"
              className="flex w-full items-center justify-between gap-2"
              disabled={isPending}
            >
              Delete
              {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

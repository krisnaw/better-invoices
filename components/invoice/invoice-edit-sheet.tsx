"use client"

import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {useQueryState} from "nuqs";
import {InvoiceContainer} from "@/components/invoice/invoice-container";

export default function InvoiceEditSheet() {
  const [type] = useQueryState('type')
  const [invoiceId] = useQueryState('invoiceId')
  return (
    <Sheet open={type === "edit" && invoiceId !== undefined}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent className="w-[600px]">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <div>
          <InvoiceContainer />
        </div>

      </SheetContent>
    </Sheet>
  )
}
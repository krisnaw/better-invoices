"use client"

import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {useQueryState} from "nuqs";
import {InvoiceContainer} from "@/components/invoice/invoice-container";

export default function InvoiceSheet() {
  const [type] = useQueryState('type')
  return (
    <Sheet open={type === "create"}>
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
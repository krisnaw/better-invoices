"use client"

import {Sheet, SheetClose, SheetContent,} from "@/components/ui/sheet"
import {useQueryState} from "nuqs";
import {InvoiceContainer} from "@/components/invoice/invoice-container";
import {useRouter} from "next/navigation";

export default function InvoiceEditSheet() {
  const [type] = useQueryState('type')
  const [invoiceId] = useQueryState('invoiceId')
  const router = useRouter()

  const onClickClose = () => {
    router.push('/dashboard/invoice')
  }

  return (
    <Sheet open={type === "edit" && invoiceId !== undefined} >
      <SheetContent className="w-full sm:max-w-4xl">
        
        <SheetClose asChild>
          <button onClick={onClickClose}>Close</button>
        </SheetClose>

        <div>
          <InvoiceContainer/>
        </div>

      </SheetContent>
    </Sheet>
  )
}

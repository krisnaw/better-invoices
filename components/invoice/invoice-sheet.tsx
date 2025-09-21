"use client"

import {Sheet, SheetClose, SheetContent, SheetHeader,} from "@/components/ui/sheet"
import {useQueryState} from "nuqs";
import {InvoiceContainer} from "@/components/invoice/invoice-container";
import {useRouter} from "next/navigation";

export default function InvoiceSheet() {
  const [type] = useQueryState('type')
  const [invoiceId] = useQueryState('invoiceId')
  const router = useRouter()

  console.log(type, invoiceId)

  const onClickClose = () => {
    router.push('/dashboard/invoice')
  }

  return (
    <Sheet open={type === "create" || type === "edit" && invoiceId !== undefined}>
      <SheetContent className="w-full sm:max-w-4xl">
        <SheetHeader>
          <SheetClose asChild>
            <button onClick={onClickClose}>Close</button>
          </SheetClose>
        </SheetHeader>
        <div>
          <InvoiceContainer />
        </div>
      </SheetContent>
    </Sheet>
  )
}

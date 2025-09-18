import {useContext} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";
import {Input} from "@/components/ui/input";

export function InvoiceNumber() {
  const {invoiceNumber, setInvoiceNumber} = useContext(InvoiceContext);
  return (
    <div className="flex items-center gap-2">
      <div>
        Invoice no:
      </div>
      <div>
        <Input className="max-w-48"
               value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value as string)} />
      </div>
    </div>
  )
}
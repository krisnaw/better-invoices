import {useContext} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";

export function InvoiceNumber() {
  const {invoiceNumber, setInvoiceNumber} = useContext(InvoiceContext);
  return (
    <div className="flex items-center gap-2">
      <div>
        Invoice no:
      </div>
      <div>
        <input className="max-w-32 pl-3.5 py-2"
               value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value as string)} />
      </div>
    </div>
  )
}
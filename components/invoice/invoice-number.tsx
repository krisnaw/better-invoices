import {useContext} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";

export function InvoiceNumber() {
  const {invoiceNumber, setInvoiceNumber} = useContext(InvoiceContext);
  return (
    <>
      <div className="flex items-center gap-2">
        <div>
          Invoice no:
        </div>
        <div>
          <input className="focus:outline-none"
            value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value as string)} />
        </div>
      </div>
    </>
  )
}
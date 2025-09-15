import {InvoiceDatePicker} from "@/components/invoice/invoice-date-picker";
import {useContext} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";

export function InvoiceDueDate() {
  const {dueDate, setDueDate} = useContext(InvoiceContext);
  return (
    <div className="flex items-center gap-2">
      <div>
        Due date:
      </div>
      <div>
        <InvoiceDatePicker date={dueDate} setDate={(date: Date ) => setDueDate(date)} />
      </div>
    </div>
  )
}
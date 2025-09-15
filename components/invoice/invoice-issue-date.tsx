import {InvoiceDatePicker} from "@/components/invoice/invoice-date-picker";
import {useContext} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";

export function InvoiceIssueDate() {
  const {issueDate, setIssueDate} = useContext(InvoiceContext);
  return (
    <div className="flex items-center gap-2">
      <div>
        Issue date:
      </div>
      <div>
        <InvoiceDatePicker date={issueDate} setDate={(date: Date ) => setIssueDate(date)} />
      </div>
    </div>
  )
}
import {Button} from "@/components/ui/button";
import {Pencil, Save} from "lucide-react";
import {InvoiceDatePicker} from "@/components/invoice/invoice-date-picker";
import {useContext, useState} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";

export function InvoiceDate() {
  const {issueDate, setIssueDate} = useContext(InvoiceContext);
  const [isActive, setIsActive] = useState<boolean>(false)


  const onChange = (date: Date) => {
    setIssueDate(date)
  }

  return (
    <>
      {isActive ? <InvoiceDatePicker date={issueDate}
                                     setDate={(date: Date ) => onChange(date)} /> : <span>{issueDate?.toLocaleDateString()}</span>}

      {isActive ?
        <Button variant="ghost" onClick={() => setIsActive(!isActive)}><Save /></Button> :
        <Button variant="ghost" onClick={() => setIsActive(!isActive)}><Pencil /></Button>
      }
    </>
  )
}
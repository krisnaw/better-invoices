import {Button} from "@/components/ui/button";
import {Pencil, Save} from "lucide-react";
import {InvoiceDatePicker} from "@/components/invoice/invoice-date-picker";
import {useContext, useState} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";

export function InvoiceDueDate() {
  const {dueDate, setDueDate} = useContext(InvoiceContext);
  const [isActive, setIsActive] = useState<boolean>(false)


  const onChange = (date: Date) => {
    setDueDate(date)
  }

  return (
    <>
      {isActive ? <InvoiceDatePicker date={dueDate}
                                     setDate={(date: Date ) => onChange(date)} /> : <span>{dueDate?.toLocaleDateString()}</span>}

      {isActive ?
        <Button variant="ghost" onClick={() => setIsActive(!isActive)}><Save /></Button> :
        <Button variant="ghost" onClick={() => setIsActive(!isActive)}><Pencil /></Button>
      }
    </>
  )
}
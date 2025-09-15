import {Button} from "@/components/ui/button";
import {Pencil, Save} from "lucide-react";
import {InvoiceDatePicker} from "@/components/invoice/invoice-date-picker";
import {useContext, useState} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";

export function InvoiceDueDate() {
  const {dueDate, setDueDate} = useContext(InvoiceContext);
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <>

      <div className="flex items-center gap-2">
        <div>
          Due date:
        </div>
        <div>
          {isActive ?
            <div className="w-32">
              <InvoiceDatePicker date={dueDate} setDate={(date: Date ) => setDueDate(date)} />
            </div> :
            <div  className="w-32">{dueDate?.toLocaleDateString()}</div>}
        </div>
      </div>

      {isActive ?
        <Button variant="ghost" onClick={() => setIsActive(!isActive)}><Save /></Button> :
        <Button variant="ghost" onClick={() => setIsActive(!isActive)}><Pencil /></Button>
      }
    </>
  )
}
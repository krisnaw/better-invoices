import {Button} from "@/components/ui/button";
import {Pencil, Save} from "lucide-react";
import {useContext, useState} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";
import {Input} from "@/components/ui/input";

export function InvoiceNumber() {
  const {invoiceNumber, setInvoiceNumber} = useContext(InvoiceContext);
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <>
      <div className="flex items-center gap-2">
        <div>
          Invoice no:
        </div>
        <div>
          {isActive ?
            <Input  className="w-32"
              value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value as string)} /> :
            <div  className="w-32">{invoiceNumber}</div>}
        </div>
      </div>

      {isActive ?
        <Button variant="ghost" onClick={() => setIsActive(!isActive)}><Save /></Button> :
        <Button variant="ghost" onClick={() => setIsActive(!isActive)}><Pencil /></Button>
      }
    </>
  )
}
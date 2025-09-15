import {Button} from "@/components/ui/button";
import {Pencil, Save} from "lucide-react";
import {InvoiceDatePicker} from "@/components/invoice/invoice-date-picker";
import {useState} from "react";

type Props = {
  date: Date,
  isActive: boolean,
  onShow: any
}

export function InvoiceDate({date, isActive, onShow} : Props) {
  const [curDate, setDate] = useState<Date | undefined>(new Date())

  return (
    <span className="flex items-center ml-2.5">
      {isActive ? <InvoiceDatePicker date={curDate} setDate={setDate} /> : <span>{curDate?.toLocaleDateString()}</span>}

      {isActive ?
        <Button variant="ghost" onClick={onShow}><Save /></Button> :
        <Button variant="ghost" onClick={onShow}><Pencil /></Button>
      }
    </span>
  )
}
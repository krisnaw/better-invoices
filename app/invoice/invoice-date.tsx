"use client"

import * as React from "react"
import {useContext} from "react"
import {ChevronDownIcon} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {InvoiceContext} from "@/app/new/invoice-provider";

export function InvoiceDate() {
   const {state: invoiceState, dispatch} = useContext(InvoiceContext);
   const [open, setOpen] = React.useState(false)

   return (
       <div>
          <Popover open={open} onOpenChange={setOpen}>
             <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    id="date"
                    className="justify-between font-normal bg-white w-full"
                >
                   {invoiceState.invoiceDate ? invoiceState.invoiceDate.toLocaleDateString() : "Select date"}
                   <ChevronDownIcon />
                </Button>
             </PopoverTrigger>
             <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar
                    mode="single"
                    selected={invoiceState.invoiceDate}
                    disabled={{ before: new Date()}}
                    captionLayout="dropdown"
                    onSelect={(date : Date | undefined) => {
                       if (date) {
                          dispatch({ type: "update-invoice-date", payload: date })
                       }

                       setOpen(false)
                    }}
                />
             </PopoverContent>
          </Popover>
       </div>
   )
}

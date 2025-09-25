"use client"

import * as React from "react"
import {ChevronDownIcon} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"

export function InvoiceDate() {
   const [open, setOpen] = React.useState(false)
   const [date, setDate] = React.useState<Date | undefined>(undefined)

   return (
       <div>
          <Popover open={open} onOpenChange={setOpen}>
             <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    id="date"
                    className="justify-between font-normal bg-white w-full"
                >
                   {date ? date.toLocaleDateString() : "Select date"}
                   <ChevronDownIcon />
                </Button>
             </PopoverTrigger>
             <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    disabled={{ before: new Date()}}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                       setDate(date)
                       setOpen(false)
                    }}
                />
             </PopoverContent>
          </Popover>
       </div>
   )
}

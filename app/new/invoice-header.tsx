import {Input} from "@/components/ui/input";
import {InvoiceDate} from "@/app/invoice/invoice-date";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useContext, useState} from "react";
import {InvoiceContext} from "@/app/new/invoice-provider";

export default function InvoiceHeader() {
   const [customer, setCustomer] = useState<string>("Customer")
   const {state: invoiceState, dispatch} = useContext(InvoiceContext);

   return (
       <div>
          <div className=" grid grid-cols-2 gap-4">
             <div className="col-span-1">
                <div className="font-medium text-gray-900">
                   Invoice number
                </div>
                <div className="mt-1.5">
                   <Input value={invoiceState.invoiceNumber}
                          onChange={e => dispatch({ type: "update-invoice-number", payload: e.target.value })    }
                   />
                </div>
             </div>

             <div className="col-span-1">
                <div className="font-medium text-gray-900">
                   Invoice date
                </div>
                <div className="mt-1.5">
                   <InvoiceDate />
                </div>
             </div>

             <div className="col-span-1">
                <div className="font-medium text-gray-900">
                   From
                </div>
                <div className="mt-1.5">
                   <Textarea className="w-full"  />
                </div>
             </div>
             <div className="col-span-1">
                <div className="font-medium text-gray-900">
                   Customer
                </div>
                <div className="mt-1.5">
                   <Select
                       value={customer} onValueChange={(value: string) => setCustomer(value)}>
                      <SelectTrigger className="w-full">
                         <SelectValue placeholder="Theme"/>
                      </SelectTrigger>
                      <SelectContent>
                         <SelectItem value="light">Light</SelectItem>
                         <SelectItem value="dark">Dark</SelectItem>
                         <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                   </Select>

                </div>
             </div>
          </div>
       </div>
   )
}
import {Input} from "@/components/ui/input";
import {InvoiceDate} from "@/app/invoice/invoice-date";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";

export default function InvoiceHeader() {
   const [from, setFrom] = useState<string>("Acme Inc.")
   const [customer, setCustomer] = useState<string>("Customer")
   const [invoiceNumber, setInvoiceNumber] = useState<string>("INV-00001")
   return (
       <div className="px-4 py-5 sm:px-6">
          <div className=" grid grid-cols-2 gap-4">
             <div className="col-span-1">
                <div className="font-medium text-gray-900">
                   Invoice number
                </div>
                <div className="mt-1.5">
                   <Input  />
                </div>
             </div>

             <div className="col-span-1">
                <div className="font-medium text-gray-900">
                   Invoice date
                </div>
                <div className="mt-1.5">
                   <InvoiceDate/>
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
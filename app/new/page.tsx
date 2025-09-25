"use client"

import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Plus, Trash} from "lucide-react";

type LineItem = {
   description: string;
   quantity: number;
   unitPrice: number;
}

type InvoiceType = {
   invoiceNumber: string;
   customer: string;
   from: string;
   lineItems: LineItem[];
}

export default function Page() {
   const [from, setFrom] = useState<string>("")
   const [customer, setCustomer] = useState<string>("")
   const [invoiceNumber, setInvoiceNumber] = useState<string>("")
   const [lineItems, setLineItems] = useState<LineItem[]>([])

   const onClickAddLineItem = () => {
      const newItem : LineItem = {
         description: "Type new product" + (lineItems.length + 1) + " here",
         quantity: 0,
         unitPrice: 0,
      }
      setLineItems((prevState) => [newItem, ...lineItems])
   }

   const onClickRemoveLineItem = (index: number) => {
      const newLineItems = [...lineItems]
      newLineItems.splice(index, 1)
      setLineItems(newLineItems)
   }

   return (
       <div className="h-screen w-full grid grid-cols-2 p-4 gap-x-2">
          <div className="divide-y divide-gray-200 overflow-scroll rounded-lg bg-white shadow-sm">
             <div className="px-4 py-5 sm:px-6">

                {/*HEADER*/}
                <div className=" grid grid-cols-2 gap-4">
                   <div className="col-span-2">
                      <div className="font-medium text-gray-900">
                         Invoice Number
                      </div>
                      <div className="mt-1.5">
                         <Input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                      </div>
                   </div>

                   <div className="col-span-2 grid grid-cols-2 gap-x-4">
                      <div>
                         <div className="font-medium text-gray-900">
                            From
                         </div>
                         <div className="mt-1.5">
                            <Textarea className="w-full" value={from} onChange={(e) => setFrom(e.target.value)} />
                         </div>
                      </div>

                      <div>
                         <div className="font-medium text-gray-900">
                            Customer
                         </div>
                         <div className="mt-1.5">
                            <Select
                                value={customer} onValueChange={(value: string) => setCustomer(value)}>
                               <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Theme" />
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


             </div>
             <div className="px-4 py-5 sm:p-6 space-y-2">

                <div>
                   <div>
                      <table className="relative min-w-full divide-y divide-gray-300">
                         <thead>
                         <tr>
                            <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                               Description
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                               Quantity
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                               Price
                            </th>
                            <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0">
                               <span className="sr-only">Edit</span>
                            </th>
                         </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-200 max-h-36 overflow-scroll">
                         {lineItems.map((item, index) => (
                             <tr key={index}>
                                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                   {item.description}
                                </td>
                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                   {item.quantity}
                                </td>
                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                   {item.unitPrice}
                                </td>

                                <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                                   <Button variant="destructive" size="icon" onClick={() => onClickRemoveLineItem(index)}>
                                      <Trash />
                                   </Button>
                                </td>
                             </tr>
                         ))}
                         </tbody>
                         <tfoot>
                         <tr>
                            <td colSpan={5}>
                               <div className="flex justify-end mt-4">
                                  <Button size="icon" onClick={onClickAddLineItem}>
                                     <Plus />
                                  </Button>
                               </div>
                            </td>
                         </tr>
                         </tfoot>
                      </table>
                   </div>


                </div>


             </div>
             <div className="px-4 py-4 sm:px-6">
                {/* Content goes here */}
                {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
             </div>
          </div>



          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-sm">
             <div className="px-4 py-5 sm:px-6">
                Preview
             </div>
             <div className="px-4 py-5 sm:p-6">
                <div>
                   <div className="font-medium text-gray-900">
                      {invoiceNumber}
                   </div>


                   <div className="grid grid-cols-2 gap-x-4">

                      <div className="font-medium text-gray-900">
                         {from}
                      </div>

                      <div className="font-medium text-gray-900">
                         {customer}
                      </div>

                   </div>

                </div>
             </div>
             <div className="px-4 py-4 sm:px-6">
                {/* Content goes here */}
                {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
             </div>
          </div>
       </div>
   )
}
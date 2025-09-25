"use client"

import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Plus, Trash} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

type LineItem = {
   id: string;
   name: string,
   description: string;
   quantity: number;
   rate: number;
   price: string;
}

type InvoiceType = {
   invoiceNumber: string;
   customer: string;
   from: string;
   lineItems: LineItem[];
}

export default function Page() {
   const [from, setFrom] = useState<string>("Acme Inc.")
   const [customer, setCustomer] = useState<string>("Customer")
   const [invoiceNumber, setInvoiceNumber] = useState<string>("INV-00001")
   const uuid = crypto.randomUUID()
   const [lineItems, setLineItems] = useState<LineItem[]>([
      {
         id: uuid,
         name: 'Website redesign',
         description: 'Design and program new company website.',
         quantity: 1,
         rate: 1,
         price: '$5,200.00',
      },
   ])

   const onClickAddLineItem = () => {
      const newItem: LineItem = {
         id: uuid,
         name: "product name",
         description: `Type description here`,
         quantity: 0,
         rate: 0,
         price: "100",
      }
      setLineItems((prevState) => [...prevState, newItem])
   }

   const onClickRemoveLineItem = (index: string) => {
      setLineItems((prevLineItems) => prevLineItems.filter((item) => item.id !== index))
   }

   return (
       <div className="h-screen mx-auto max-w-5xl p-4 gap-x-2">
          <div className="divide-y divide-gray-200 overflow-scroll rounded-lg bg-white shadow-sm">
             <div className="px-4 py-5 sm:px-6">

                {/*HEADER*/}
                <div className=" grid grid-cols-2 gap-4">
                   <div className="col-span-1">
                      <div className="font-medium text-gray-900">
                         Invoice number
                      </div>
                      <div className="mt-1.5">
                         <Input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}/>
                      </div>
                   </div>

                   <div className="col-span-1">
                      <div className="font-medium text-gray-900">
                         Invoice date
                      </div>
                      <div className="mt-1.5">
                         <Input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}/>
                      </div>
                   </div>

                   <div className="col-span-1">
                      <div className="font-medium text-gray-900">
                         From
                      </div>
                      <div className="mt-1.5">
                         <Textarea className="w-full" value={from} onChange={(e) => setFrom(e.target.value)}/>
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

             {/*MAIN*/}
             <div className="px-4 sm:px-6 lg:px-8 pb-2.5">
                <div className="-mx-4 mt-8 flow-root sm:mx-0">
                   <table className="min-w-full">
                      <colgroup>
                         <col className="w-full sm:w-1/2"/>
                         <col className="sm:w-1/6"/>
                         <col className="sm:w-1/6"/>
                         <col className="sm:w-1/6"/>
                      </colgroup>
                      <thead className="border-b border-gray-300 text-gray-900">
                      <tr>
                         <th scope="col"
                             className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            Description
                         </th>
                         <th scope="col"
                             className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                            Quantity
                         </th>
                         <th scope="col"
                             className="py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                            Price
                         </th>
                         <th>
                            <span className="sr-only">Actions</span>
                         </th>
                      </tr>
                      </thead>
                      <tbody>
                      <AnimatePresence>
                         {lineItems.map((project, index) => (
                             <motion.tr
                                 initial={{ opacity: 0, scale: 0 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 exit={{ opacity: 0, scale: 0 }}
                                 key={project.id} className="border-b border-gray-200">

                                <td className="max-w-10 py-5 pr-3 pl-4 text-sm sm:pl-0">
                                   <div className="font-medium text-gray-900 max-w-sm">
                                      {project.id}
                                      <Input type="text" name="project_name" defaultValue={project.name}/>
                                   </div>
                                   <div className="mt-1 truncate text-gray-500">
                                      <Input type="text" name="project_description" defaultValue={project.description}/>
                                   </div>
                                </td>

                                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                                   <Input type="number" name="project_quantity" defaultValue={project.quantity}/>
                                </td>

                                <td className="py-5 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-2">
                                   <Input type="number" name="project_rate" defaultValue={project.price}/>
                                </td>

                                <td>
                                   <Button variant="ghost" size="icon"
                                           onClick={() => onClickRemoveLineItem(project.id)}>
                                      <Trash/>
                                   </Button>
                                </td>
                             </motion.tr>
                         ))}
                      </AnimatePresence>
                      </tbody>
                      <tfoot>
                      <tr>
                         <th scope="row"
                             className="pt-6 pr-3 pl-4 text-left text-sm font-normal text-gray-500 sm:hidden">
                            Actions
                         </th>
                         <td colSpan={5} className="pt-6 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-0">
                            <Button size="icon" onClick={onClickAddLineItem}>
                               <Plus/>
                            </Button>
                         </td>
                      </tr>
                      </tfoot>
                   </table>
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

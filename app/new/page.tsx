"use client"

import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Plus, Trash} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {InvoiceDate} from "@/app/invoice/invoice-date";

type LineItem = {
   id: string;
   name: string,
   description: string;
   quantity: number;
   price: number;
   total: number;
}

// type InvoiceType = {
//    invoiceNumber: string;
//    customer: string;
//    from: string;
//    lineItems: LineItem[];
// }

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
         price: 100,
         total: 100,
      },
   ])

   const onClickAddLineItem = () => {
      const newItem: LineItem = {
         id: uuid,
         name: "product name",
         description: `Type description here`,
         quantity: 1,
         price: 100,
         total: 100,
      }
      setLineItems((prevState) => [...prevState, newItem])
   }

   const onClickRemoveLineItem = (index: string) => {
      setLineItems((prevLineItems) => prevLineItems.filter((item) => item.id !== index))
   }

   const handlePriceChange = (value: number, id: string) => {
      const updateLineItems = lineItems.map((item) => {
         if (item.id === id) {
            return {
               ...item,
               price: value,
               total: item.quantity * value
            }
         }
         return item
      })
      setLineItems(updateLineItems)
   }

   const handleQuantityChange = (value: number, id: string) => {
      const updateLineItems = lineItems.map((item) => {
         if (item.id === id) {
            return {
               ...item,
               quantity: value,
               total: value * item.price
            }
         }
         return item
      })
      setLineItems(updateLineItems)
   }

   const totalPrice = lineItems.reduce((total, item) => total + item.total, 0)

   return (
       <div className="py-24">
          <div className="mx-auto max-w-5xl gap-x-2">
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
                            <InvoiceDate/>
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
                            <col className="w-full sm:w-3/5"/>
                            <col className="sm:w-1/12"/>
                            <col className="sm:w-1/4"/>
                            <col className="sm:w-1/4"/>
                            <col className="sm:w-1/12"/>
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
                            <th scope="col" className="py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                               Total
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
                                    initial={{opacity: 0, scale: 0}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0}}
                                    key={project.id} className="border-b border-gray-200">

                                   <td className="max-w-0 py-5 pr-3 pl-4 text-sm sm:pl-0">
                                      <div className="font-medium text-gray-900 max-w-sm">
                                         <Input type="text" name="project_name" defaultValue={project.name}/>
                                      </div>
                                      <div className="mt-1 truncate text-gray-500">
                                         <Input type="text" name="project_description" defaultValue={project.description}/>
                                      </div>
                                   </td>

                                   <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                                      <Input min="1" required
                                             className="text-right"
                                             onChange={(e) => handleQuantityChange(Number(e.target.value), project.id)}
                                             type="number" name="project_quantity" defaultValue={project.quantity}/>
                                   </td>

                                   <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                                      <Input step="10"
                                             className="text-right"
                                             onChange={(e) => handlePriceChange(Number(e.target.value), project.id)}
                                             type="number" name="project_price" defaultValue={project.price}/>
                                   </td>

                                   <td className="py-5 pr-4 pl-3 text-right text-sm text-gray-900 sm:pr-2">
                                      {project.total}
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

                   <div className='text-4xl'>
                      {totalPrice}
                   </div>
                   {/* Content goes here */}
                   {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
                </div>

             </div>
          </div>
       </div>

   )
}

import {AnimatePresence, motion} from "framer-motion";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Plus, Trash} from "lucide-react";
import {useState} from "react";
import {LineItem} from "@/app/new/invoice-provider";

export default function InvoiceMain() {
   const uuid = crypto.randomUUID()
   const [lineItems, setLineItems] = useState<LineItem[]>([
      {
         id: uuid,
         name: 'Website redesign',
         description: 'Design and program new company website.',
         quantity: 1,
         price: 100,
      },
   ])

   const onClickAddLineItem = () => {
      const newItem: LineItem = {
         id: uuid,
         name: "product name",
         description: `Type description here`,
         quantity: 1,
         price: 100,
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

   const totalPrice = lineItems.reduce((total, item) => total + (item.quantity * item.price), 0)

   return (
       <div className="px-4 py-5 sm:px-6">
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
                <tbody className="overflow-hidden">
                <AnimatePresence mode="sync" initial={false}>
                   {lineItems.map((project, index) => (
                       <motion.tr
                           initial={{ x: "100%", opacity: 0 }}
                           animate={{ opacity: 1, x: 0, }}
                           transition={{ ease: "easeOut", duration: 0.5, type: "spring", bounce: 0 }}
                           exit={{ opacity: 0, scale: 0, x: "110%",  }}
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
                             {project.quantity * project.price}
                          </td>

                          <td>
                             {lineItems.length >  1 && (
                                 <Button variant="ghost" size="icon"
                                         onClick={() => onClickRemoveLineItem(project.id)}>
                                    <Trash/>
                                 </Button>
                             )}
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
   )
}
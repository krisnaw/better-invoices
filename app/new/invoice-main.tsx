import {AnimatePresence, motion} from "framer-motion";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {PlusIcon, Trash} from "lucide-react";
import {useContext} from "react";
import {InvoiceContext} from "@/app/new/invoice-provider";
import {formatCurrency} from "@/lib/currency-helper";

export default function InvoiceMain() {
  const {state: invoiceState, dispatch} = useContext(InvoiceContext);

  const addItem = () => {
    dispatch({type: "add-line-item"});
  }

  const handlePriceChange = (value: number, id: string) => {
    dispatch({type: "update-line-item", id: id, payload: {price: value}})
  }

  const handleQuantityChange = (value: number, id: string) => {
    dispatch({type: "update-line-item", id: id, payload: {quantity: value}})
  }

  return (
    <div>
      <div className="-mx-4 mt-4 flow-root sm:mx-0">
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
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
              Quantity
            </th>
            <th scope="col"
                className="py-3.5 pr-4 pl-3 text-left text-sm font-semibold text-gray-900 sm:table-cell">
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
            {invoiceState.lineItems.map((project, index) => (
              <motion.tr
                initial={{x: "100%", opacity: 0}}
                animate={{opacity: 1, x: 0,}}
                transition={{ease: "easeOut", duration: 0.5, type: "spring", bounce: 0}}
                exit={{opacity: 0, scale: 0, x: "110%",}}
                key={project.id} className="border-b border-gray-200">

                <td className="max-w-0 py-5 pr-3 pl-4 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900 max-w-sm">
                    <Input type="text" name="project_name" defaultValue={project.name}/>
                  </div>
                </td>

                <td className="hidden px-3 py-5 text-left text-sm text-gray-500 sm:table-cell">
                  <Input min="1" required
                         className="text-left"
                         onChange={(e) => handleQuantityChange(Number(e.target.value), project.id)}
                         type="number" name="project_quantity" defaultValue={project.quantity}/>
                </td>

                <td className="hidden px-3 py-5 text-left text-sm text-gray-500 sm:table-cell">
                  <Input step="10"
                         className="text-left"
                         onChange={(e) => handlePriceChange(Number(e.target.value), project.id)}
                         type="number" name="project_price" defaultValue={project.price}/>
                </td>

                <td className="py-5 pr-4 pl-3 text-right text-sm text-gray-900 sm:pr-2">
                  {formatCurrency((project.quantity * project.price), invoiceState.currency)}
                </td>

                <td>
                  {invoiceState.lineItems.length > 1 && (
                    <Button onClick={() => dispatch({type: "remove-line-item", id: project.id})}
                            variant="ghost" size="icon">
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

            <td>
              <Button variant="ghost" onClick={addItem}>
                <PlusIcon className="h-4 w-4"/>
                Add item
              </Button>
            </td>

            <td colSpan={1} className="pt-6 pr-4 pl-3 text-left text-lg text-gray-600 sm:pr-0">
              Total
            </td>

            <td colSpan={2} className="pt-6 pr-4 pl-3 text-right text-2xl text-gray-900 sm:pr-0">
              {formatCurrency(invoiceState.totalPrice, invoiceState.currency)}
            </td>
          </tr>
          </tfoot>
        </table>
      </div>

      <div>

      </div>

    </div>
  )
}
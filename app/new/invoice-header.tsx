import {Input} from "@/components/ui/input";
import {InvoiceDate} from "@/app/invoice/invoice-date";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useContext} from "react";
import {InvoiceContext} from "@/app/new/invoice-provider";
import {CustomerType} from "@/lib/types";

export default function InvoiceHeader({customers}: { customers: CustomerType[] }) {
  const {state: invoiceState, dispatch} = useContext(InvoiceContext);

  const customerDetail = customers.find(customer => customer.id === Number(invoiceState.customer))

  const onSelectHandler = (value: string) => {
    dispatch({type: "update-customer", payload: value})
  }

  return (
    <div>
      <div className=" grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="font-medium text-gray-900">
            Invoice number
          </div>
          <div className="mt-1.5">
            <Input value={invoiceState.invoiceNumber}
                   onChange={e => dispatch({type: "update-invoice-number", payload: e.target.value})}
            />
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
            <Textarea className="w-full"/>
          </div>
        </div>
        <div className="col-span-1">
          <div className="font-medium text-gray-900">
            Customer
          </div>
          <div className="mt-1.5">
            {!invoiceState.customer && (
              <Select
                value={invoiceState.customer} onValueChange={(value: string) => onSelectHandler(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select customer"/>
                </SelectTrigger>
                <SelectContent>
                  {customers.map((customer: CustomerType) => (
                    <SelectItem key={customer.id} value={customer.id as unknown as string}>{customer.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {customerDetail && (
              <ul className="flex flex-col gap-1">
                <li>{customerDetail.name}</li>
                <li>
                  {customerDetail.contact}
                </li>
                <li>
                  {customerDetail.email}
                </li>
              </ul>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
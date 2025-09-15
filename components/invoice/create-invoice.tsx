"use client"
import {InvoiceDate} from "@/components/invoice/invoice-date";
import {useState} from "react";

export function CreateInvoice() {

  const [isActive, setIsActive] = useState("")

  const [invoice, setInvoice] = useState({
    invoiceNumber: "INV-0001",
    issueDate: new Date(),
    dueDate: new Date(),
    from: {
      name: "",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "USA"
    }
  })

  const onClickShowHandler = (value: string) => {
    if (value === isActive) {
      setIsActive("")
      return;
    }
    setIsActive(value)
    return;
  }

  return (
    <div className="mx-auto max-w-5xl min-h-screen flex justify-center items-center py-10 font-mono">
      <div className="border border-gray-300 shadow-lg h-full w-full p-2">

        <div>
          <div className="grid grid-cols-3 gap-4">
            <div className="font-mono">
              Invoice no: INV-0001
            </div>

            <div className="flex items-center">
              Issue date: <InvoiceDate date={invoice.issueDate} isActive={isActive === "invoice-date"} onShow={() => onClickShowHandler("invoice-date")} />
            </div>

            <div className="flex items-center">
              Due date: <InvoiceDate date={invoice.dueDate} isActive={isActive === "invoice-due"} onShow={() => onClickShowHandler("invoice-due")}/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div>
              From
            </div>

            <div>
              To
            </div>
          </div>
        </div>

        <div>
          Body
        </div>

        <div>
          Footer
        </div>


      </div>
    </div>
  )
}
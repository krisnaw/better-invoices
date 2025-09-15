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
      <div className="border border-gray-300 shadow-lg h-full w-full p-6">

        <div>
          <div className="grid grid-cols-2 item-start gap-4">

            <div>
              <div className="border border-gray-300 p-4">
                Logo
              </div>
            </div>


            <div className="text-right">
              <div className="">
                Invoice no: INV-0001
              </div>

              <div className="inline-flex items-center gap-4">
                Issue date: <InvoiceDate date={invoice.issueDate} isActive={isActive === "invoice-date"}
                                         onShow={() => onClickShowHandler("invoice-date")}/>
              </div>

              <div className="inline-flex items-center gap-4">
                Due date: <InvoiceDate date={invoice.dueDate} isActive={isActive === "invoice-due"}
                                       onShow={() => onClickShowHandler("invoice-due")}/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="">
              From
              <div className="mt-2.5">
                <span>Lost Island AB</span>
                <ul className="text-sm">
                  <li>
                    Email: miguel@lostisland.com
                  </li>

                  <li>
                    Phone: 123-456-7890
                  </li>

                  <li>
                    Address: 123 Main St, Anytown, CA 12345, USA
                  </li>
                  <li>
                    VAT: 1234567890
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              To
              <div className="mt-2.5">
                <span>Lost Island AB</span>
                <ul className="text-sm">
                  <li>
                    Email: miguel@lostisland.com
                  </li>

                  <li>
                    Phone: 123-456-7890
                  </li>

                  <li>
                    Address: 123 Main St, Anytown, CA 12345, USA
                  </li>
                  <li>
                    VAT: 1234567890
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <table className="relative min-w-full divide-y divide-gray-300">
            <thead>
            <tr>
              <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0 w-1/3">
                Description
              </th>
              <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                Quantity
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Price
              </th>
              <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0 text-right">
                Total
              </th>
            </tr>
            </thead>
            <tbody>

            <tr>
              <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 w-1/3">
                Design
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 text-right">1</td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Rp500.000</td>
              <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                Rp500.000
              </td>
            </tr>

            <tr>
              <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 w-1/3">
                Development
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 text-right">1</td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Rp500.000</td>
              <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                Rp500.000
              </td>
            </tr>

            <tr>
              <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 w-1/3">
                Planning & meeting
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 text-right">1</td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Rp500.000</td>
              <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                Rp500.000
              </td>
            </tr>


            </tbody>
          </table>


          <div className="flex justify-end mt-10 ">
            <div>
              <table className="relative min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm text-gray-500  sm:pl-0">
                    VAT
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0 text-sm text-right">
                    <span>Rp1.500.000</span>
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                    Total
                  </td>

                  <td className="py-4 pr-4 pl-3 text-right text-xl font-medium whitespace-nowrap sm:pr-0">
                    Rp1.500.000
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              Payment details
            </div>
            <div>
              Note
            </div>
          </div>
          <div>

          </div>
        </div>


      </div>
    </div>
  )
}
"use client"
import {InvoiceDueDate} from "@/components/invoice/invoice-due-date";
import {useContext} from "react";
import {InvoiceContext} from "@/components/invoice/invoice-provider";
import {Input} from "@/components/ui/input";
import {InvoiceIssueDate} from "@/components/invoice/invoice-issue-date";

export function InvoiceForm() {

  const {invoiceNumber, setInvoiceNumber} = useContext(InvoiceContext);

  return (
    <div>

      <div className="mx-auto w-[210mm] h-[297mm] min-h-screen flex justify-center items-center py-10 font-mono">
        <div className="border border-gray-300 shadow-lg h-full w-full p-6">

          <div>
            <Input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value as string)} />
          </div>

          <div>
            <div className="grid grid-cols-2 item-start gap-4">

              <div className="max-w-sm">
                <div className="border border-gray-300 p-4">
                  Logo
                </div>
              </div>


              <div className="text-right text-sm">
                <div className="">
                  Invoice no: INV-0001
                </div>

                <div className="inline-flex items-center gap-4">
                  Issue date: <InvoiceIssueDate />
                </div>

                <div className="inline-flex items-center gap-4">
                  Due date:<InvoiceDueDate />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-sm">
                <div className="font-medium">
                  From
                </div>
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

              <div className="text-sm">
                <div className="font-medium">
                  To
                </div>
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

          <div className="mt-10 text-sm">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-medium">
                  Payment details
                </div>
                <div className="mt-2.5">
                  <span>Bank: BCA</span>
                  <ul className="text-sm">
                    <li>
                      Account: 1234567890
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="font-medium">Note</div>
                <div className="mt-2.5">
                  Thank you for your business!
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
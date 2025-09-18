"use client"

import {useContext, useMemo} from "react";

import {InvoiceDueDate} from "@/components/invoice/invoice-due-date";
import {InvoiceIssueDate} from "@/components/invoice/invoice-issue-date";
import {InvoiceNumber} from "@/components/invoice/invoice-number";
import {InvoiceCustomer} from "@/components/invoice/invoice-customer";
import {InvoiceContext} from "@/components/invoice/invoice-provider";
import {inter} from "@/lib/fonts";
import type {InvoiceLineItem} from "@/lib/invoice-pdf";

const invoiceItems: InvoiceLineItem[] = [
  {description: "Design", quantity: 1, price: 500000},
  {description: "Development", quantity: 1, price: 500000},
  {description: "Planning & meeting", quantity: 1, price: 500000},
];

const invoiceFrom = {
  name: "Lost Island AB",
  email: "miguel@lostisland.com",
  phone: "123-456-7890",
  address: "123 Main St, Anytown, CA 12345, USA",
  vat: "1234567890",
};

const invoiceTo = {
  name: "Client Name",
  email: "client@email.com",
};

const paymentDetails = {
  bank: "BCA",
  account: "1234567890",
};

const formatCurrency = (value: number) => `Rp${value.toLocaleString("id-ID")}`;

export function InvoiceForm() {
  const {invoiceNumber, issueDate, dueDate} = useContext(InvoiceContext);
  const {total, vatAmount} = useMemo(() => {
    const lineTotal = invoiceItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return {
      total: lineTotal,
      // VAT is mocked for now to keep parity with the static UI values.
      vatAmount: lineTotal,
    };
  }, []);


  return (
    <div className={inter.className}>
      <div className="mx-auto w-[210mm] ">
        <div className="border border-gray-300 shadow-lg h-full w-full p-6">

          <div>
            <div className="grid grid-cols-2 item-start gap-4">

              <div className="max-w-sm">
                <div className="border border-gray-300 p-4">
                  Logo
                </div>
              </div>

              <div className="text-right text-sm space-y-1.5">
                <div className="inline-flex items-center gap-4">
                  <InvoiceNumber />
                </div>

                <div className="inline-flex items-center gap-4">
                  <InvoiceIssueDate />
                </div>

                <div className="inline-flex items-center gap-4">
                  <InvoiceDueDate />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-sm">
                <div className="font-medium">
                  From
                </div>
                <div className="mt-2.5">

                  <span>{invoiceFrom.name}</span>
                  <ul className="text-sm">
                    <li>
                      Email: {invoiceFrom.email}
                    </li>

                    <li>
                      Phone: {invoiceFrom.phone}
                    </li>

                    <li>
                      Address: {invoiceFrom.address}
                    </li>
                    <li>
                      VAT: {invoiceFrom.vat}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-sm">
                <div className="font-medium">
                  To
                </div>
                <div className="mt-2.5">
                  <InvoiceCustomer />
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
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                  Price
                </th>
                <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0 text-right">
                  Total
                </th>
              </tr>
              </thead>
              <tbody>

              {invoiceItems.map((item) => (
                <tr key={item.description}>
                  <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 w-1/3">
                    {item.description}
                  </td>
                  <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 text-right">{item.quantity}</td>
                  <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-500">
                    {formatCurrency(item.price)}
                  </td>
                  <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                    {formatCurrency(item.price * item.quantity)}
                  </td>
                </tr>
              ))}

              </tbody>
            </table>


            <div className="flex justify-end mt-10 ">
              <div>
                <table className="relative min-w-full divide-y divide-gray-300">
                  <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm text-gray-500 sm:pl-0">
                      VAT
                    </th>
                    <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0 text-sm text-right">
                      <span className="whitespace-nowrap">{formatCurrency(vatAmount)}</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      Total
                    </td>

                    <td className="py-4 pr-4 pl-3 text-right text-xl font-medium whitespace-nowrap sm:pr-0">
                      {formatCurrency(total)}
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
                  <span>Bank: {paymentDetails.bank}</span>
                  <ul className="text-sm">
                    <li>
                      Account: {paymentDetails.account}
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

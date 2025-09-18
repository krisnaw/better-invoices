"use client"

import {InvoiceDueDate} from "@/components/invoice/invoice-due-date";
import {InvoiceIssueDate} from "@/components/invoice/invoice-issue-date";
import {InvoiceNumber} from "@/components/invoice/invoice-number";
import {InvoiceCustomer} from "@/components/invoice/invoice-customer";
import InvoiceFrom from "@/components/invoice/invoice-from";
import {InvoiceLines} from "@/components/invoice/invoice-lines";
import {inter} from "@/lib/fonts";

const paymentDetails = {
  bank: "BCA",
  account: "1234567890",
};

export function InvoiceForm() {
  return (
    <div className={inter.className}>
      <div className="mx-auto w-[210mm] ">
        <div className="border border-gray-300 shadow-lg h-full w-full p-6">

          <div>
            <div className="grid grid-cols-2 item-start gap-4">

              <div className="text-left text-sm space-y-1.5">
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

              <div className="max-w-sm">
                <div className="border border-gray-300 p-4">
                  Logo
                </div>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-sm">
                <div className="font-medium">
                  From
                </div>
                <div className="mt-2.5">
                  <InvoiceFrom />
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
            <InvoiceLines />
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

"use client"

import {InvoiceCustomer} from "@/components/invoice/invoice-customer";
import {InvoiceDueDate} from "@/components/invoice/invoice-due-date";
import {InvoiceIssueDate} from "@/components/invoice/invoice-issue-date";
import {InvoiceLines} from "@/components/invoice/invoice-lines";
import {InvoiceNumber} from "@/components/invoice/invoice-number";
import {InvoicePreview} from "@/components/invoice/invoice-preview";
import {InvoiceProvider} from "@/components/invoice/invoice-provider";

export function InvoiceCreateSplit() {
  return (
    <InvoiceProvider>
      <div className="mx-auto w-full space-y-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] xl:gap-14">
          <div className="space-y-8">
            <section className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
              <header className="mb-5">
                <h2 className="text-base font-semibold text-gray-900">Invoice Details</h2>
                <p className="mt-1 text-sm text-gray-500">Reference number and scheduling basics.</p>
              </header>
              <div className="space-y-5 text-sm text-gray-700">
                <InvoiceNumber />
                <InvoiceIssueDate />
                <InvoiceDueDate />
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
              <header className="mb-5">
                <h2 className="text-base font-semibold text-gray-900">Customer</h2>
                <p className="mt-1 text-sm text-gray-500">Pick the recipient for this invoice.</p>
              </header>
              <InvoiceCustomer />
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
              <header className="mb-5">
                <h2 className="text-base font-semibold text-gray-900">Line Items</h2>
                <p className="mt-1 text-sm text-gray-500">Describe what you are billing for.</p>
              </header>
              <InvoiceLines />
            </section>
          </div>

          <div className="lg:sticky lg:top-10">
            <InvoicePreview />
          </div>
        </div>
      </div>
    </InvoiceProvider>
  );
}

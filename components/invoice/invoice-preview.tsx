"use client"

import {useContext, useMemo} from "react";
import {format} from "date-fns";

import {InvoiceContext} from "@/components/invoice/invoice-provider";

const toRupiah = (value: number) => `Rp${value.toLocaleString("id-ID")}`;

const formatDate = (date: Date) => {
  const timestamp = date.getTime();
  if (Number.isNaN(timestamp)) {
    return "—";
  }
  return format(timestamp, "MMMM dd, yyyy");
};

export function InvoicePreview() {
  const {invoiceNumber, issueDate, dueDate, lineItems, totals} = useContext(InvoiceContext);

  const issueLabel = useMemo(() => formatDate(issueDate), [issueDate]);
  const dueLabel = useMemo(() => formatDate(dueDate), [dueDate]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-md">
      <div className="border-b border-gray-200 px-8 py-6">
        <div className="text-xs uppercase tracking-[0.14em] text-gray-500">Invoice Preview</div>
        <div className="mt-3 text-2xl font-semibold text-gray-900">{invoiceNumber || "New Invoice"}</div>
        <dl className="mt-5 grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Issue Date</dt>
            <dd className="mt-1 text-base text-gray-900">{issueLabel}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Due Date</dt>
            <dd className="mt-1 text-base text-gray-900">{dueLabel}</dd>
          </div>
        </dl>
      </div>

      <div className="px-8 py-6">
        <div className="text-sm font-semibold text-gray-900">Line Items</div>
        <table className="mt-4 w-full table-fixed text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
              <th className="w-2/5 pb-3">Description</th>
              <th className="w-1/5 pb-3 text-right">Qty</th>
              <th className="w-1/5 pb-3 text-right">Price</th>
              <th className="w-1/5 pb-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {lineItems.length === 0 && (
              <tr>
                <td colSpan={4} className="py-8 text-center text-sm text-gray-400">
                  Add an item to see it here.
                </td>
              </tr>
            )}
            {lineItems.map((item) => {
              const quantity = item.quantity || 0;
              const price = Number(item.price || 0);
              const total = quantity * price;

              return (
                <tr key={item.id}>
                  <td className="py-4 pr-4 font-medium text-gray-900">{item.name || "—"}</td>
                  <td className="py-4 text-right">{quantity}</td>
                  <td className="py-4 text-right">{toRupiah(price)}</td>
                  <td className="py-4 text-right font-semibold text-gray-900">{toRupiah(total)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="mt-8 space-y-3 text-sm">
          <div className="flex items-center justify-between text-gray-500">
            <span>Subtotal</span>
            <span>{toRupiah(totals.subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-xl font-semibold text-gray-900">
            <span>Total</span>
            <span>{toRupiah(totals.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"

import {useContext} from "react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Plus, X} from "lucide-react";
import {InvoiceContext, InvoiceLine} from "@/components/invoice/invoice-provider";

const formatCurrency = (value: number) => `Rp${value.toLocaleString("id-ID")}`;

export function InvoiceLines() {
  const {lineItems, totals, addLineItem, updateLineItem, removeLineItem} = useContext(InvoiceContext);
  const {subtotal, total} = totals;

  const handleLineChange = <K extends keyof InvoiceLine>(id: number, key: K, value: InvoiceLine[K]) => {
    updateLineItem(id, {[key]: value} as Partial<InvoiceLine>);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="relative min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="w-1/2 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-1">
                Description
              </th>
              <th className="w-[10px] px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Quantity</th>
              <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Price</th>
              <th className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                Total
              </th>
              <th className="w-[20px] py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                <div className="sr-only">Actions</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {lineItems.map((line) => {
              const price = Number(line.price || 0);
              const lineTotal = line.quantity * price;

              return (
                <tr key={line.id}>
                  <td className="w-1/3 whitespace-nowrap pl-4 py-4 text-sm font-medium text-gray-900 sm:pl-1">
                    <Input
                      value={line.name}
                      placeholder="Describe the work"
                      onChange={(event) => handleLineChange(line.id, "name", event.target.value)}
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">
                    <Input
                      type="number"
                      min={1}
                      value={line.quantity}
                      onChange={(event) =>
                        handleLineChange(line.id, "quantity", Number(event.target.value) || 0)
                      }
                      className="text-right"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">
                    <Input
                      type="number"
                      min={0}
                      value={line.price}
                      onChange={(event) => handleLineChange(line.id, "price", event.target.value)}
                      className="text-right"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium text-gray-900 sm:pr-0">
                    {formatCurrency(lineTotal)}
                  </td>
                  <td className="whitespace-nowrap pl-1.5">
                    {lineItems.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Remove line item"
                        onClick={() => removeLineItem(line.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <Button type="button" variant="ghost" onClick={addLineItem}>
          <Plus />
          Add item
        </Button>
      </div>

      <div className="flex justify-end mt-10">

        <div className="min-w-[260px] space-y-2 text-sm">
          <div className="flex items-center justify-between text-gray-500">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          {/*<div className="flex items-center justify-between text-gray-500">*/}
          {/*  <span>VAT</span>*/}
          {/*  <span>{formatCurrency(vatAmount)}</span>*/}
          {/*</div>*/}
          <div className="flex items-center justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"

import {useMemo, useState} from "react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Plus, X} from "lucide-react";

interface InvoiceLine {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

const formatCurrency = (value: number) => `Rp${value.toLocaleString("id-ID")}`;

const createEmptyLine = (): InvoiceLine => ({
  id: Math.random().toString(36).slice(2, 9),
  description: "",
  quantity: 1,
  price: 0,
});

const INITIAL_LINES: InvoiceLine[] = [
  {id: "line-1", description: "Design", quantity: 1, price: 500000},
  {id: "line-2", description: "Development", quantity: 1, price: 500000},
  {id: "line-3", description: "Planning & meeting", quantity: 1, price: 500000},
];

export function InvoiceLines() {
  const [lines, setLines] = useState<InvoiceLine[]>(INITIAL_LINES);

  const {subtotal, vatAmount, total} = useMemo(() => {
    const lineTotal = lines.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return {
      subtotal: lineTotal,
      // VAT is mocked for parity with the existing UI while real rates are decided.
      vatAmount: lineTotal,
      total: lineTotal,
    };
  }, [lines]);

  const handleLineChange = <K extends keyof InvoiceLine>(id: string, key: K, value: InvoiceLine[K]) => {
    setLines((prev) => prev.map((line) => (line.id === id ? {...line, [key]: value} : line)));
  };

  const handleAddLine = () => {
    setLines((prev) => [...prev, createEmptyLine()]);
  };

  const handleRemoveLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
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
            {lines.map((line) => {
              const lineTotal = line.quantity * line.price;

              return (
                <tr key={line.id}>
                  <td className="w-1/3 whitespace-nowrap pl-4 py-4 text-sm font-medium text-gray-900 sm:pl-1">
                    <Input
                      value={line.description}
                      placeholder="Describe the work"
                      onChange={(event) => handleLineChange(line.id, "description", event.target.value)}
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">
                    <Input
                      type="number"
                      min={1}
                      value={line.quantity}
                      onChange={(event) => handleLineChange(line.id, "quantity", Number(event.target.value) || 0)}
                      className="text-right"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">
                    <Input
                      type="number"
                      min={0}
                      value={line.price}
                      onChange={(event) => handleLineChange(line.id, "price", Number(event.target.value) || 0)}
                      className="text-right"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium text-gray-900 sm:pr-0">
                    {formatCurrency(lineTotal)}
                  </td>
                  <td className="whitespace-nowrap pl-1.5">
                    {lines.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Remove line item"
                        onClick={() => handleRemoveLine(line.id)}
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
        <Button type="button" variant="ghost" onClick={handleAddLine}>
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

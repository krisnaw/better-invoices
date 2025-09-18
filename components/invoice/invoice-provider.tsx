"use client"
import React, {createContext, useMemo, useState} from "react";
import {InvoiceItems} from "@/lib/types";

export type InvoiceLine = Pick<InvoiceItems, "id" | "name" | "quantity" | "price">;

type InvoiceContextValue = {
  invoiceNumber: string;
  issueDate: Date;
  dueDate: Date;
  lineItems: InvoiceLine[];
  totals: {
    subtotal: number;
    total: number;
  };
  setInvoiceNumber: (number: string) => void;
  setIssueDate: (date: Date) => void;
  setDueDate: (date: Date) => void;
  addLineItem: () => void;
  updateLineItem: (id: number, updates: Partial<InvoiceLine>) => void;
  removeLineItem: (id: number) => void;
};

const createEmptyLine = (): InvoiceLine => ({
  id: Date.now(),
  name: "",
  quantity: 1,
  price: "0",
});

const INITIAL_LINE_ITEMS: InvoiceLine[] = [
  {id: 1, name: "Design", quantity: 1, price: "500000"},
];

const calculateTotals = (items: InvoiceLine[]) => {
  const subtotal = items.reduce((sum, item) => sum + Number(item.price || 0) * item.quantity, 0);
  return {
    subtotal,
    total: subtotal,
  };
};

export const InvoiceContext = createContext<InvoiceContextValue>({
  invoiceNumber: "",
  issueDate: new Date(),
  dueDate: new Date(),
  lineItems: INITIAL_LINE_ITEMS,
  totals: calculateTotals(INITIAL_LINE_ITEMS),
  setInvoiceNumber: () => {},
  setIssueDate: () => {},
  setDueDate: () => {},
  addLineItem: () => {},
  updateLineItem: () => {},
  removeLineItem: () => {},
});

export function InvoiceProvider({children}: {children: React.ReactNode}) {
  const [invoiceNumber, setInvoiceNumber] = useState<string>("INV-001");
  const [issueDate, setIssueDate] = useState<Date>(new Date());
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [lineItems, setLineItems] = useState<InvoiceLine[]>(INITIAL_LINE_ITEMS);

  const totals = useMemo(() => calculateTotals(lineItems), [lineItems]);

  const addLineItem = () => {
    setLineItems((previous) => [...previous, createEmptyLine()]);
  };

  const updateLineItem = (id: number, updates: Partial<InvoiceLine>) => {
    setLineItems((previous) =>
      previous.map((item) => (item.id === id ? {...item, ...updates} : item)),
    );
  };

  const removeLineItem = (id: number) => {
    setLineItems((previous) => previous.filter((item) => item.id !== id));
  };

  const value = {
    invoiceNumber,
    issueDate,
    dueDate,
    lineItems,
    totals,
    setInvoiceNumber,
    setIssueDate,
    setDueDate,
    addLineItem,
    updateLineItem,
    removeLineItem,
  }

  return (
    <InvoiceContext.Provider value={value}>
      {children}
    </InvoiceContext.Provider>
  );
}

"use client"
import React, {createContext, useMemo, useState} from "react";

export type InvoiceLine = {
  id: string;
  description: string;
  quantity: number;
  price: number;
};

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
  updateLineItem: (id: string, updates: Partial<InvoiceLine>) => void;
  removeLineItem: (id: string) => void;
};

const createEmptyLine = (): InvoiceLine => ({
  id: Math.random().toString(36).slice(2, 9),
  description: "",
  quantity: 1,
  price: 0,
});

const INITIAL_LINE_ITEMS: InvoiceLine[] = [];

const calculateTotals = (items: InvoiceLine[]) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
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

  const updateLineItem = (id: string, updates: Partial<InvoiceLine>) => {
    setLineItems((previous) =>
      previous.map((item) => (item.id === id ? {...item, ...updates} : item)),
    );
  };

  const removeLineItem = (id: string) => {
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

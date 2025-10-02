"use client"

import React from "react";

const uuid = crypto.randomUUID()

export type LineItem = {
  id: string
  name: string
  quantity: number
  price: number
}

export type InvoiceState = {
  invoiceNumber: string
  invoiceDate: Date
  status: string
  currency: string
  customer: string
  lineItems: LineItem[]
}

type State = InvoiceState & {
  totalPrice: number
}

type Action =
  | { type: 'update-invoice-number', payload: string }
  | { type: 'update-invoice-date', payload: Date }
  | { type: 'update-customer', payload: string }
  | { type: 'update-currency', payload: string }
  | { type: 'add-line-item' }
  | { type: 'remove-line-item', id: string }
  | { type: 'update-line-item', id: string, payload: Partial<LineItem> }
  | { type: 'reset' };

const initialInvoiceState: InvoiceState = {
  invoiceNumber: 'INV',
  invoiceDate: new Date(),
  customer: "",
  status: "draft",
  currency: "USD",
  lineItems: [
    {
      id: uuid,
      name: "Example item",
      quantity: 1,
      price: 100,
    }
  ],
};

function invoiceReducer(prevState: InvoiceState, action: Action): InvoiceState {
  switch (action.type) {
    case 'update-invoice-number':
      return {
        ...prevState,
        invoiceNumber: action.payload,
      }
    case 'update-currency':
      return {
        ...prevState,
        currency: action.payload,
      }
    case "update-invoice-date":
      return {
        ...prevState,
        invoiceDate: action.payload,
      }
    case 'update-customer':
      return {
        ...prevState,
        customer: action.payload,
      }
    case 'add-line-item':
      const newItems = [...prevState.lineItems, {
        id: crypto.randomUUID(),
        name: "Item name",
        quantity: 1,
        price: 100,
      }]
      return {
        ...prevState,
        lineItems: newItems,
      }
    case 'remove-line-item':
      const filteredLineItems = prevState.lineItems.filter((item) => item.id !== action.id);
      return {
        ...prevState,
        lineItems: filteredLineItems,
      }
    case 'update-line-item':
      const updatedLineItems = prevState.lineItems.map((item) => (
        item.id === action.id ? {...item, ...action.payload} : item
      ))
      return {
        ...prevState,
        lineItems: updatedLineItems,
      }
    case 'reset':
      return initialInvoiceState
    default:
      return prevState;
  }
}

interface InvoiceContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const InvoiceContext = React.createContext<InvoiceContextType>(null as unknown as {
  state: State,
  dispatch: React.Dispatch<Action>,
});

type Props = {
  children: React.ReactNode;
}

function calculateTotalPrice(lineItems: LineItem[]): number {
  return lineItems.reduce((total, item) => total + (item.quantity * item.price), 0)
}

export default function InvoiceProvider({children}: Props) {
  const [invoiceState, dispatch] = React.useReducer(invoiceReducer, initialInvoiceState);
  const totalPrice = React.useMemo(() => calculateTotalPrice(invoiceState.lineItems), [invoiceState.lineItems]);
  const stateWithTotal = React.useMemo<State>(() => ({
    ...invoiceState,
    totalPrice,
  }), [invoiceState, totalPrice]);
  return (
    <InvoiceContext.Provider value={{state: stateWithTotal, dispatch}}>
      {children}
    </InvoiceContext.Provider>
  )
}

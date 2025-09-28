"use client"

import React from "react";

const uuid = crypto.randomUUID()

export type LineItem = {
   id: string
   name: string
   description: string
   quantity: number
   price: number
}

interface State {
   invoiceNumber: string
   invoiceDate: Date
   customer: string
   lineItems: LineItem[]
   totalPrice: number
}

type Action =
    | { type: 'update-invoice-number', payload: string }
    | { type: 'update-invoice-date', payload: Date }
    | { type: 'add-line-item' }
    | { type: 'remove-line-item', id: string }
    | { type: 'update-line-item', id: string, payload: Partial<LineItem> }
    | { type: 'reset' };

const initialInvoiceState: State = {
   invoiceNumber: 'INV',
   invoiceDate: new Date(),
   customer: "",
   lineItems: [
      {
         id: uuid,
         name: "Product name: Provider",
         description: `Product description: Provider`,
         quantity: 1,
         price: 100,
      }
   ],
   totalPrice: 100,
};

function invoiceReducer(prevState: State, action: Action): State {
   switch (action.type) {
      case "update-invoice-number":
         return {
            ...prevState,
            invoiceNumber: action.payload,
         }
      case "update-invoice-date":
         return {
            ...prevState,
            invoiceDate: action.payload,
         }
      case 'add-line-item':
         const newItems = [...prevState.lineItems, {
            id: crypto.randomUUID(),
            name: "Product name",
            description: `Product description`,
            quantity: 1,
            price: 100,
         }]
         const total = newItems.reduce((total, item) => total + (item.quantity * item.price), 0)
         return {
            ...prevState,
            lineItems: newItems,
            totalPrice: total,
         }
      case 'remove-line-item':
         const filteredLineItems = prevState.lineItems.filter((item) => item.id !== action.id);
         const newTotal = filteredLineItems.reduce((total, item) => total + item.price, 0)
         return {
            ...prevState,
            lineItems: filteredLineItems,
            totalPrice: newTotal,
         }
      case 'update-line-item':
         const updatedLineItems = prevState.lineItems.map((item) => (
             item.id === action.id ? {...item, ...action.payload} : item
         ))
         const totalPrice = updatedLineItems.reduce((total, item) => total + (item.quantity * item.price), 0)
         return {
            ...prevState,
            lineItems: updatedLineItems,
            totalPrice: totalPrice,
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

export default function InvoiceProvider({children}: Props) {
   const [invoiceState, dispatch] = React.useReducer(invoiceReducer, initialInvoiceState);
   return (
       <InvoiceContext.Provider value={{state: invoiceState, dispatch}}>
          {children}
       </InvoiceContext.Provider>
   )
}

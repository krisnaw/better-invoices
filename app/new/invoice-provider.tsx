"use client"

import React from "react";

const uuid = crypto.randomUUID()

export type LineItem = {
   id: string;
   name: string,
   description: string;
   quantity: number;
   price: number;
}

interface State {
   lineItems: LineItem[];
   totalPrice: number;
}

type Action =
    | { type: 'add-line-item', payload: LineItem }
    | { type: 'remove-line-item', id: string }
    | { type: 'reset' };


const initialInvoiceState: State = {
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
      case 'add-line-item':
         return {
            ...prevState,
            lineItems: [...prevState.lineItems, {
               id: crypto.randomUUID(),
               name: "Product name",
               description: `Product description`,
               quantity: 1,
               price: 100,
            }]
         }
      case 'remove-line-item':
         return {
            ...prevState,
            lineItems: prevState.lineItems.filter((item) => item.id !== action.id)
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

export default function InvoiceProvider({ children } : Props) {
   const [invoiceState, dispatch] = React.useReducer(invoiceReducer, initialInvoiceState);
   return (
       <InvoiceContext.Provider value={{ state: invoiceState, dispatch }}>
          {children}
       </InvoiceContext.Provider>
   )
}

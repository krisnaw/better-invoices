"use client"

import React from "react";

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
    | { type: 'add-line-item' }
    | { type: 'remove-line-item', id: string }
    | { type: 'reset' };

const uuid = crypto.randomUUID()

const initialState: State = {
   lineItems: [
      {
         id: uuid,
         name: "Product name",
         description: `Product description`,
         quantity: 1,
         price: 100,
      }
   ],
   totalPrice: 0,
};

function reducer(prevState: State, action: Action): State {
   switch (action.type) {
      case 'add-line-item':
         return {
            ...prevState,
            lineItems: [...prevState.lineItems, {
               id: uuid,
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
         return initialState
      default:
         return prevState;
   }
}

interface InvoiceContextType {
   state: State;
   dispatch: React.Dispatch<Action>;
}

export const InvoiceContext = React.createContext<InvoiceContextType | undefined>(undefined);

type Props = {
   children: React.ReactNode;
}

export default function InvoiceProvider({ children } : Props) {
   const [state, dispatch] = React.useReducer(reducer, initialState);
   return (
       <InvoiceContext.Provider value={{ state, dispatch }}>
          {children}
       </InvoiceContext.Provider>
   )
}
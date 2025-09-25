"use client"

import InvoiceHeader from "@/app/new/invoice-header";
import InvoiceMain from "@/app/new/invoice-main";
import InvoiceFooter from "@/app/new/invoice-footer";
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

const InvoiceContext = React.createContext<InvoiceContextType | undefined>(undefined);

export default function Page() {
   return (
       <div className="py-24">
          <div className="mx-auto max-w-5xl gap-x-2">
             <div className="divide-y divide-gray-200 overflow-scroll rounded-lg bg-white shadow-sm">

                <InvoiceHeader/>

                <InvoiceMain/>

                <InvoiceFooter/>

             </div>
          </div>
       </div>
   )
}

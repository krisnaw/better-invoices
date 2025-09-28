import React from "react";
import InvoiceContainer from "@/app/new/invoice-container";

export default function Page() {
   return (
       <div className="py-24">
          <div className="mx-auto max-w-5xl gap-x-2">
             <div className="divide-y divide-gray-200 overflow-scroll rounded-lg bg-white shadow-sm">
                <InvoiceContainer />
             </div>
          </div>
       </div>
   )
}

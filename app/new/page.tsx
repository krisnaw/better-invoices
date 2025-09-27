"use client"

import InvoiceHeader from "@/app/new/invoice-header";
import InvoiceMain from "@/app/new/invoice-main";
import InvoiceFooter from "@/app/new/invoice-footer";
import React from "react";

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

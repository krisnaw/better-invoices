import InvoiceHeader from "@/app/new/invoice-header";
import InvoiceMain from "@/app/new/invoice-main";
import InvoiceFooter from "@/app/new/invoice-footer";
import React from "react";
import InvoiceProvider from "@/app/new/invoice-provider";

export default function InvoiceContainer() {
   return (
       <InvoiceProvider>
          <InvoiceHeader/>

          <InvoiceMain/>

          <InvoiceFooter/>
       </InvoiceProvider>
   )
}
"use client"

import InvoiceHeader from "@/app/new/invoice-header";
import InvoiceMain from "@/app/new/invoice-main";
import InvoiceFooter from "@/app/new/invoice-footer";
import React from "react";
import InvoiceProvider from "@/app/new/invoice-provider";
import {CustomerType} from "@/lib/types";

export default function InvoiceContainer({customers} : {customers: CustomerType[]}) {
   return (
       <InvoiceProvider customers={customers}>
          <InvoiceHeader  />

          <InvoiceMain/>

          <InvoiceFooter/>
       </InvoiceProvider>
   )
}
"use client"

import InvoiceHeader from "@/app/new/invoice-header";
import InvoiceMain from "@/app/new/invoice-main";
import InvoiceFooter from "@/app/new/invoice-footer";
import React from "react";
import InvoiceProvider from "@/app/new/invoice-provider";
import {CustomerType, SessionUserType} from "@/lib/types";
import InvoiceCard from "@/app/new/invoice-card";

export default function InvoiceContainer({customers, user}: { customers: CustomerType[], user: SessionUserType }) {
  return (
    <InvoiceProvider>

      <InvoiceCard user={user}>

        <InvoiceHeader customers={customers}/>

        <InvoiceMain/>

        <InvoiceFooter/>
      </InvoiceCard>
    </InvoiceProvider>
  )
}
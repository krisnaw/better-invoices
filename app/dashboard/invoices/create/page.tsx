import InvoiceContainer from "@/app/new/invoice-container";
import React from "react";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {getCustomersByUserId} from "@/db/query/customer-query";

export default async function CreateInvoicePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if (!session) {
    redirect("/login")
  }
  const customers = await getCustomersByUserId(session.user.id);
  return (
    <div>
      <InvoiceContainer customers={customers} />
    </div>
  )
}
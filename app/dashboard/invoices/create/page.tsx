import InvoiceContainer from "@/app/new/invoice-container";
import React from "react";
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
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
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Button>
              Download
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <InvoiceContainer customers={customers} />
        </CardContent>
      </Card>

    </div>
  )
}
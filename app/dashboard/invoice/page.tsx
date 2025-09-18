import {Suspense} from "react"
import {headers} from "next/headers"
import {redirect} from "next/navigation"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {InvoiceList} from "@/components/invoice/invoice-list"
import {InvoiceListSkeleton} from "@/components/invoice/invoice-list-skeleton"
import {auth} from "@/lib/auth"
import {getInvoices} from "@/db/query/invoice-query";

export default async function InvoicePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const invoices = await getInvoices();
  console.log(invoices)

  if (!session) {
    redirect("/login")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<InvoiceListSkeleton />}>
          <InvoiceList invoices={invoices} />
        </Suspense>
      </CardContent>
    </Card>
  )
}

import {Suspense} from "react"
import {headers} from "next/headers"
import {redirect} from "next/navigation"
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {InvoiceList} from "@/components/invoice/invoice-list"
import {InvoiceListSkeleton} from "@/components/invoice/invoice-list-skeleton"
import {auth} from "@/lib/auth"
import {getInvoices} from "@/db/query/invoice-query";
import ButtonCreateInvoice from "@/components/invoice/button-create-invoice";
import InvoiceSheet from "@/components/invoice/invoice-sheet";
import InvoiceEditSheet from "@/components/invoice/invoice-edit-sheet";

export default async function InvoicePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (!session) {
    redirect("/login")
  }

  const invoices = await getInvoices();

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardAction>
            <ButtonCreateInvoice />
          </CardAction>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<InvoiceListSkeleton />}>
            <InvoiceList invoices={invoices} />
          </Suspense>
        </CardContent>
      </Card>
      <InvoiceSheet />
      <InvoiceEditSheet />
    </div>
  )
}

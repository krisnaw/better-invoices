import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {InvoiceListSkeleton} from "@/components/invoice/invoice-list-skeleton"

export default function LoadingInvoices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <InvoiceListSkeleton />
      </CardContent>
    </Card>
  )
}

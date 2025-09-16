import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {CustomerListSkeleton} from "@/components/customer/customer-list-skeleton"

export default function LoadingCustomers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <CustomerListSkeleton />
      </CardContent>
    </Card>
  )
}

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {getCustomersByUserId} from "@/db/query/customer-query";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {CustomerList} from "@/components/customer/customer-list";
import {CustomerListSkeleton} from "@/components/customer/customer-list-skeleton";
import {Suspense} from "react";

export default async function Customer() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if (!session) {
    redirect("/login")
  }
  const customers = await getCustomersByUserId(session.user.id);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<CustomerListSkeleton />}>
          <CustomerList customers={customers} />
        </Suspense>
      </CardContent>
    </Card>
  )
}

import {getCustomerById} from "@/db/query/customer-query";
import {Card, CardAction, CardHeader, CardTitle} from "@/components/ui/card";
import {redirect} from "next/navigation";
import {CustomerActions} from "@/components/customer/customer-actions";

export default async function CustomerDetailPage({params}: { params: Promise<{ id: number }> }) {
  const {id} = await params;

  const customer = await getCustomerById(id)

  if (!customer) {
    redirect('/dashboard/customers')
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{customer.name}</CardTitle>
        </CardHeader>
        <CardAction>
          <CustomerActions customerId={customer.id}/>
        </CardAction>
      </Card>
    </div>
  )
}



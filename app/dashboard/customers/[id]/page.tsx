import {getCustomerById} from "@/db/query/customer-query";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";

export default async function CustomerDetailPage({params}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params;

  const customer = await getCustomerById(id)

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{customer.name}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}



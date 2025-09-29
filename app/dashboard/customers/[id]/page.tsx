import {getCustomerById} from "@/db/query/customer-query";
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {redirect} from "next/navigation";
import {CustomerActions} from "@/components/customer/customer-actions";
import {Mail, UserCircleIcon} from "lucide-react";

export default async function CustomerDetailPage({params}: { params: Promise<{ id: number }> }) {
  const {id} = await params;

  const customer = await getCustomerById(id)

  if (!customer) {
    redirect('/dashboard/customers')
  }

  return (
    <div>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>{customer.name}</CardTitle>
          <CardDescription>
            Manager customer
          </CardDescription>
          <CardAction>
            <CustomerActions customerId={customer.id}/>
          </CardAction>
        </CardHeader>
        <CardContent>
          <dl className="flex flex-wrap">

            <div className="flex w-full flex-none gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Client</span>
                <UserCircleIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
              </dt>
              <dd className="text-sm/6 font-medium text-gray-900">
                {customer.contact}
              </dd>
            </div>

            <div className="mt-4 flex w-full flex-none gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Client</span>
                <Mail aria-hidden="true" className="h-6 w-5 text-gray-400" />
              </dt>
              <dd className="text-sm/6 font-medium text-gray-900">
                {customer.email}
              </dd>
            </div>
          </dl>

        </CardContent>
      </Card>
    </div>
  )
}



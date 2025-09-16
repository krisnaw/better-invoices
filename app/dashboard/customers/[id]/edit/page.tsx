import {CustomerEditForm} from "@/components/customer/customer-edit-form"
import {getCustomerById} from "@/db/query/customer-query"
import {redirect} from "next/navigation"

export default async function EditCustomerPage({params}: { params: Promise<{ id: number }> }) {
  const {id} = await params

  const customer = await getCustomerById(id)

  if (!customer) {
    redirect('/dashboard/customers')
  }

  return (
    <CustomerEditForm customer={customer}/>
  )
}

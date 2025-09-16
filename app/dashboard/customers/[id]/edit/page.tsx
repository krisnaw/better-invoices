import {getCustomerById} from "@/db/query/customer-query";

export default async function EditCustomerPage({params}: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const customer = await getCustomerById(id)
  return (
    <div>
      Edit customer
    </div>
  )
}
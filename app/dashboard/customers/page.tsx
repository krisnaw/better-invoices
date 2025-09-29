import {getCustomersByUserId} from "@/db/query/customer-query";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import CustomerTable from "@/app/dashboard/customers/customer-table";

export default async function Customer() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if (!session) {
    redirect("/login")
  }
  const customers = await getCustomersByUserId(session.user.id);
  return (
      <div>
        <CustomerTable customers={customers} />
      </div>
  )
}

import {getCustomersByUserId} from "@/db/query/customer-query";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import CustomerTable from "@/app/dashboard/customers/customer-table";
import PageHeader from "@/components/common/page-header";
import {Button} from "@/components/ui/button";

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
        <PageHeader title="Customers" descriptions="A list of all the Customers in your account including their company name, contact, and email.">
          <Button>
            Add Customer
          </Button>
        </PageHeader>
        <CustomerTable customers={customers} />
      </div>
  )
}

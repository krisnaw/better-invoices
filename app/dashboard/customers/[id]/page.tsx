import {getCustomerById} from "@/db/query/customer-query";
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import InvoiceTable from "@/app/dashboard/customers/[id]/invoice-table";
import {HeaderActions, HeaderDescription, PageHeader} from "@/components/common/page-header";

export default async function CustomerDetailPage({params}: { params: Promise<{ id: number }> }) {
  const {id} = await params;

  const customer = await getCustomerById(id)

  if (!customer) {
    redirect('/dashboard/customers')
  }

  return (
    <div>
      <PageHeader title={customer.name}>
        <HeaderDescription>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">
            A list of all the Customers in your account including their company name, contact, and email.
          </p>
        </HeaderDescription>
        <HeaderActions>
          <Button>
            New Invoice
          </Button>
        </HeaderActions>
      </PageHeader>

      <InvoiceTable />
    </div>
  )
}



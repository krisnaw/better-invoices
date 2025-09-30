import {getCustomerById} from "@/db/query/customer-query";
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import InvoiceTable from "@/app/dashboard/customers/[id]/invoice-table";
import {HeaderAction, HeaderDescription, HeaderGroup, HeaderTitle, PageHeader} from "@/components/common/page-header";

export default async function CustomerDetailPage({params}: { params: Promise<{ id: number }> }) {
  const {id} = await params;

  const customer = await getCustomerById(id)

  if (!customer) {
    redirect('/dashboard/customers')
  }

  return (
    <div>
      <PageHeader>
        <HeaderGroup>
          <HeaderTitle>
            Customers
          </HeaderTitle>
          <HeaderDescription>
            A list of all the Customers in your account including their company name, contact, and email.
          </HeaderDescription>
        </HeaderGroup>
        <HeaderAction>
          <Button>
            New Invoice
          </Button>
        </HeaderAction>
      </PageHeader>

      <InvoiceTable/>
    </div>
  )
}



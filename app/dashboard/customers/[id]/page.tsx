import {getCustomerById} from "@/db/query/customer-query";
import {redirect} from "next/navigation";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {CustomerActions} from "@/components/customer/customer-actions";
import {Button} from "@/components/ui/button";

export default async function CustomerDetailPage({params}: { params: Promise<{ id: number }> }) {
  const {id} = await params;

  const customer = await getCustomerById(id)

  if (!customer) {
    redirect('/dashboard/customers')
  }

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>
            {customer.name}
          </CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <CustomerActions customerId={customer.id} />
          </CardAction>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoice</CardTitle>
          <CardDescription>
            A list of all the invoices for this customer.
          </CardDescription>
          <CardAction>
            <Button>
              New Invoice
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

    </div>
  )
}



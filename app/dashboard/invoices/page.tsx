import {headers} from "next/headers"
import {redirect} from "next/navigation"
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {auth} from "@/lib/auth"
import {getInvoiceByUserId} from "@/db/query/invoice-query";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import InvoiceTableRow from "@/components/invoices/invoice-table-row";
import {InvoiceWithCustomer} from "@/db/schema/invoice-schema";

export default async function InvoicePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (!session) {
    redirect("/login")
  }

  const invoices = await getInvoiceByUserId(session.user.id) as InvoiceWithCustomer[]

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Button asChild>
              <Link href="/dashboard/invoices/create">
                New Invoice
              </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[160px]">Invoice</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Currency</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">
                    No invoices yet.
                  </TableCell>
                </TableRow>
              ) : (
                invoices.map((invoice) => (
                  <InvoiceTableRow key={invoice.id} invoice={invoice} />
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#"/>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis/>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#"/>
              </PaginationItem>
            </PaginationContent>
          </Pagination>

        </CardFooter>
      </Card>
    </div>
  )
}

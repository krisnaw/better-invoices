import {headers} from "next/headers"
import {redirect} from "next/navigation"
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {auth} from "@/lib/auth"
import {getInvoices} from "@/db/query/invoice-query";
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

export default async function InvoicePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (!session) {
    redirect("/login")
  }

  const invoices = await getInvoices();

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

import {getCustomersByUserId} from "@/db/query/customer-query";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {CustomerType} from "@/lib/types";
import {CustomerActions} from "@/components/customer/customer-actions";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

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
      <Card>
        <CardHeader>
          <CardTitle>Customer</CardTitle>
          <CardDescription>
            A list of all the Customers in your account including their company name, contact, and email.
          </CardDescription>
          <CardAction>
            <Button asChild>
              <Link href="/dashboard/customers/create">
                Add Customer
              </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>

          <div className="flex gap-4">
            <Input />

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border-t border-gray-200 mt-4 pt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="sr-only">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer: CustomerType) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">
                      {customer.name}
                    </TableCell>
                    <TableCell>
                      {customer.contact}
                    </TableCell>
                    <TableCell>
                      {customer.email}
                    </TableCell>
                    <TableCell className="text-right">
                      <CustomerActions customerId={customer.id} />
                    </TableCell>
                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </div>
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

"use client"

import Link from "next/link"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {customerSelectSchema} from "@/db/schema/customer-schema";
import {z} from "zod";

type CustomerEditFormProps = {
  customer: z.infer<typeof customerSelectSchema>
}

export function CustomerEditForm({customer}: CustomerEditFormProps) {
  return (
    <form>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Edit customer</CardTitle>
          <CardDescription>Update the customer details below.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">General Information</h3>
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Acme Inc."
                defaultValue={customer.name ?? ""}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="user@example.com"
                defaultValue={customer.email ?? ""}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="contact">Contact Person</Label>
              <Input
                id="contact"
                name="contact"
                type="text"
                placeholder="John Doe"
                defaultValue={customer.contact ?? ""}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button asChild variant="outline" type="button">
            <Link href={"/dashboard/customers"}>Cancel</Link>
          </Button>
          <Button type="submit">Save changes</Button>
        </CardFooter>
      </Card>
    </form>
  )
}

"use client"

import Link from "next/link"
import {useRouter} from "next/navigation"
import {useActionState} from "react"
import {toast} from "sonner"
import {z} from "zod"

import {UpdateCustomer} from "@/app/actions/account-action"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {customerSelectSchema} from "@/db/schema/customer-schema"
import {type ActionResponse} from "@/lib/types"
import {Loader2} from "lucide-react";

const initialState: ActionResponse = {
  success: false,
  message: "",
  error: undefined,
}

const customerFormSchema = customerSelectSchema.pick({
  id: true,
  userId: true,
  name: true,
  email: true,
  contact: true,
})

type CustomerEditFormProps = {
  customer: z.infer<typeof customerFormSchema>
}

export function CustomerEditForm({customer}: CustomerEditFormProps) {
  const router = useRouter()
  const [_state, formAction, isPending] = useActionState<ActionResponse, FormData>(async (_, formData) => {
    const data = {
      id: Number(formData.get("id")),
      userId: String(formData.get("userId")),
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      contact: String(formData.get("contact")),
    }

    const res = await UpdateCustomer(data)
    if (!res.success) {
      toast.error(res.message)
      return res
    }

    toast.success(res.message)
    router.push(`/dashboard/customers/${res.data ?? data.id}`)

    return res
  }, initialState)

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={customer.id} />
      <input type="hidden" name="userId" value={customer.userId} />
      <Card>
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
                required
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
                required
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
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button asChild variant="outline" type="button">
            <Link href={`/dashboard/customers/${customer.id}`}>Cancel</Link>
          </Button>
          <Button type="submit" disabled={isPending}>
            Save changes
            {isPending && <Loader2 className="animate-spin" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

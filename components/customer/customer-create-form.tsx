"use client"

import {useActionState} from "react"
import {useRouter} from "next/navigation"
import {toast} from "sonner"

import {ActionResponse} from "@/lib/types"
import CreateCustomer from "@/app/actions/account-action"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Loader2} from "lucide-react";

const initialState: ActionResponse = {
  success: false,
  message: "",
  error: undefined
}

type CustomerCreateFormProps = {
  userId: string
}

export function CustomerCreateForm({userId}: CustomerCreateFormProps) {
  const router = useRouter()
  const [_state, formAction, isPending] = useActionState<ActionResponse, FormData>(async (_, formData) => {
    const data = {
      userId,
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      contact: String(formData.get("contact")),
    }

    const res = await CreateCustomer(data)
    if (!res.success) {
      toast.error(res.message)
      return res
    }

    toast.success(res.message)

    router.push(`/dashboard/customers/${res.data}`)

    return res
  }, initialState)

  return (
    <form action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle>Create customer</CardTitle>
          <CardDescription>
            Enter the customer's information below.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">General Information</h3>
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" name="name" placeholder="Acme Inc." required />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="user@example.com" required />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="contact">Contact Person</Label>
              <Input id="contact" type="text" name="contact" placeholder="John Doe" required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button disabled={isPending}>
            Save
            {isPending && <Loader2 className="animate-spin" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

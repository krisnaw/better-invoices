"use client"
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useActionState} from "react";
import {ActionResponse} from "@/lib/types";
import CreateCustomer from "@/app/actions/account-action";
import {authClient} from "@/lib/auth-client";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

const initialState: ActionResponse = {
  success: false,
  message: "",
  error: undefined
}

export default function CreateCustomerPage() {
  const {data: session} = authClient.useSession()
  const router = useRouter()
  const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(async (prevState, formData) => {

    const data = {
      userId: session?.user?.id!,
      name: String(formData.get("name"))
    }

    const res = await CreateCustomer(data)
    if (!res.success) {
      toast.error(res.message)
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
          {/* General Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">General Information</h3>
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" name="name" placeholder="Acme Inc." />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button disabled={isPending}>Save Customer</Button>
        </CardFooter>
      </Card>
    </form>
  );
}

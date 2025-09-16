"use client"
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useActionState} from "react";
import {ActionResponse} from "@/lib/types";

const initialState: ActionResponse = {
  success: false,
  message: "",
  error: undefined
}

export default function CreateCustomerPage() {

  const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(async (prevState, formData) => {

    return {
      success: true,
      message: "",
      error: undefined
    }

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
              <Input id="name" type="text" placeholder="Acme Inc." />
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

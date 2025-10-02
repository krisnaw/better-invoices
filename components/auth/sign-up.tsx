"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useActionState} from "react";
import {useRouter} from "next/navigation";

import {Loader2} from "lucide-react";
import {ActionResponse} from "@/lib/types";

import {toast} from "sonner";
import {signUp} from "@/app/actions/auth/sign-up.action";

export default function SignUp() {
  const router = useRouter();

  const [, formAction, isPending] = useActionState<ActionResponse, FormData>(async (_, formData: FormData) => {
    const submitData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      password_confirmation: formData.get("password_confirmation") as string,
      token: formData.get("token") as string,
    }
    const res = await signUp(submitData)
    if (!res.success) {
      toast.error(res.message)
    }
    toast.success(res.message)
    router.push("/dashboard")
    return res
  }, {
    success: false,
    message: ""
  })

  return (
    <form action={formAction}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            placeholder="Max"
            name="name"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            required
            autoComplete="new-password"
            placeholder="Password"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            required
            autoComplete="new-password"
            placeholder="Confirm Password"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          Create Account
          {isPending && <Loader2 className="animate-spin"/>}
        </Button>
      </div>
    </form>
  );
}

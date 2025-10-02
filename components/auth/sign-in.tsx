"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {useActionState, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Loader2} from "lucide-react";
import {ActionResponse} from "@/lib/types";
import {toast} from "sonner";
import {signInAction} from "@/app/actions/auth/sign-in.action";

export default function SignIn() {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  const [, formAction, isPending] = useActionState<ActionResponse, FormData>(async (_: ActionResponse, formData: FormData) => {
    const submitData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      rememberMe: formData.get('remember') as string,
    }
    const res = await signInAction(submitData);

    if (!res.success) {
      toast.error(res.message)
    }
    toast.success(res.message)
    router.push("/dashboard")
    return res;
  }, {
    success: false,
    message: ""
  })

  return (
    <form action={formAction}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            name="email"
            required
          />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>

          <Input
            id="password"
            type="password"
            placeholder="password"
            autoComplete="password"
            name="password"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            name="remember"
            onClick={() => {setRememberMe(!rememberMe);}}
          />
          <Label htmlFor="remember">Remember me</Label>
        </div>

        <Button disabled={isPending} type="submit" className="w-full">
          Login
          {isPending && <Loader2 className="animate-spin"/>}
        </Button>
      </div>
    </form>
  );
}
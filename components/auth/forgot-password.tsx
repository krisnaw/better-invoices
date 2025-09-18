"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import {useState} from "react";
import {toast} from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onClickForgotPassword = async () => {
    const {data, error }=await authClient.requestPasswordReset({
      email,
      redirectTo: "http://localhost:3000/reset-password",
    })

    console.log(data, error)

    toast.success("Check your email for a link to reset your password.")
  };

  return (
    <Card className="min-w-sm">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Forgot password</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your email below to reset your password.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <Button type="submit" onClick={onClickForgotPassword} className="w-full">
            Reset password
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import {toast} from "sonner";
import {useState} from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onClickForgotPassword = async () => {
    toast.info("Forgot password feature is not implemented yet.");
    const {data, error} = await authClient.requestPasswordReset({
      email,
      redirectTo: "/forgot-password",
    })
  };

  return (
    <Card className="min-w-sm">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your email below to login to your account
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

          <Button type="submit" onClick={onClickForgotPassword}
                  className="w-full">
            Reset password
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import {useState} from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const onClickForgotPassword = async () => {
    const {data, error} = await authClient.resetPassword({
      newPassword: password,
      token: "token",
    })
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
            <div className="flex items-center">
              <Label htmlFor="password">New password</Label>
            </div>

            <Input
              id="password"
              type="password"
              placeholder="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
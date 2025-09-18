"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import {useState} from "react";
import {toast} from "sonner";
import {Loader2} from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const onClickForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      const {error} = await authClient.requestPasswordReset({
        email,
        redirectTo: "http://localhost:3000/reset-password",
      });

      if (error) {
        toast.error(error.message ?? "Something went wrong. Try again later.");
        return;
      }

      toast.success("Check your email for a link to reset your password.");
    } finally {
      setLoading(false);
    }
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

          <Button type="submit" onClick={onClickForgotPassword} className="w-full" disabled={loading}>
            Reset password
            {loading && <Loader2 className="animate-spin" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

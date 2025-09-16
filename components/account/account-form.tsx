"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import {toast} from "sonner";
import {useState} from "react";
import {Loader2} from "lucide-react";

export function AccountForm() {
  const {data: session} = authClient.useSession()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    const formData = new FormData(e.currentTarget)
    const username = formData.get("name")
    await authClient.updateUser(
      {name: String(username)},
      {
        onSuccess: () => {
          console.log("User updated successfully");
          toast.success("User updated successfully")
          setIsLoading(false)
        },
        onError: (error) => {
          console.error("Error updating user:", error);
          toast.error("Error updating user")
          setIsLoading(false)
        },
      });
  }

  return (
    <form onSubmit={onSubmitForm}>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Full name</CardTitle>
          <CardDescription>
            Your username is your public display name.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Username</Label>
            <Input id="name" name="name" type="text" placeholder="Username" required
                   defaultValue={session?.user?.name}/>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button disabled={isLoading}>
            Save
            {isLoading && <Loader2 className="animate-spin" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
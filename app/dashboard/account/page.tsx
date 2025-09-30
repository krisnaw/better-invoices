import {headers} from "next/headers";
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import AccountForm from "@/components/account/account-form";

export default async function AccountPage() {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })
  if (!session) {
    redirect("/login")
  }
  return (
    <AccountForm user={session.user} />
  )
}

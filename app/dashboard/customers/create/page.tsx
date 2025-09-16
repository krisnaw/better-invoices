import {CustomerCreateForm} from "@/components/customer/customer-create-form"
import {auth} from "@/lib/auth"
import {headers} from "next/headers"
import {redirect} from "next/navigation"

export default async function CreateCustomerPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }

  return <CustomerCreateForm userId={session.user.id} />
}

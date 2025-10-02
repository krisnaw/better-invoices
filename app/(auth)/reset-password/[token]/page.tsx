import ResetPassword from "@/components/auth/reset-password";
import {Suspense} from "react";

export default async function ForgotPasswordPage({params}: { params: Promise<{ token: string }> }) {
  const {token} = await params
  if (!token) return (
    <div>Invalid token</div>
  )
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPassword token={token}/>
      </Suspense>
    </div>

  )
}
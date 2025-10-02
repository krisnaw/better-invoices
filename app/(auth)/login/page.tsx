import SignIn from "@/components/auth/sign-in";
import {SlimLayout} from "@/components/landing/slim-layout";
import Link from "next/link";
import {Logo} from "@/components/landing/logo";

export default async function LoginPage() {
  // const session = await auth.api.getSession({
  //   headers: await headers() // you need to pass the headers object.
  // })
  //
  // if (session) {
  //   redirect("/dashboard")
  // }
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/public" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Don’t have an account?{' '}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </Link>{' '}
        now.
      </p>
      <div className="mt-10">
        <SignIn />
      </div>
    </SlimLayout>
  )
}
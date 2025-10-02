import SignUp from "@/components/auth/sign-up";
import {SlimLayout} from "@/components/landing/slim-layout";
import Link from "next/link";
import {Logo} from "@/components/landing/logo";

export default function RegisterPage() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Already registered?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </p>
      <div className="mt-10">
        <SignUp />
      </div>
    </SlimLayout>
  )
}
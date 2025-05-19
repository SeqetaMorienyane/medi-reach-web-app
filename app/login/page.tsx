import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { LoginForm } from "@/components/forms/login-form"

export default function LoginPage() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/"
        className="absolute left-4 top-4 flex items-center text-sm font-medium text-muted-foreground md:left-8 md:top-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-green-600" />
        <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-white" />
            <div className="absolute inset-1 rounded-full bg-blue-600" />
            <div className="absolute inset-[6px] rounded-full bg-white" />
          </div>
          MediReach
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "MediReach connects South Africa to smarter healthcare, providing accessible digital health services to
              all."
            </p>
            <footer className="text-sm">HealthSync SA</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your MediReach account</p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register/patient" className="underline underline-offset-4 hover:text-primary">
              Register as a patient
            </Link>{" "}
            or{" "}
            <Link href="/register/provider" className="underline underline-offset-4 hover:text-primary">
              healthcare provider
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CHWRegistrationForm } from "@/components/forms/chw-registration-form"

export default function CHWRegistrationPage() {
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
        <div className="absolute inset-0 bg-purple-600" />
        <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-white" />
            <div className="absolute inset-1 rounded-full bg-purple-600" />
            <div className="absolute inset-[6px] rounded-full bg-white" />
          </div>
          MediReach
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "As a Community Health Worker, MediReach has empowered me to better serve my community. I can track
              patient visits, coordinate with healthcare providers, and ensure follow-up care."
            </p>
            <footer className="text-sm">Lindiwe Mthembu, CHW from Eastern Cape</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] lg:w-[500px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Community Health Worker Registration</h1>
            <p className="text-sm text-muted-foreground">
              Create your CHW account to provide essential healthcare services in your community
            </p>
          </div>
          <CHWRegistrationForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

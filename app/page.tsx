import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-blue-600" />
              <div className="absolute inset-1 rounded-full bg-white" />
              <div className="absolute inset-[6px] rounded-full bg-blue-600" />
            </div>
            <span className="text-xl font-bold">MediReach</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connecting South Africa to Smarter Healthcare
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    MediReach provides a comprehensive digital health platform that connects patients, healthcare
                    providers, and community health workers across South Africa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register/patient">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Register as Patient
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/register/provider">
                    <Button size="lg" variant="outline">
                      Register as Healthcare Provider
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Healthcare professionals"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Essential Healthcare Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access critical healthcare services and information with just a few clicks
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <Link href="/emergency">
                  <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Access Emergency Info</h3>
                        <p className="text-sm text-muted-foreground">
                          Find nearest hospitals with bed availability in real-time
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-red-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
                <Link href="/telehealth">
                  <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Use Telehealth</h3>
                        <p className="text-sm text-muted-foreground">
                          Connect with healthcare providers remotely via video calls
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-green-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              </div>
              <div className="grid gap-6">
                <Link href="/symptom-checker">
                  <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                          <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                          <path d="M5 18v2" />
                          <path d="M19 18v2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">AI Symptom Checker</h3>
                        <p className="text-sm text-muted-foreground">
                          Get preliminary health guidance based on your symptoms
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
                <Link href="/facilities">
                  <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Find Facilities</h3>
                        <p className="text-sm text-muted-foreground">
                          Locate healthcare facilities near you and book appointments
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">10,000+</div>
                <p className="text-sm font-medium">Medications Delivered</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <p className="text-sm font-medium">Emergency Support</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">Real-time</div>
                <p className="text-sm font-medium">Referral Tracking</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">9 Provinces</div>
                <p className="text-sm font-medium">Coverage Across SA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join MediReach Today</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of South Africa's digital healthcare revolution
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register/patient">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Register as Patient
                  </Button>
                </Link>
                <Link href="/register/provider">
                  <Button size="lg" variant="outline">
                    Register as Healthcare Provider
                  </Button>
                </Link>
                <Link href="/register/chw">
                  <Button size="lg" variant="outline">
                    Register as Community Health Worker
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">About MediReach</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    POPIA Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Health Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    COVID-19 Info
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    support@medireach.co.za
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    0800-MED-HELP
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Contact Form
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
            <p className="text-xs text-muted-foreground">© 2025 MediReach. All rights reserved. HealthSync SA.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

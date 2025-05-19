"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, FileText, Home, MessageSquare, PlusCircle, Settings, User } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 flex-col border-r bg-background md:flex">
      <nav className="grid gap-2 p-4">
        <Link
          href="/dashboard/patient"
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            pathname === "/dashboard/patient"
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <Home className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          href="/dashboard/patient/appointments"
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            pathname === "/dashboard/patient/appointments"
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <Calendar className="h-5 w-5" />
          Appointments
        </Link>
        <Link
          href="/dashboard/patient/health-wallet"
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            pathname === "/dashboard/patient/health-wallet"
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <FileText className="h-5 w-5" />
          Health Wallet
        </Link>
        <Link
          href="/dashboard/patient/messages"
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            pathname === "/dashboard/patient/messages"
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <MessageSquare className="h-5 w-5" />
          Messages
        </Link>
        <Link
          href="/dashboard/patient/book"
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            pathname === "/dashboard/patient/book"
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <PlusCircle className="h-5 w-5" />
          Book Appointment
        </Link>
        <Link
          href="/dashboard/patient/profile"
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            pathname === "/dashboard/patient/profile"
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <User className="h-5 w-5" />
          Profile
        </Link>
        <Link
          href="/dashboard/patient/settings"
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            pathname === "/dashboard/patient/settings"
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </nav>
    </aside>
  )
}

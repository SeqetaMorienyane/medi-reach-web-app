"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Calendar, Home, LogOut, Menu, MessageSquare, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-none">
            <SheetHeader className="border-b pb-4">
              <SheetTitle>
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8">
                    <div className="absolute inset-0 rounded-full bg-blue-600" />
                    <div className="absolute inset-1 rounded-full bg-white" />
                    <div className="absolute inset-[6px] rounded-full bg-blue-600" />
                  </div>
                  <span className="text-xl font-bold">MediReach</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="grid gap-2 py-4">
              <Link
                href="/dashboard/patient"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === "/dashboard/patient"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
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
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar className="h-5 w-5" />
                Appointments
              </Link>
              <Link
                href="/dashboard/patient/messages"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === "/dashboard/patient/messages"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="h-5 w-5" />
                Messages
              </Link>
              <Link
                href="/dashboard/patient/profile"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === "/dashboard/patient/profile"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
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
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 md:ml-0">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-blue-600" />
            <div className="absolute inset-1 rounded-full bg-white" />
            <div className="absolute inset-[6px] rounded-full bg-blue-600" />
          </div>
          <span className="text-xl font-bold">MediReach</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
              3
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/patient/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/patient/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/logout">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-7xl space-y-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

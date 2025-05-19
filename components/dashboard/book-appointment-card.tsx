import Link from "next/link"
import { Calendar } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BookAppointmentCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Book Appointment</CardTitle>
        <CardDescription>Schedule a healthcare visit</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center rounded-lg border p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Calendar className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="mt-3 font-medium">Need to see a healthcare provider?</h3>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Book an appointment with a doctor, specialist, or visit a healthcare facility.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/dashboard/patient/book">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

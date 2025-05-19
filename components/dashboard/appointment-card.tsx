import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AppointmentCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Upcoming Appointments</CardTitle>
          <Badge>2 Upcoming</Badge>
        </div>
        <CardDescription>Your scheduled healthcare visits</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium">Dr. Sarah Nkosi</div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              Tomorrow
            </Badge>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">General Checkup</div>
          <div className="mt-3 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>May 6, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>10:30 AM</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Pretoria Medical Center</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium">Pharmacy Collection</div>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              Next Week
            </Badge>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">Monthly Medication</div>
          <div className="mt-3 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>May 12, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Any Time</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>MediPharm Sandton</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/dashboard/patient/appointments">View All Appointments</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

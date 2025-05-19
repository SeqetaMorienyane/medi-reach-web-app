import Link from "next/link"
import { Pill } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function MedicationCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Medication Reminders</CardTitle>
          <Badge>3 Active</Badge>
        </div>
        <CardDescription>Your prescribed medications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium">Metformin 500mg</div>
            <Badge variant="outline" className="bg-amber-50 text-amber-700">
              Due Today
            </Badge>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">Take with meals, twice daily</div>
          <div className="mt-3 flex items-center gap-2">
            <Pill className="h-4 w-4 text-blue-600" />
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs">
                <span>14 days left</span>
                <span>30 days</span>
              </div>
              <Progress value={53} className="h-2" />
            </div>
          </div>
        </div>
        <div className="rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium">Atorvastatin 20mg</div>
            <Badge variant="outline" className="bg-red-50 text-red-700">
              Refill Soon
            </Badge>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">Take at night, once daily</div>
          <div className="mt-3 flex items-center gap-2">
            <Pill className="h-4 w-4 text-blue-600" />
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs">
                <span>5 days left</span>
                <span>30 days</span>
              </div>
              <Progress value={17} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/dashboard/patient/medications">View All Medications</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

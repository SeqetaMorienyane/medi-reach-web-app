import Link from "next/link"
import { Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RateVisitCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Rate Your Last Visit</CardTitle>
        <CardDescription>Help improve healthcare services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border p-3">
          <div className="font-medium">Dr. Sarah Nkosi</div>
          <div className="mt-1 text-sm text-muted-foreground">General Checkup on April 22, 2025</div>
          <div className="mt-3 flex items-center gap-1">
            <Star className="h-6 w-6 text-muted" />
            <Star className="h-6 w-6 text-muted" />
            <Star className="h-6 w-6 text-muted" />
            <Star className="h-6 w-6 text-muted" />
            <Star className="h-6 w-6 text-muted" />
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            Your feedback helps improve healthcare services across South Africa.
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/dashboard/patient/rate-visit">Rate Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

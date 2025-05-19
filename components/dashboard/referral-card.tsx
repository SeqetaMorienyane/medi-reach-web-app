import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ReferralCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Referrals</CardTitle>
          <Badge>1 Active</Badge>
        </div>
        <CardDescription>Track your specialist referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium">Cardiologist Referral</div>
            <Badge variant="outline" className="bg-purple-50 text-purple-700">
              Pending
            </Badge>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">From: Dr. Sarah Nkosi (General Practitioner)</div>
          <div className="mt-1 text-sm text-muted-foreground">To: Dr. James Molefe (Cardiologist)</div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">Issued: April 28, 2025</div>
            <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-xs">
              View Details
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/dashboard/patient/referrals">View All Referrals</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

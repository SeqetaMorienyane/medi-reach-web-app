import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function HealthWalletCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Digital Health Wallet</CardTitle>
        <CardDescription>Your medical history and records</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium">Medical History</div>
                <div className="text-xs text-muted-foreground">Last updated: April 15, 2025</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              View
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium">Prescriptions</div>
                <div className="text-xs text-muted-foreground">3 active prescriptions</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              View
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium">Test Results</div>
                <div className="text-xs text-muted-foreground">2 recent results</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              View
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/dashboard/patient/health-wallet">Open Health Wallet</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

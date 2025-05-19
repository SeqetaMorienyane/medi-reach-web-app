import Link from "next/link"
import { Stethoscope } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SymptomCheckerCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>AI Symptom Checker</CardTitle>
        <CardDescription>Get preliminary health guidance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center rounded-lg border p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Stethoscope className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mt-3 font-medium">Not feeling well?</h3>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Describe your symptoms and get preliminary guidance on what to do next.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/dashboard/patient/symptom-checker">Check Symptoms</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

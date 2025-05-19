import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { PrescriptionForm } from "@/components/prescriptions/prescription-form"
import { Button } from "@/components/ui/button"

export default function CreatePrescriptionPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Create ePrescription</h1>
          <p className="text-muted-foreground">Generate a new electronic prescription</p>
        </div>
        <Link href="/prescriptions">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Prescriptions
          </Button>
        </Link>
      </div>
      <div className="mt-6">
        <PrescriptionForm />
      </div>
    </DashboardShell>
  )
}

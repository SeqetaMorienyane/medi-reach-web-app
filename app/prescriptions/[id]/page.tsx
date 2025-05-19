import Link from "next/link"
import { ArrowLeft, Download, Printer, Share2 } from "lucide-react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { PrescriptionView } from "@/components/prescriptions/prescription-view"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ViewPrescriptionPage({ params }: { params: { id: string } }) {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Prescription #{params.id}</h1>
          <p className="text-muted-foreground">View and manage prescription details</p>
        </div>
        <div className="flex gap-2">
          <Link href="/prescriptions">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Prescriptions
            </Button>
          </Link>
          <ButtonGroup>
            <Button variant="outline" size="icon">
              <Printer className="h-4 w-4" />
              <span className="sr-only">Print</span>
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="mt-6">
        <PrescriptionView id={params.id} />
      </div>
    </DashboardShell>
  )
}

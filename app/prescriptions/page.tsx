import Link from "next/link"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { PrescriptionList } from "@/components/prescriptions/prescription-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function PrescriptionsPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">ePrescriptions</h1>
          <p className="text-muted-foreground">Manage and view electronic prescriptions</p>
        </div>
        <Link href="/prescriptions/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Prescription
          </Button>
        </Link>
      </div>
      <PrescriptionList />
    </DashboardShell>
  )
}

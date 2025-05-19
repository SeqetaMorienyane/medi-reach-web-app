import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AppointmentCard } from "@/components/dashboard/appointment-card"
import { MedicationCard } from "@/components/dashboard/medication-card"
import { ReferralCard } from "@/components/dashboard/referral-card"
import { HealthWalletCard } from "@/components/dashboard/health-wallet-card"
import { RateVisitCard } from "@/components/dashboard/rate-visit-card"
import { SymptomCheckerCard } from "@/components/dashboard/symptom-checker-card"
import { BookAppointmentCard } from "@/components/dashboard/book-appointment-card"

export default function PatientDashboardPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Patient Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AppointmentCard />
        <MedicationCard />
        <SymptomCheckerCard />
        <HealthWalletCard />
        <BookAppointmentCard />
        <RateVisitCard />
        <ReferralCard />
      </div>
    </DashboardShell>
  )
}

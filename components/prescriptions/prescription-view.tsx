import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Mock data for the prescription
const prescriptionData = {
  id: "123",
  patientId: "PT-12345",
  patientName: "John Doe",
  patientIdNumber: "8012155012089",
  doctorName: "Dr. Sarah Nkosi",
  doctorRegistration: "MP0123456",
  diagnosis: "Hypertension and Type 2 Diabetes",
  medications: [
    {
      name: "Metformin",
      dosage: "500mg",
      frequency: "twice-daily",
      duration: "30 days",
      instructions: "Take with meals to reduce gastrointestinal side effects.",
    },
    {
      name: "Amlodipine",
      dosage: "5mg",
      frequency: "once-daily",
      duration: "30 days",
      instructions: "Take in the morning.",
    },
  ],
  notes: "Patient should monitor blood pressure daily and maintain a low-sodium diet.",
  createdAt: "2025-05-01",
  validUntil: "2025-06-01",
  status: "active",
}

const frequencyMap: Record<string, string> = {
  "once-daily": "Once daily",
  "twice-daily": "Twice daily",
  "three-times-daily": "Three times daily",
  "four-times-daily": "Four times daily",
  "every-morning": "Every morning",
  "every-evening": "Every evening",
  "as-needed": "As needed (PRN)",
}

export function PrescriptionView({ id }: { id: string }) {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="bg-blue-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-white" />
                <div className="absolute inset-1 rounded-full bg-blue-600" />
                <div className="absolute inset-[6px] rounded-full bg-white" />
              </div>
              <span className="text-xl font-bold">MediReach</span>
            </div>
            <div className="text-sm">ePrescription #{prescriptionData.id}</div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Patient Information</h3>
              <div className="mt-1">
                <p className="font-medium">{prescriptionData.patientName}</p>
                <p className="text-sm">ID: {prescriptionData.patientIdNumber}</p>
                <p className="text-sm">Patient #: {prescriptionData.patientId}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Prescriber Information</h3>
              <div className="mt-1">
                <p className="font-medium">{prescriptionData.doctorName}</p>
                <p className="text-sm">HPCSA #: {prescriptionData.doctorRegistration}</p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Diagnosis</h3>
            <p className="mt-1">{prescriptionData.diagnosis}</p>
          </div>

          <Separator className="my-6" />

          <div>
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">Prescribed Medications</h3>
            <div className="space-y-4">
              {prescriptionData.medications.map((medication, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{medication.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 md:grid-cols-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Dosage</p>
                        <p>{medication.dosage}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Frequency</p>
                        <p>{frequencyMap[medication.frequency] || medication.frequency}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p>{medication.duration}</p>
                      </div>
                      {medication.instructions && (
                        <div className="md:col-span-3">
                          <p className="text-xs text-muted-foreground">Special Instructions</p>
                          <p>{medication.instructions}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {prescriptionData.notes && (
            <>
              <Separator className="my-6" />
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Additional Notes</h3>
                <p className="mt-1">{prescriptionData.notes}</p>
              </div>
            </>
          )}

          <Separator className="my-6" />

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Prescription Details</h3>
              <div className="mt-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Status:</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {prescriptionData.status === "active" ? "Active" : "Expired"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Created:</span>
                  <span className="text-sm">{prescriptionData.createdAt}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Valid Until:</span>
                  <span className="text-sm">{prescriptionData.validUntil}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="mb-2 text-sm font-medium text-muted-foreground">QR Code</div>
              <div className="h-32 w-32 overflow-hidden rounded-lg border bg-white p-1">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  width={120}
                  height={120}
                  alt="Prescription QR Code"
                  className="h-full w-full"
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Scan to verify prescription</p>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium">{prescriptionData.doctorName}</span>
              <span className="text-xs text-muted-foreground">Digital Signature</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">
                This is an official electronic prescription issued by MediReach.
              </p>
              <p className="text-xs text-muted-foreground">
                Verify authenticity at verify.medireach.co.za using the QR code.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

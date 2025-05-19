import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Mock patient data
const patientData = {
  name: "John Doe",
  id: "PT-12345",
  idNumber: "8012155012089",
  age: 42,
  gender: "Male",
  bloodType: "O+",
  allergies: ["Penicillin", "Peanuts"],
  conditions: ["Hypertension", "Type 2 Diabetes"],
  medications: [
    {
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
    },
    {
      name: "Amlodipine",
      dosage: "5mg",
      frequency: "Once daily",
    },
  ],
  vitalSigns: {
    bloodPressure: "138/85",
    heartRate: "78",
    temperature: "36.7°C",
    respiratoryRate: "16",
    oxygenSaturation: "98%",
  },
  recentVisits: [
    {
      date: "2025-04-15",
      reason: "Routine checkup",
      doctor: "Dr. Sarah Nkosi",
    },
    {
      date: "2025-03-02",
      reason: "Flu symptoms",
      doctor: "Dr. James Molefe",
    },
  ],
}

export function PatientInfo() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{patientData.name}</h3>
        <p className="text-sm text-muted-foreground">Patient ID: {patientData.id}</p>
      </div>

      <Card>
        <CardContent className="p-4">
          <h4 className="text-sm font-medium text-muted-foreground">Basic Information</h4>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Age:</span> {patientData.age}
            </div>
            <div>
              <span className="text-muted-foreground">Gender:</span> {patientData.gender}
            </div>
            <div>
              <span className="text-muted-foreground">ID Number:</span> {patientData.idNumber}
            </div>
            <div>
              <span className="text-muted-foreground">Blood Type:</span> {patientData.bloodType}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h4 className="text-sm font-medium text-muted-foreground">Medical Conditions</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {patientData.conditions.map((condition, index) => (
              <Badge key={index} variant="outline">
                {condition}
              </Badge>
            ))}
          </div>

          <Separator className="my-3" />

          <h4 className="text-sm font-medium text-muted-foreground">Allergies</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {patientData.allergies.map((allergy, index) => (
              <Badge key={index} variant="outline" className="bg-red-50 text-red-700">
                {allergy}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h4 className="text-sm font-medium text-muted-foreground">Current Medications</h4>
          <div className="mt-2 space-y-2">
            {patientData.medications.map((medication, index) => (
              <div key={index} className="rounded-md border p-2">
                <div className="font-medium">{medication.name}</div>
                <div className="text-xs text-muted-foreground">
                  {medication.dosage} - {medication.frequency}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h4 className="text-sm font-medium text-muted-foreground">Vital Signs</h4>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Blood Pressure:</span> {patientData.vitalSigns.bloodPressure}
            </div>
            <div>
              <span className="text-muted-foreground">Heart Rate:</span> {patientData.vitalSigns.heartRate} bpm
            </div>
            <div>
              <span className="text-muted-foreground">Temperature:</span> {patientData.vitalSigns.temperature}
            </div>
            <div>
              <span className="text-muted-foreground">Respiratory Rate:</span> {patientData.vitalSigns.respiratoryRate}{" "}
              breaths/min
            </div>
            <div>
              <span className="text-muted-foreground">O₂ Saturation:</span> {patientData.vitalSigns.oxygenSaturation}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h4 className="text-sm font-medium text-muted-foreground">Recent Visits</h4>
          <div className="mt-2 space-y-2">
            {patientData.recentVisits.map((visit, index) => (
              <div key={index} className="rounded-md border p-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{visit.reason}</div>
                  <div className="text-xs text-muted-foreground">{visit.date}</div>
                </div>
                <div className="text-xs text-muted-foreground">{visit.doctor}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for prescriptions
const prescriptions = [
  {
    id: "123",
    patientName: "John Doe",
    patientId: "PT-12345",
    medications: ["Metformin 500mg", "Amlodipine 5mg"],
    doctor: "Dr. Sarah Nkosi",
    createdAt: "2025-05-01",
    validUntil: "2025-06-01",
    status: "active",
  },
  {
    id: "124",
    patientName: "Mary Smith",
    patientId: "PT-12346",
    medications: ["Amoxicillin 500mg"],
    doctor: "Dr. James Molefe",
    createdAt: "2025-04-28",
    validUntil: "2025-05-12",
    status: "active",
  },
  {
    id: "125",
    patientName: "David Johnson",
    patientId: "PT-12347",
    medications: ["Paracetamol 500mg", "Ibuprofen 400mg"],
    doctor: "Dr. Sarah Nkosi",
    createdAt: "2025-04-15",
    validUntil: "2025-04-30",
    status: "expired",
  },
  {
    id: "126",
    patientName: "Thabo Mbeki",
    patientId: "PT-12348",
    medications: ["Atorvastatin 20mg", "Aspirin 81mg"],
    doctor: "Dr. James Molefe",
    createdAt: "2025-04-10",
    validUntil: "2025-05-10",
    status: "active",
  },
  {
    id: "127",
    patientName: "Nomsa Dlamini",
    patientId: "PT-12349",
    medications: ["Levothyroxine 50mcg"],
    doctor: "Dr. Sarah Nkosi",
    createdAt: "2025-03-20",
    validUntil: "2025-06-20",
    status: "active",
  },
]

export function PrescriptionList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPrescriptions = prescriptions.filter(
    (prescription) =>
      prescription.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.medications.some((med) => med.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search prescriptions..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead className="hidden md:table-cell">Medications</TableHead>
              <TableHead className="hidden md:table-cell">Doctor</TableHead>
              <TableHead className="hidden md:table-cell">Created</TableHead>
              <TableHead>Valid Until</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPrescriptions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No prescriptions found.
                </TableCell>
              </TableRow>
            ) : (
              filteredPrescriptions.map((prescription) => (
                <TableRow key={prescription.id}>
                  <TableCell className="font-medium">{prescription.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{prescription.patientName}</p>
                      <p className="text-xs text-muted-foreground">{prescription.patientId}</p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-col gap-1">
                      {prescription.medications.map((med, index) => (
                        <span key={index} className="text-sm">
                          {med}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{prescription.doctor}</TableCell>
                  <TableCell className="hidden md:table-cell">{prescription.createdAt}</TableCell>
                  <TableCell>{prescription.validUntil}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        prescription.status === "active" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                      }
                    >
                      {prescription.status === "active" ? "Active" : "Expired"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild size="sm" variant="ghost">
                      <Link href={`/prescriptions/${prescription.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

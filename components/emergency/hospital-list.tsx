import { Search, Phone, MapPin, Clock } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Mock data for hospitals
const hospitals = [
  {
    id: 1,
    name: "Pretoria Academic Hospital",
    address: "1 Malherbe St, Pretoria Central, Pretoria",
    phone: "012 354 1000",
    distance: "2.3 km",
    beds: {
      total: 120,
      available: 15,
      percentage: 12,
    },
    waitTime: "45 min",
    services: ["Emergency", "ICU", "Trauma", "Pediatrics"],
  },
  {
    id: 2,
    name: "Netcare Unitas Hospital",
    address: "Clifton Ave, Lyttelton, Centurion",
    phone: "012 677 8000",
    distance: "5.7 km",
    beds: {
      total: 80,
      available: 8,
      percentage: 10,
    },
    waitTime: "30 min",
    services: ["Emergency", "ICU", "Maternity", "Surgery"],
  },
  {
    id: 3,
    name: "Life Wilgers Hospital",
    address: "Denneboom Rd & Simon Vermooten Rd, Die Wilgers, Pretoria",
    phone: "012 807 8100",
    distance: "8.2 km",
    beds: {
      total: 60,
      available: 2,
      percentage: 3,
    },
    waitTime: "60 min",
    services: ["Emergency", "ICU", "Cardiology", "Neurology"],
  },
  {
    id: 4,
    name: "Mediclinic Midstream",
    address: "Cnr Trichard & Magiel Rd, Eco Park Estate, Centurion",
    phone: "012 652 9000",
    distance: "12.5 km",
    beds: {
      total: 90,
      available: 20,
      percentage: 22,
    },
    waitTime: "25 min",
    services: ["Emergency", "ICU", "Pediatrics", "Orthopedics"],
  },
  {
    id: 5,
    name: "Steve Biko Academic Hospital",
    address: "Steve Biko Rd & Malan St, Prinshof 349-Jr, Pretoria",
    phone: "012 354 1000",
    distance: "4.1 km",
    beds: {
      total: 150,
      available: 5,
      percentage: 3,
    },
    waitTime: "90 min",
    services: ["Emergency", "ICU", "Trauma", "Surgery", "Specialized Care"],
  },
]

export function HospitalList() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search hospitals..." className="pl-8" />
      </div>

      <div className="space-y-4">
        {hospitals.map((hospital) => (
          <Card key={hospital.id}>
            <CardContent className="p-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold">{hospital.name}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{hospital.address}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{hospital.waitTime} wait time</span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {hospital.services.map((service, index) => (
                      <Badge key={index} variant="outline">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Bed Availability</span>
                      <span className="text-sm font-medium">
                        {hospital.beds.available}/{hospital.beds.total}
                      </span>
                    </div>
                    <Progress
                      value={hospital.beds.percentage}
                      className={
                        hospital.beds.percentage > 20
                          ? "bg-green-100"
                          : hospital.beds.percentage > 10
                            ? "bg-amber-100"
                            : "bg-red-100"
                      }
                    />
                    <p
                      className={`mt-1 text-right text-xs ${
                        hospital.beds.percentage > 20
                          ? "text-green-700"
                          : hospital.beds.percentage > 10
                            ? "text-amber-700"
                            : "text-red-700"
                      }`}
                    >
                      {hospital.beds.percentage}% available
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <Button>Get Directions</Button>
                    <Button variant="outline">Call Hospital</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { MapPin, Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    },
    waitTime: "45 min",
    services: ["Emergency", "ICU", "Trauma", "Pediatrics"],
    coordinates: { lat: -25.7461, lng: 28.1982 },
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
    },
    waitTime: "30 min",
    services: ["Emergency", "ICU", "Maternity", "Surgery"],
    coordinates: { lat: -25.8418, lng: 28.2001 },
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
    },
    waitTime: "60 min",
    services: ["Emergency", "ICU", "Cardiology", "Neurology"],
    coordinates: { lat: -25.7697, lng: 28.3062 },
  },
]

export function HospitalMap() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedHospital, setSelectedHospital] = useState<number | null>(null)

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="md:col-span-1">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search hospitals..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {filteredHospitals.map((hospital) => (
              <Card
                key={hospital.id}
                className={`cursor-pointer transition-colors ${
                  selectedHospital === hospital.id ? "border-blue-500" : ""
                }`}
                onClick={() => setSelectedHospital(hospital.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{hospital.name}</h3>
                      <p className="text-xs text-muted-foreground">{hospital.address}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={
                            hospital.beds.available > 10
                              ? "bg-green-50 text-green-700"
                              : hospital.beds.available > 5
                                ? "bg-amber-50 text-amber-700"
                                : "bg-red-50 text-red-700"
                          }
                        >
                          {hospital.beds.available} beds available
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          {hospital.waitTime} wait
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm">{hospital.distance}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <Card className="h-[500px] overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-full w-full bg-muted">
              {/* This would be replaced with an actual map component in a real application */}
              <div className="flex h-full w-full items-center justify-center bg-[url('/placeholder.svg?height=500&width=800')] bg-cover bg-center">
                <div className="rounded-lg bg-background/80 p-4 backdrop-blur-sm">
                  <p className="text-center">Interactive Map</p>
                  <p className="text-center text-sm text-muted-foreground">
                    Showing {filteredHospitals.length} hospitals in your area
                  </p>
                </div>
                {filteredHospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    className={`absolute flex h-8 w-8 items-center justify-center rounded-full ${
                      selectedHospital === hospital.id ? "bg-blue-600" : "bg-red-600"
                    }`}
                    style={{
                      left: `${(hospital.coordinates.lng - 28.18) * 1000 + 400}px`,
                      top: `${(hospital.coordinates.lat + 25.8) * -1000 + 250}px`,
                    }}
                  >
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {selectedHospital && (
          <Card className="mt-4">
            <CardContent className="p-4">
              {(() => {
                const hospital = hospitals.find((h) => h.id === selectedHospital)
                if (!hospital) return null

                return (
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold">{hospital.name}</h2>
                        <p className="text-sm text-muted-foreground">{hospital.address}</p>
                        <p className="mt-1 text-sm">
                          <span className="font-medium">Phone:</span> {hospital.phone}
                        </p>
                      </div>
                      <Button>Get Directions</Button>
                    </div>

                    <Tabs defaultValue="beds" className="mt-4">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="beds">Bed Availability</TabsTrigger>
                        <TabsTrigger value="services">Services</TabsTrigger>
                        <TabsTrigger value="info">Information</TabsTrigger>
                      </TabsList>
                      <TabsContent value="beds" className="space-y-4">
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <Card>
                            <CardContent className="p-4 text-center">
                              <p className="text-sm text-muted-foreground">Available Beds</p>
                              <p className="text-3xl font-bold text-green-600">{hospital.beds.available}</p>
                              <p className="text-sm text-muted-foreground">of {hospital.beds.total} total</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4 text-center">
                              <p className="text-sm text-muted-foreground">Estimated Wait Time</p>
                              <p className="text-3xl font-bold text-amber-600">{hospital.waitTime}</p>
                              <p className="text-sm text-muted-foreground">for non-critical cases</p>
                            </CardContent>
                          </Card>
                        </div>
                      </TabsContent>
                      <TabsContent value="services">
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          {hospital.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="justify-center py-1.5">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="info">
                        <div className="mt-4 space-y-2">
                          <p className="text-sm">
                            <span className="font-medium">Distance:</span> {hospital.distance} from your location
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Operating Hours:</span> 24/7 for emergency services
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Insurance:</span> Most major medical aids accepted
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                )
              })()}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

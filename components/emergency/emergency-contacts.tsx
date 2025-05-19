import { Phone, Ambulance, AmbulanceIcon as FirstAid, ShieldAlert, Flame } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const emergencyContacts = [
  {
    title: "National Emergency",
    number: "10111",
    description: "Police emergency services",
    icon: ShieldAlert,
    color: "text-blue-600",
  },
  {
    title: "Ambulance",
    number: "10177",
    description: "Medical emergency services",
    icon: Ambulance,
    color: "text-red-600",
  },
  {
    title: "Fire Department",
    number: "10177",
    description: "Fire emergency services",
    icon: Flame,
    color: "text-orange-600",
  },
  {
    title: "Poison Information",
    number: "0861 555 777",
    description: "Poison information center",
    icon: FirstAid,
    color: "text-green-600",
  },
]

export function EmergencyContacts() {
  return (
    <div className="space-y-6">
      <Card className="border-red-200 bg-red-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-red-700">Emergency Services</CardTitle>
          <CardDescription>Important contact numbers for emergencies</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-700">
            In case of a life-threatening emergency, call the national emergency number immediately.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {emergencyContacts.map((contact, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className={`rounded-full bg-white p-2 ${contact.color}`}>
                  <contact.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{contact.title}</h3>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold">{contact.number}</span>
                    <Button size="sm" className="gap-1">
                      <Phone className="h-4 w-4" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Local Emergency Contacts</CardTitle>
          <CardDescription>Based on your location: Pretoria, Gauteng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Pretoria Emergency Services</p>
                <p className="text-sm text-muted-foreground">Local municipal emergency</p>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Phone className="h-4 w-4" />
                012 358 6300
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Tshwane District Hospital</p>
                <p className="text-sm text-muted-foreground">Emergency room</p>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Phone className="h-4 w-4" />
                012 354 6000
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Netcare 911</p>
                <p className="text-sm text-muted-foreground">Private ambulance service</p>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Phone className="h-4 w-4" />
                082 911
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

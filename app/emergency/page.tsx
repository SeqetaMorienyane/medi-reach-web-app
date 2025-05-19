import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { EmergencyContacts } from "@/components/emergency/emergency-contacts"
import { HospitalMap } from "@/components/emergency/hospital-map"
import { HospitalList } from "@/components/emergency/hospital-list"
import { EmergencyGuidelines } from "@/components/emergency/emergency-guidelines"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmergencyInfoPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Emergency Information</h1>
          <p className="text-muted-foreground">Find emergency services and hospital availability</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 items-center rounded-md bg-red-100 px-3 text-sm font-medium text-red-700">
            Emergency? Call 10177
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Tabs defaultValue="map">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="list">Hospital List</TabsTrigger>
            <TabsTrigger value="contacts">Emergency Contacts</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>
          <TabsContent value="map" className="mt-4">
            <HospitalMap />
          </TabsContent>
          <TabsContent value="list" className="mt-4">
            <HospitalList />
          </TabsContent>
          <TabsContent value="contacts" className="mt-4">
            <EmergencyContacts />
          </TabsContent>
          <TabsContent value="guidelines" className="mt-4">
            <EmergencyGuidelines />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}

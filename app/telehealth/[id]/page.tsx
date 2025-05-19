import { VideoCall } from "@/components/telehealth/video-call"
import { ChatPanel } from "@/components/telehealth/chat-panel"
import { PatientInfo } from "@/components/telehealth/patient-info"
import { CallControls } from "@/components/telehealth/call-controls"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TelehealthPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b bg-background px-6">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-blue-600" />
            <div className="absolute inset-1 rounded-full bg-white" />
            <div className="absolute inset-[6px] rounded-full bg-blue-600" />
          </div>
          <span className="text-xl font-bold">MediReach</span>
        </div>
        <div className="text-lg font-medium">Telehealth Session #{params.id}</div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 items-center rounded-md bg-green-100 px-3 text-sm font-medium text-green-700">
            Connected
          </div>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col">
          <div className="relative flex-1">
            <VideoCall />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <CallControls />
            </div>
          </div>
        </div>
        <div className="hidden w-80 flex-col border-l md:flex">
          <Tabs defaultValue="chat" className="flex h-full flex-col">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="info">Patient Info</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="flex-1 overflow-hidden">
              <ChatPanel />
            </TabsContent>
            <TabsContent value="info" className="flex-1 overflow-auto p-4">
              <PatientInfo />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

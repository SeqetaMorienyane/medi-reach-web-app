"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Mic, MicOff, Video, VideoOff, PhoneOff, Share2, MessageSquare, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CallControls() {
  const router = useRouter()
  const [isMicMuted, setIsMicMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isEndCallDialogOpen, setIsEndCallDialogOpen] = useState(false)

  const toggleMic = () => setIsMicMuted(!isMicMuted)
  const toggleVideo = () => setIsVideoOff(!isVideoOff)

  const endCall = () => {
    // In a real application, this would disconnect the call
    router.push("/dashboard/patient")
  }

  return (
    <div className="flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 backdrop-blur-sm">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${isMicMuted ? "bg-red-500/20 text-red-500" : "text-white hover:bg-white/20"}`}
              onClick={toggleMic}
            >
              {isMicMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isMicMuted ? "Unmute" : "Mute"}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${isVideoOff ? "bg-red-500/20 text-red-500" : "text-white hover:bg-white/20"}`}
              onClick={toggleVideo}
            >
              {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isVideoOff ? "Turn on camera" : "Turn off camera"}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20">
              <Share2 className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share screen</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Open chat</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20">
              <FileText className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share documents</TooltipContent>
        </Tooltip>

        <Dialog open={isEndCallDialogOpen} onOpenChange={setIsEndCallDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" size="icon" className="rounded-full">
              <PhoneOff className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>End Call</DialogTitle>
              <DialogDescription>Are you sure you want to end this telehealth session?</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEndCallDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={endCall}>
                End Call
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TooltipProvider>
    </div>
  )
}

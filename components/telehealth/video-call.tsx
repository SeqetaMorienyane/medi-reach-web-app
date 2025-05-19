"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Mic, MicOff, VideoOff } from "lucide-react"

export function VideoCall() {
  const [isMicMuted, setIsMicMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const mainVideoRef = useRef<HTMLDivElement>(null)
  const selfVideoRef = useRef<HTMLDivElement>(null)

  // In a real application, this would be replaced with actual WebRTC code
  // This is just a placeholder for the UI

  return (
    <div className="relative h-full w-full bg-black">
      {/* Main video (doctor) */}
      <div ref={mainVideoRef} className="h-full w-full">
        {!isVideoOff ? (
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="Doctor video"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-900">
            <div className="text-center">
              <VideoOff className="mx-auto h-16 w-16 text-gray-500" />
              <p className="mt-2 text-xl text-gray-300">Video is turned off</p>
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4 rounded-lg bg-black/50 px-3 py-1.5 text-sm text-white backdrop-blur-sm">
          Dr. Sarah Nkosi
        </div>
      </div>

      {/* Self video (patient) */}
      <div
        ref={selfVideoRef}
        className="absolute bottom-4 right-4 h-40 w-60 overflow-hidden rounded-lg border-2 border-white shadow-lg"
      >
        {!isVideoOff ? (
          <Image
            src="/placeholder.svg?height=180&width=320"
            alt="Patient video"
            width={320}
            height={180}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-800">
            <VideoOff className="h-8 w-8 text-gray-500" />
          </div>
        )}
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
            {isMicMuted ? <MicOff className="h-3 w-3 text-red-500" /> : <Mic className="h-3 w-3 text-white" />}
          </div>
          <div className="rounded-md bg-black/50 px-2 py-0.5 text-xs text-white backdrop-blur-sm">You</div>
        </div>
      </div>
    </div>
  )
}

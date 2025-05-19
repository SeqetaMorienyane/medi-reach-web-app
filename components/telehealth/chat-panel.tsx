"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

// Mock chat messages
const initialMessages = [
  {
    id: 1,
    sender: "doctor",
    name: "Dr. Sarah Nkosi",
    avatar: "/placeholder.svg?height=40&width=40",
    message: "Hello Mr. Doe, how are you feeling today?",
    time: "10:02 AM",
  },
  {
    id: 2,
    sender: "patient",
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    message: "I've been experiencing headaches and dizziness for the past few days.",
    time: "10:03 AM",
  },
  {
    id: 3,
    sender: "doctor",
    name: "Dr. Sarah Nkosi",
    avatar: "/placeholder.svg?height=40&width=40",
    message: "I'm sorry to hear that. Can you describe the headaches? Are they constant or intermittent?",
    time: "10:04 AM",
  },
  {
    id: 4,
    sender: "patient",
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    message: "They come and go, but they're quite intense when they happen. Usually on one side of my head.",
    time: "10:05 AM",
  },
  {
    id: 5,
    sender: "doctor",
    name: "Dr. Sarah Nkosi",
    avatar: "/placeholder.svg?height=40&width=40",
    message:
      "I see. And the dizziness, does it happen at the same time as the headaches or separately? Do you notice any triggers?",
    time: "10:06 AM",
  },
]

export function ChatPanel() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      sender: "patient",
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-3">
        <h3 className="font-medium">Chat</h3>
        <p className="text-xs text-muted-foreground">Messages are encrypted and secure</p>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-2 ${msg.sender === "patient" ? "flex-row-reverse" : "flex-row"}`}>
              <Avatar className="h-8 w-8">
                <AvatarImage src={msg.avatar || "/placeholder.svg"} alt={msg.name} />
                <AvatarFallback>{msg.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div
                className={`max-w-[75%] rounded-lg p-3 ${
                  msg.sender === "patient" ? "bg-blue-500 text-white" : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm">{msg.message}</p>
                <p
                  className={`mt-1 text-right text-xs ${
                    msg.sender === "patient" ? "text-blue-100" : "text-muted-foreground"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-3">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button size="icon" onClick={sendMessage} disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

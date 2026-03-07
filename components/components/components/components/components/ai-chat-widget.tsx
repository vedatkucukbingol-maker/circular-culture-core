"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, User, Sparkles } from "lucide-react"

interface Message {
  role: "assistant" | "user"
  content: string
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hello! I'm your Circular Culture AI assistant. Ask me anything about sustainability, circular economy, or how we can help your organization.",
  },
]

const quickResponses: Record<string, string> = {
  "what is circular economy":
    "The circular economy is a model of production and consumption that involves sharing, leasing, reusing, repairing, refurbishing, and recycling existing materials and products for as long as possible. It reduces waste, drives innovation, and creates new business opportunities.",
  "how can you help":
    "We offer comprehensive sustainability services: Circularity Audits to assess your current practices, Strategy Development for circular business models, Supply Chain Optimization to reduce waste, and ESG Reporting to meet compliance standards.",
  "what services do you offer":
    "Our core services include: 1) Circularity Audits, 2) Sustainable Strategy Development, 3) Supply Chain Optimization, 4) ESG & Compliance Reporting, and 5) Employee Sustainability Training. Try our free audit tool below!",
  default:
    "That's a great question! Our sustainability experts can provide detailed guidance on this topic. Would you like to schedule a consultation, or try our free Circularity Audit Tool below?",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim()
  for (const [key, value] of Object.entries(quickResponses)) {
    if (key !== "default" && lower.includes(key)) return value
  }
  if (lower.includes("audit") || lower.includes("tool"))
    return "Our Circularity Audit Tool helps you evaluate your organization's sustainability metrics. You can try it right here on this page - scroll down to the Audit section! It measures recycled input rates, total waste, and recovery rates."
  if (lower.includes("waste") || lower.includes("recycle"))
    return "Waste management and recycling are core pillars of the circular economy. We help organizations achieve an average 45% reduction in waste through systematic analysis and targeted strategies."
  return quickResponses.default
}

export function AiChatWidget() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim() || isTyping) return
    const userMessage: Message = { role: "user", content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const response = getResponse(userMessage.content)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 800 + Math.random() * 700)
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <div className="relative">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20">
            <Bot className="h-5 w-5 text-accent" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary bg-accent" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-primary-foreground">
            CircularAI Assistant
          </h3>
          <p className="text-xs text-primary-foreground/50">Always online</p>
        </div>
        <Sparkles className="h-4 w-4 text-accent/60" />
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex h-72 flex-col gap-3 overflow-y-auto px-5 py-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${
                msg.role === "assistant"
                  ? "bg-accent/20"
                  : "bg-primary-foreground/10"
              }`}
            >
              {msg.role === "assistant" ? (
                <Bot className="h-3.5 w-3.5 text-accent" />
              ) : (
                <User className="h-3.5 w-3.5 text-primary-foreground/70" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                msg.role === "assistant"
                  ? "bg-white/10 text-primary-foreground/90"
                  : "bg-accent/20 text-primary-foreground"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2.5">
            <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
              <Bot className="h-3.5 w-3.5 text-accent" />
            </div>
            <div className="flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/60 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/60 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/60 [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-white/10 px-4 py-3">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about sustainability..."
            className="flex-1 rounded-xl border-0 bg-white/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent/50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-40"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

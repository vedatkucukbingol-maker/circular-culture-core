"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, User, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

interface Message {
  role: "assistant" | "user"
  content: string
}

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
  const { lang } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Update initial message when language changes
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: t(translations.chat.greeting, lang),
      },
    ])
  }, [lang])

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
    <div className="w-full rounded-xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:rounded-2xl">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-3 sm:gap-3 sm:px-5 sm:py-4">
        <div className="relative">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 sm:h-9 sm:w-9 sm:rounded-xl">
            <Bot className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-accent sm:h-3 sm:w-3" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-primary-foreground">
            {t(translations.chat.title, lang)}
          </h3>
          <p className="text-xs text-primary-foreground/50">
            {t(translations.chat.status, lang)}
          </p>
        </div>
        <Sparkles className="h-4 w-4 flex-shrink-0 text-accent/60" />
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex h-56 flex-col gap-3 overflow-y-auto px-4 py-3 sm:h-72 sm:px-5 sm:py-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 sm:gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md sm:h-7 sm:w-7 sm:rounded-lg ${
                msg.role === "assistant"
                  ? "bg-accent/20"
                  : "bg-primary-foreground/10"
              }`}
            >
              {msg.role === "assistant" ? (
                <Bot className="h-3 w-3 text-accent sm:h-3.5 sm:w-3.5" />
              ) : (
                <User className="h-3 w-3 text-primary-foreground/70 sm:h-3.5 sm:w-3.5" />
              )}
            </div>
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed sm:max-w-[80%] sm:rounded-xl sm:px-3.5 sm:py-2.5 sm:text-[13px] ${
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
          <div className="flex gap-2 sm:gap-2.5">
            <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-accent/20 sm:h-7 sm:w-7 sm:rounded-lg">
              <Bot className="h-3 w-3 text-accent sm:h-3.5 sm:w-3.5" />
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2.5 sm:rounded-xl sm:px-4 sm:py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/60 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/60 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/60 [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-white/10 px-3 py-2.5 sm:px-4 sm:py-3">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex w-full items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t(translations.chat.placeholder, lang)}
            className="min-w-0 flex-1 rounded-lg border-0 bg-white/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent/50 sm:rounded-xl sm:px-4 sm:py-2.5"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-40 sm:h-10 sm:w-10 sm:rounded-xl"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

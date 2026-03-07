"use client"

import { ArrowRight, Leaf, TrendingUp, ShieldCheck } from "lucide-react"
import { AiChatWidget } from "./ai-chat-widget"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-0">
        {/* Left: Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-8 flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm">
            <Leaf className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Sustainability Consultancy
            </span>
          </div>

          <h1 className="mb-6 font-mono text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              Leading the{" "}
              <span className="relative inline-block">
                Circular
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent" aria-hidden="true" />
              </span>{" "}
              Revolution
            </span>
          </h1>

          <p className="mb-10 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            We help forward-thinking organizations transition to circular
            business models, reducing waste and maximizing value through
            data-driven sustainability strategies.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#audit"
              className="group flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Try Our Audit Tool
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center rounded-xl border border-primary-foreground/20 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-primary-foreground/10 pt-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="font-mono text-2xl font-bold text-primary-foreground sm:text-3xl">
                  200+
                </span>
              </div>
              <span className="mt-1 text-xs text-primary-foreground/50 sm:text-sm">
                Projects Delivered
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1.5">
                <Leaf className="h-4 w-4 text-accent" />
                <span className="font-mono text-2xl font-bold text-primary-foreground sm:text-3xl">
                  45%
                </span>
              </div>
              <span className="mt-1 text-xs text-primary-foreground/50 sm:text-sm">
                Avg. Waste Reduction
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="font-mono text-2xl font-bold text-primary-foreground sm:text-3xl">
                  98%
                </span>
              </div>
              <span className="mt-1 text-xs text-primary-foreground/50 sm:text-sm">
                Client Retention
              </span>
            </div>
          </div>
        </div>

        {/* Right: AI Chat Widget */}
        <div className="w-full max-w-md flex-shrink-0 lg:w-[420px]">
          <AiChatWidget />
        </div>
      </div>
    </section>
  )
}

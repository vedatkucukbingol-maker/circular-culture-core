"use client"

import { useState } from "react"
import {
  Calculator,
  Recycle,
  Trash2,
  RotateCcw,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Info,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

interface AuditResult {
  circularityScore: number
  gradeKey: "excellent" | "good" | "needsImprovement" | "critical"
  gradeColor: string
  recommendationKeys: ("recycledInput" | "totalWaste" | "recoveryRate" | "outstanding")[]
}

function calculateScore(
  recycledInput: number,
  totalWaste: number,
  recoveryRate: number
): AuditResult {
  const inputScore = Math.min(recycledInput, 100) * 0.35
  const wasteScore = Math.max(0, 100 - totalWaste) * 0.3
  const recoveryScore = Math.min(recoveryRate, 100) * 0.35
  const score = Math.round(inputScore + wasteScore + recoveryScore)

  let gradeKey: AuditResult["gradeKey"]
  let gradeColor: string
  const recommendationKeys: AuditResult["recommendationKeys"] = []

  if (score >= 80) {
    gradeKey = "excellent"
    gradeColor = "text-accent"
  } else if (score >= 60) {
    gradeKey = "good"
    gradeColor = "text-chart-2"
  } else if (score >= 40) {
    gradeKey = "needsImprovement"
    gradeColor = "text-yellow-500"
  } else {
    gradeKey = "critical"
    gradeColor = "text-destructive"
  }

  if (recycledInput < 50) recommendationKeys.push("recycledInput")
  if (totalWaste > 30) recommendationKeys.push("totalWaste")
  if (recoveryRate < 60) recommendationKeys.push("recoveryRate")
  if (recommendationKeys.length === 0) recommendationKeys.push("outstanding")

  return { circularityScore: score, gradeKey, gradeColor, recommendationKeys }
}

function ScoreRing({ score, size = 140 }: { score: number; size?: number }) {
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-border/40"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-accent transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-3xl font-bold text-foreground">
          {score}
        </span>
        <span className="text-xs text-muted-foreground">{"/100"}</span>
      </div>
    </div>
  )
}

export function AuditToolSection() {
  const { lang } = useLanguage()
  const [recycledInput, setRecycledInput] = useState("")
  const [totalWaste, setTotalWaste] = useState("")
  const [recoveryRate, setRecoveryRate] = useState("")
  const [result, setResult] = useState<AuditResult | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleCalculate = () => {
    const ri = parseFloat(recycledInput) || 0
    const tw = parseFloat(totalWaste) || 0
    const rr = parseFloat(recoveryRate) || 0
    setResult(calculateScore(ri, tw, rr))
    setHasSubmitted(true)
  }

  const handleReset = () => {
    setRecycledInput("")
    setTotalWaste("")
    setRecoveryRate("")
    setResult(null)
    setHasSubmitted(false)
  }

  return (
    <section id="audit" className="bg-secondary/30 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent sm:mb-4">
            {t(translations.audit.badge, lang)}
          </span>
          <h2 className="mb-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">{t(translations.audit.title, lang)}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {t(translations.audit.description, lang)}
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Input Form */}
          <div className="w-full rounded-xl border border-border/60 bg-card p-5 shadow-sm sm:rounded-2xl sm:p-8">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary sm:h-10 sm:w-10 sm:rounded-xl">
                <Calculator className="h-4 w-4 text-primary-foreground sm:h-5 sm:w-5" />
              </div>
              <h3 className="font-mono text-base font-semibold text-card-foreground sm:text-lg">
                {t(translations.audit.inputTitle, lang)}
              </h3>
            </div>

            <div className="flex w-full flex-col gap-5 sm:gap-6">
              {/* Recycled Input */}
              <div className="w-full">
                <label
                  htmlFor="recycled-input"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Recycle className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="flex-1">{t(translations.audit.recycledInput.label, lang)}</span>
                  <span className="group relative">
                    <Info className="h-3.5 w-3.5 cursor-help text-muted-foreground" />
                    <span className="invisible absolute bottom-full right-0 mb-2 w-48 rounded-lg bg-foreground px-3 py-2 text-xs text-background group-hover:visible sm:left-1/2 sm:right-auto sm:-translate-x-1/2">
                      {t(translations.audit.recycledInput.tooltip, lang)}
                    </span>
                  </span>
                </label>
                <input
                  id="recycled-input"
                  type="number"
                  min="0"
                  max="100"
                  value={recycledInput}
                  onChange={(e) => setRecycledInput(e.target.value)}
                  placeholder="e.g., 65"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 sm:rounded-xl"
                />
              </div>

              {/* Total Waste */}
              <div className="w-full">
                <label
                  htmlFor="total-waste"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Trash2 className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="flex-1">{t(translations.audit.totalWaste.label, lang)}</span>
                  <span className="group relative">
                    <Info className="h-3.5 w-3.5 cursor-help text-muted-foreground" />
                    <span className="invisible absolute bottom-full right-0 mb-2 w-48 rounded-lg bg-foreground px-3 py-2 text-xs text-background group-hover:visible sm:left-1/2 sm:right-auto sm:-translate-x-1/2">
                      {t(translations.audit.totalWaste.tooltip, lang)}
                    </span>
                  </span>
                </label>
                <input
                  id="total-waste"
                  type="number"
                  min="0"
                  max="100"
                  value={totalWaste}
                  onChange={(e) => setTotalWaste(e.target.value)}
                  placeholder="e.g., 20"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 sm:rounded-xl"
                />
              </div>

              {/* Recovery Rate */}
              <div className="w-full">
                <label
                  htmlFor="recovery-rate"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <RotateCcw className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="flex-1">{t(translations.audit.recoveryRate.label, lang)}</span>
                  <span className="group relative">
                    <Info className="h-3.5 w-3.5 cursor-help text-muted-foreground" />
                    <span className="invisible absolute bottom-full right-0 mb-2 w-48 rounded-lg bg-foreground px-3 py-2 text-xs text-background group-hover:visible sm:left-1/2 sm:right-auto sm:-translate-x-1/2">
                      {t(translations.audit.recoveryRate.tooltip, lang)}
                    </span>
                  </span>
                </label>
                <input
                  id="recovery-rate"
                  type="number"
                  min="0"
                  max="100"
                  value={recoveryRate}
                  onChange={(e) => setRecoveryRate(e.target.value)}
                  placeholder="e.g., 75"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 sm:rounded-xl"
                />
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleCalculate}
                  className="flex w-full flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 sm:rounded-xl sm:px-6 sm:py-3.5"
                >
                  <TrendingUp className="h-4 w-4" />
                  {t(translations.audit.calculate, lang)}
                </button>
                {hasSubmitted && (
                  <button
                    onClick={handleReset}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary sm:w-auto sm:rounded-xl sm:py-3.5"
                  >
                    <RotateCcw className="h-4 w-4" />
                    {t(translations.audit.reset, lang)}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="w-full rounded-xl border border-border/60 bg-card p-5 shadow-sm sm:rounded-2xl sm:p-8">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/15 sm:h-10 sm:w-10 sm:rounded-xl">
                <TrendingUp className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
              </div>
              <h3 className="font-mono text-base font-semibold text-card-foreground sm:text-lg">
                {t(translations.audit.results.title, lang)}
              </h3>
            </div>

            {result ? (
              <div className="flex flex-col items-center gap-6">
                <ScoreRing score={result.circularityScore} />

                <div className="text-center">
                  <span
                    className={`font-mono text-lg font-bold ${result.gradeColor}`}
                  >
                    {t(translations.audit.grades[result.gradeKey], lang)}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(translations.audit.results.grade, lang)}
                  </p>
                </div>

                <div className="w-full border-t border-border/40 pt-5">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    {t(translations.audit.results.recommendations, lang)}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {result.recommendationKeys.map((key, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        {result.circularityScore >= 80 ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        ) : (
                          <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-500" />
                        )}
                        {t(translations.audit.recommendationTexts[key], lang)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center sm:py-12">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary sm:h-16 sm:w-16 sm:rounded-2xl">
                  <Calculator className="h-6 w-6 text-muted-foreground/40 sm:h-8 sm:w-8" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {t(translations.audit.results.emptyTitle, lang)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  {t(translations.audit.results.emptySubtitle, lang)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

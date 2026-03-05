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

interface AuditResult {
  circularityScore: number
  grade: string
  gradeColor: string
  recommendations: string[]
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

  let grade: string
  let gradeColor: string
  const recommendations: string[] = []

  if (score >= 80) {
    grade = "Excellent"
    gradeColor = "text-accent"
  } else if (score >= 60) {
    grade = "Good"
    gradeColor = "text-chart-2"
  } else if (score >= 40) {
    grade = "Needs Improvement"
    gradeColor = "text-yellow-500"
  } else {
    grade = "Critical"
    gradeColor = "text-destructive"
  }

  if (recycledInput < 50)
    recommendations.push(
      "Increase recycled material input by sourcing from certified circular suppliers."
    )
  if (totalWaste > 30)
    recommendations.push(
      "Implement waste reduction programs focusing on production process optimization."
    )
  if (recoveryRate < 60)
    recommendations.push(
      "Improve material recovery through better sorting and recycling infrastructure."
    )
  if (recommendations.length === 0)
    recommendations.push(
      "Outstanding performance! Consider sharing your practices as an industry benchmark."
    )

  return { circularityScore: score, grade, gradeColor, recommendations }
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
    <section id="audit" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Free Tool
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Circularity Audit Tool</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Evaluate your organization&apos;s circular economy performance with
            our quick assessment tool. Enter your metrics and get instant
            insights.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Input Form */}
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-mono text-lg font-semibold text-card-foreground">
                Input Your Metrics
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {/* Recycled Input */}
              <div>
                <label
                  htmlFor="recycled-input"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Recycle className="h-4 w-4 text-primary" />
                  Recycled Input (%)
                  <span className="group relative ml-auto">
                    <Info className="h-3.5 w-3.5 cursor-help text-muted-foreground" />
                    <span className="invisible absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded-lg bg-foreground px-3 py-2 text-xs text-background group-hover:visible">
                      Percentage of recycled materials used in production
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
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* Total Waste */}
              <div>
                <label
                  htmlFor="total-waste"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Trash2 className="h-4 w-4 text-primary" />
                  Total Waste (%)
                  <span className="group relative ml-auto">
                    <Info className="h-3.5 w-3.5 cursor-help text-muted-foreground" />
                    <span className="invisible absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded-lg bg-foreground px-3 py-2 text-xs text-background group-hover:visible">
                      Percentage of materials that end up as waste
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
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* Recovery Rate */}
              <div>
                <label
                  htmlFor="recovery-rate"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <RotateCcw className="h-4 w-4 text-primary" />
                  Recovery Rate (%)
                  <span className="group relative ml-auto">
                    <Info className="h-3.5 w-3.5 cursor-help text-muted-foreground" />
                    <span className="invisible absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded-lg bg-foreground px-3 py-2 text-xs text-background group-hover:visible">
                      Percentage of waste recovered or recycled
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
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCalculate}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  <TrendingUp className="h-4 w-4" />
                  Calculate Score
                </button>
                {hasSubmitted && (
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3.5 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-mono text-lg font-semibold text-card-foreground">
                Audit Results
              </h3>
            </div>

            {result ? (
              <div className="flex flex-col items-center gap-6">
                <ScoreRing score={result.circularityScore} />

                <div className="text-center">
                  <span
                    className={`font-mono text-lg font-bold ${result.gradeColor}`}
                  >
                    {result.grade}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Circularity Performance Grade
                  </p>
                </div>

                <div className="w-full border-t border-border/40 pt-5">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Recommendations
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {result.recommendations.map((rec, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        {result.circularityScore >= 80 ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        ) : (
                          <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-500" />
                        )}
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                  <Calculator className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Enter your metrics and click calculate
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Your circularity score will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

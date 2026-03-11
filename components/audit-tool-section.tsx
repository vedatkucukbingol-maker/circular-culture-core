"use client"

import React, { useState } from "react"
import { 
  Calculator, 
  ChevronRight, 
  BarChart2, 
  Recycle, 
  Leaf, 
  AlertCircle,
  CheckCircle2,
  Info
} from "lucide-react"
import { useLanguage } from "../lib/language-context"
import { translations, t } from "../lib/translations"

interface AuditResult {
  score: number
  level: "Low" | "Medium" | "High" | "Expert"
  recommendations: string[]
}

export function AuditToolSection() {
  const { language } = useLanguage()
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [result, setResult] = useState<AuditResult | null>(null)

  const questions = [
    {
      id: "waste",
      text: language === "tr" ? "Atık yönetim stratejiniz var mı?" : "Do you have a waste management strategy?",
      options: [
        { text: language === "tr" ? "Hayır" : "No", value: 0 },
        { text: language === "tr" ? "Kısmen" : "Partially", value: 5 },
        { text: language === "tr" ? "Evet, kapsamlı" : "Yes, comprehensive", value: 10 }
      ]
    },
    {
      id: "energy",
      text: language === "tr" ? "Yenilenebilir enerji kullanıyor musunuz?" : "Do you use renewable energy?",
      options: [
        { text: language === "tr" ? "Hayır" : "No", value: 0 },
        { text: language === "tr" ? "Planlanıyor" : "Planned", value: 5 },
        { text: language === "tr" ? "Evet" : "Yes", value: 10 }
      ]
    }
  ]

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value })
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      calculateResult()
    }
  }

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
    setResult({
      score: totalScore,
      level: "Medium",
      recommendations: [
        language === "tr" ? "Atık ayrıştırmayı artırın." : "Increase waste segregation.",
        language === "tr" ? "Enerji verimliliği etüdü yapın." : "Conduct an energy efficiency audit."
      ]
    })
  }

  return (
    <section id="audit-tool" className="py-24 bg-emerald-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {language === "tr" ? "Hızlı Döngüsellik Analizi" : "Quick Circularity Audit"}
              </h2>
            </div>

            {!result ? (
              <div className="space-y-8">
                <div className="flex gap-2 mb-4">
                  {questions.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 flex-1 rounded-full ${i + 1 <= step ? 'bg-emerald-600' : 'bg-gray-200'}`}
                    />
                  ))}
                </div>
                
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-medium text-gray-800 mb-6">
                    {questions[step - 1].text}
                  </h3>
                  <div className="grid gap-4">
                    {questions[step - 1].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(questions[step - 1].id, option.value)}
                        className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left group"
                      >
                        <span className="font-medium text-gray-700 group-hover:text-emerald-700">{option.text}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-in zoom-in duration-500 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{language === "tr" ? "Analiz Tamamlandı" : "Audit Complete"}</h3>
                <p className="text-gray-600 mb-8">{language === "tr" ? "İşte ilk bulgularımız ve önerilerimiz:" : "Here are your initial findings:"}</p>
                
                <div className="grid gap-4 mb-8">
                  {result.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl text-left border border-gray-100">
                      <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{rec}</p>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {setResult(null); setStep(1); setAnswers({})}}
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  {language === "tr" ? "Testi Tekrarla" : "Restart Audit"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

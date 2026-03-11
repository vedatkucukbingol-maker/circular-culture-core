export const translations = {
  tr: {
    "hero.badge": "Sürdürülebilirlik Vizyonu",
    "hero.title": "Döngüsel Ekonomi ile Geleceği Tasarlayın",
    "hero.subtitle": "İşletmenizi sürdürülebilir modellemelerle dönüştürüyoruz.",
    "hero.cta": "Hemen Başlayın",
    "hero.secondaryCta": "Daha Fazla Bilgi"
  },
  en: {
    "hero.badge": "Sustainability Vision",
    "hero.title": "Design the Future with Circular Economy",
    "hero.subtitle": "We transform your business with sustainable modeling.",
    "hero.cta": "Get Started",
    "hero.secondaryCta": "Learn More"
  }
}

export type Language = "tr" | "en"

export function t(lang: Language, key: string): string {
  const dict = translations[lang] || translations["tr"]
  return (dict as any)[key] || key
}

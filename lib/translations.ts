export type Language = "EN" | "TR" | "DE" | "ES";

export const translations = {
  nav: {
    services: { TR: "Hizmetler", EN: "Services", DE: "Dienstleistungen", ES: "Servicios" },
    auditTool: { TR: "Denetim Aracı", EN: "Audit Tool", DE: "Audit-Tool", ES: "Herramienta de Auditoría" },
    about: { TR: "Hakkımızda", EN: "About", DE: "Über uns", ES: "Sobre Nosotros" },
    contact: { TR: "İletişim", EN: "Contact", DE: "Kontakt", ES: "Contacto" },
    getStarted: { TR: "Başlayın", EN: "Get Started", DE: "Loslegen", ES: "Empezar" }
  },
  hero: {
    badge: { TR: "Sürdürülebilir Gelecek", EN: "Sustainable Future", DE: "Nachhaltige Zukunft", ES: "Futuro Sostenible" },
    title1: { TR: "Geleceği", EN: "Redefining", DE: "Zukunft", ES: "Redefiniendo el" },
    titleHighlight: { TR: "Döngüsel Kültür", EN: "Circular Culture", DE: "Zirkuläre Kultur", ES: "Cultura Circular" },
    title2: { TR: "ile Yeniden İnşa Edin", EN: "Together", DE: "Neu Aufbauen", ES: "Futuro Juntos" },
    description: {
      TR: "Atıkları değere dönüştüren, kaynakları verimli kullanan ve kültürel dönüşümü tetikleyen çözümler.",
      EN: "Solutions that transform waste into value, optimize resources, and trigger cultural transformation.",
      DE: "Lösungen, die Abfall in Wert verwandeln.",
      ES: "Soluciones que transforman los residuos en valor."
    },
    ctaPrimary: { TR: "Hemen Başlayın", EN: "Get Started Now", DE: "Jetzt Starten", ES: "Empezar Ahora" },
    ctaSecondary: { TR: "Hizmetler", EN: "View Services", DE: "Dienste", ES: "Ver Servicios" },
    stats: {
      projects: { TR: "Proje", EN: "Projects", DE: "Projekte", ES: "Proyectos" },
      waste: { TR: "Atık Azaltma", EN: "Waste Reduction", DE: "Abfallreduzierung", ES: "Reducción" },
      retention: { TR: "Memnuniyet", EN: "Retention", DE: "Zufriedenheit", ES: "Satisfacción" }
    }
  },
  services: {
    badge: { TR: "Neler Yapıyoruz?", EN: "Our Expertise", DE: "Unsere Expertise", ES: "Nuestra Experiencia" },
    title: { TR: "Çözümlerimiz", EN: "Solutions", DE: "Lösungen", ES: "Soluciones" },
    description: { TR: "İşletmenizi döngüsel ekonomiye entegre ediyoruz.", EN: "Integrating your business into the circular economy.", DE: "Integration in die Kreislaufwirtschaft.", ES: "Integrando su empresa en la economía circular." },
    learnMore: { TR: "Detaylı Bilgi", EN: "Learn More", DE: "Mehr erfahren", ES: "Saber más" },
    items: {
      circularityAudits: { title: { TR: "Denetim", EN: "Audit", DE: "Audit", ES: "Auditoría" }, description: { TR: "Kaynak akış analizi.", EN: "Resource flow analysis.", DE: "Ressourcenflussanalyse.", ES: "Análisis de flujo." } },
      strategyDevelopment: { title: { TR: "Strateji", EN: "Strategy", DE: "Strategie", ES: "Estrategia" }, description: { TR: "İş modeli tasarımı.", EN: "Business model design.", DE: "Geschäftsmodell-Design.", ES: "Diseño de modelo." } },
      esgCompliance: { title: { TR: "ESG", EN: "ESG", DE: "ESG", ES: "ESG" }, description: { TR: "Standart uyumluluğu.", EN: "Compliance standards.", DE: "Compliance-Standards.", ES: "Estándares." } },
      greenSupplyChain: { title: { TR: "Tedarik", EN: "Supply Chain", DE: "Lieferkette", ES: "Cadena" }, description: { TR: "Yeşil süreçler.", EN: "Green processes.", DE: "Grüne Prozesse.", ES: "Procesos verdes." } }
    }
  },
  audit: {
    badge: { TR: "Ücretsiz Denetim", EN: "Free Audit", DE: "Kostenloses Audit", ES: "Auditoría Gratuita" },
    title: { TR: "Döngüsellik Skoru", EN: "Circularity Score", DE: "Zirkularitäts-Rechner", ES: "Puntuación de Circularidad" },
    description: { TR: "Döngüsellik seviyenizi anında ölçün.", EN: "Instantly measure your circularity level.", DE: "Messen Sie Ihr Zirkularitätsniveau.", ES: "Mida su nivel de circularidad." },
    inputTitle: { TR: "Veriler", EN: "Data", DE: "Daten", ES: "Datos" },
    calculate: { TR: "Hesapla", EN: "Calculate", DE: "Berechnen", ES: "Calcular" },
    reset: { TR: "Sıfırla", EN: "Reset", DE: "Zurücksetzen", ES: "Reiniciar" },
    recycledInput: { label: { TR: "Geri Kazanılmış Girdi", EN: "Recycled Input", DE: "Recycling-Anteil", ES: "Insumo Reciclado" }, tooltip: { TR: "Hammadde içindeki geri kazanım oranı.", EN: "Recycled rate in raw materials.", DE: "Anteil recycelter Materialien.", ES: "Tasa de reciclado." } },
    totalWaste: { label: { TR: "Toplam Atık", EN: "Total Waste", DE: "Abfallquote", ES: "Total de Residuos" }, tooltip: { TR: "Üretimdeki atık yüzdesi.", EN: "Percentage of waste.", DE: "Anteil der Abfälle.", ES: "Porcentaje de residuos." } },
    recoveryRate: { label: { TR: "Kazanım Oranı", EN: "Recovery Rate", DE: "Verwertungsquote", ES: "Tasa de Recuperación" }, tooltip: { TR: "Atıkların geri dönüşüm oranı.", EN: "Waste recycling rate.", DE: "Recyclinganteil des Abfalls.", ES: "Tasa de reciclaje." } },
    results: {
      title: { TR: "Sonuçlar", EN: "Results", DE: "Ergebnisse", ES: "Resultados" },
      grade: { TR: "Derece", EN: "Grade", DE: "Grad", ES: "Grado" },
      recommendations: { TR: "Öneriler", EN: "Recommendations", DE: "Empfehlungen", ES: "Recomendaciones" },
      emptyTitle: { TR: "Veri Bekleniyor", EN: "Awaiting Data", DE: "Warten auf Daten", ES: "Esperando Datos" },
      emptySubtitle: { TR: "Hesaplamak için değer girin.", EN: "Enter values to calculate.", DE: "Daten zur Berechnung eingeben.", ES: "Ingrese valores." }
    },
    grades: {
      excellent: { TR: "Mükemmel", EN: "Excellent", DE: "Exzellent", ES: "Excelente" },
      good: { TR: "İyi", EN: "Good", DE: "Gut", ES: "Bueno" },
      needsImprovement: { TR: "Geliştirilmeli", EN: "Needs Improvement", DE: "Verbesserungsfähig", ES: "Necesita Mejora" },
      critical: { TR: "Kritik", EN: "Critical", DE: "Kritisch", ES: "Crítico" }
    },
    recommendationTexts: {
      recycledInput: { TR: "Geri kazanılmış hammaddeyi artırın.", EN: "Increase recycled raw materials.", DE: "Mehr Recycling-Material.", ES: "Aumente insumos reciclados." },
      totalWaste: { TR: "Atığı kaynağında engelleyin.", EN: "Prevent waste at source.", DE: "Abfall an der Quelle vermeiden.", ES: "Evite residuos en origen." },
      recoveryRate: { TR: "Geri dönüşüm altyapısını kurun.", EN: "Setup recycling infrastructure.", DE: "Recycling-Infrastruktur aufbauen.", ES: "Instale infraestructura." },
      outstanding: { TR: "Harika performans!", EN: "Outstanding performance!", DE: "Hervorragend!", ES: "¡Rendimiento excelente!" }
    }
  },
  footer: {
    description: {
      TR: "Gelecek döngüseldir. Circular Culture, işletmenizi yarının ekonomisine hazırlayan kültürel ve teknik dönüşüm ortağınızdır.",
      EN: "The future is circular. Circular Culture is your cultural and technical transformation partner for tomorrow's economy.",
      DE: "Die Zukunft ist zirkulär. Ihr Partner für die Wirtschaft von morgen.",
      ES: "El futuro es circular. Su socio de transformación para la economía del mañana."
    },
    columns: {
      services: { TR: "Hizmetler", EN: "Services", DE: "Dienste", ES: "Servicios" },
      company: { TR: "Kurumsal", EN: "Company", DE: "Unternehmen", ES: "Empresa" },
      resources: { TR: "Kaynaklar", EN: "Resources", DE: "Ressourcen", ES: "Recursos" }
    },
    links: {
      circularityAudits: { TR: "Döngüsellik Denetimi", EN: "Circularity Audits", DE: "Audits", ES: "Auditorías" },
      strategyDevelopment: { TR: "Strateji Geliştirme", EN: "Strategy Development", DE: "Strategie", ES: "Estrategia" },
      esgCompliance: { TR: "ESG Uyumluluk", EN: "ESG Compliance", DE: "ESG", ES: "ESG" },
      greenSupplyChain: { TR: "Yeşil Tedarik", EN: "Green Supply Chain", DE: "Lieferkette", ES: "Cadena" },
      aboutUs: { TR: "Hakkımızda", EN: "About Us", DE: "Über uns", ES: "Sobre Nosotros" },
      ourTeam: { TR: "Ekibimiz", EN: "Our Team", DE: "Team", ES: "Equipo" },
      careers: { TR: "Kariyer", EN: "Careers", DE: "Karriere", ES: "Carreras" },
      blog: { TR: "Blog", EN: "Blog", DE: "Blog", ES: "Blog" },
      caseStudies: { TR: "Vaka Analizleri", EN: "Case Studies", DE: "Fallstudien", ES: "Casos de Estudio" },
      whitepapers: { TR: "Teknik Raporlar", EN: "Whitepapers", DE: "Whitepapers", ES: "Informes" },
      webinars: { TR: "Webinerler", EN: "Webinars", DE: "Webinare", ES: "Webinars" },
      newsletter: { TR: "Bülten", EN: "Newsletter", DE: "Newsletter", ES: "Boletín" }
    },
    legal: {
      copyright: { TR: "© 2026 Circular Culture. Tüm hakları saklıdır.", EN: "© 2026 Circular Culture. All rights reserved.", DE: "© 2026 Alle Rechte vorbehalten.", ES: "© 2026 Todos los derechos reservados." },
      privacy: { TR: "Gizlilik", EN: "Privacy", DE: "Datenschutz", ES: "Privacidad" },
      terms: { TR: "Şartlar", EN: "Terms", DE: "AGB", ES: "Términos" },
      cookies: { TR: "Çerezler", EN: "Cookies", DE: "Cookies", ES: "Cookies" }
    }
  }
};

export const t = (obj: any, lang: Language) => {
  if (!obj) return "";
  return obj[lang] || obj["EN"];
};

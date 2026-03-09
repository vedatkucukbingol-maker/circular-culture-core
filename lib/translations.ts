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
    title: { TR: "Döngüsellik Skoru Hesaplayıcı", EN: "Circularity Score Calculator", DE: "Zirkularitäts-Rechner", ES: "Calculadora de Puntuación" },
    description: { TR: "Üretim verilerinizi girerek döngüsellik seviyenizi anında ölçün.", EN: "Instantly measure your circularity level by entering your production data.", DE: "Messen Sie Ihr Zirkularitätsniveau sofort.", ES: "Mida su nivel de circularidad al instante." },
    inputTitle: { TR: "Üretim Verileri", EN: "Production Data", DE: "Produktionsdaten", ES: "Datos de Producción" },
    calculate: { TR: "Hesapla", EN: "Calculate", DE: "Berechnen", ES: "Calcular" },
    reset: { TR: "Sıfırla", EN: "Reset", DE: "Zurücksetzen", ES: "Reiniciar" },
    recycledInput: {
      label: { TR: "Geri Dönüştürülmüş Girdi (%)", EN: "Recycled Input (%)", DE: "Recycling-Anteil (%)", ES: "Insumo Reciclado (%)" },
      tooltip: { TR: "Hammadde içindeki geri dönüştürülmüş malzeme oranı.", EN: "Percentage of recycled materials in raw materials.", DE: "Anteil recycelter Materialien.", ES: "Porcentaje de materiales reciclados." }
    },
    totalWaste: {
      label: { TR: "Toplam Atık Oranı (%)", EN: "Total Waste Rate (%)", DE: "Abfallquote (%)", ES: "Tasa de Residuos (%)" },
      tooltip: { TR: "Üretim sürecinde oluşan atık yüzdesi.", EN: "Percentage of waste generated during production.", DE: "Anteil der Abfälle.", ES: "Porcentaje de residuos generados." }
    },
    recoveryRate: {
      label: { TR: "Geri Kazanım Oranı (%)", EN: "Recovery Rate (%)", DE: "Verwertungsquote (%)", ES: "Tasa de Recuperación (%)" },
      tooltip: { TR: "Atıkların ne kadarının geri dönüştürüldüğü.", EN: "Percentage of waste that is recycled.", DE: "Recyclinganteil des Abfalls.", ES: "Porcentaje de residuos reciclados." }
    },
    results: {
      title: { TR: "Denetim Sonuçları", EN: "Audit Results", DE: "Audit-Ergebnisse", ES: "Resultados del Audit" },
      grade: { TR: "Döngüsellik Derecesi", EN: "Circularity Grade", DE: "Zirkularitäts-Grad", ES: "Grado de Circularidad" },
      recommendations: { TR: "Kritik Öneriler", EN: "Critical Recommendations", DE: "Empfehlungen", ES: "Recomendaciones" },
      emptyTitle: { TR: "Sonuç Hazır Değil", EN: "No Results Yet", DE: "Noch keine Ergebnisse", ES: "Sin resultados aún" },
      emptySubtitle: { TR: "Hesaplamak için verileri girin.", EN: "Enter data to calculate.", DE: "Daten zur Berechnung eingeben.", ES: "Ingrese datos para calcular." }
    },
    grades: {
      excellent: { TR: "Mükemmel", EN: "Excellent", DE: "Exzellent", ES: "Excelente" },
      good: { TR: "İyi", EN: "Good", DE: "Gut", ES: "Bueno" },
      needsImprovement: { TR: "Geliştirilmeli", EN: "Needs Improvement", DE: "Verbesserungsfähig", ES: "Necesita Mejora" },
      critical: { TR: "Kritik", EN: "Critical", DE: "Kritisch", ES: "Crítico" }
    },
    recommendationTexts: {
      recycledInput: { TR: "Hammadde tedariğinde geri dönüştürülmüş malzeme oranını artırın.", EN: "Increase the proportion of recycled materials in procurement.", DE: "Erhöhen Sie den Anteil an recycelten Materialien.", ES: "Aumente la proporción de materiales reciclados." },
      totalWaste: { TR: "Yalın üretim teknikleriyle atık oluşumunu kaynağında engelleyin.", EN: "Prevent waste generation at source with lean production.", DE: "Vermeiden Sie Abfälle durch Lean Production.", ES: "Evite la generación de residuos con producción ajustada." },
      recoveryRate: { TR: "Atık ayrıştırma ve geri kazanım altyapınızı güçlendirin.", EN: "Strengthen your waste sorting and recovery infrastructure.", DE: "Stärken Sie Ihre Abfallsortierung.", ES: "Fortalezca su infraestructura de clasificación." },
      outstanding: { TR: "Sektör lideri performans! Döngüsel modelinizi ölçeklendirmeye odaklanın.", EN: "Industry-leading performance! Focus on scaling your model.", DE: "Branchenführend! Skalieren Sie Ihr Modell.", ES: "¡Rendimiento líder! Enfoquese en escalar su modelo." }
    }
  }
};

export const t = (obj: any, lang: Language) => {
  if (!obj) return "";
  return obj[lang] || obj["EN"];
};

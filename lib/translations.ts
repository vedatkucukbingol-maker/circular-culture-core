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
      DE: "Lösungen, die Abfall in Wert verwandeln ve den kulturellen Wandel anstoßen.",
      ES: "Soluciones que transforman los residuos en valor e impulsan la transformación cultural."
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
    title: { TR: "Döngüsellik Çözümlerimiz", EN: "Our Circular Solutions", DE: "Unsere Lösungen", ES: "Nuestras Soluciones" },
    description: {
      TR: "İşletmenizi döngüsel ekonomiye entegre etmek için uçtan uca stratejik danışmanlık sağlıyoruz.",
      EN: "We provide end-to-end strategic consultancy to integrate your business into the circular economy.",
      DE: "Wir bieten strategische Beratung zur Integration Ihres Unternehmens in die Kreislaufwirtschaft.",
      ES: "Brindamos consultoría estratégica de extremo a extremo para integrar su empresa en la economía circular."
    },
    learnMore: { TR: "Detaylı Bilgi", EN: "Learn More", DE: "Mehr erfahren", ES: "Saber más" },
    items: {
      circularityAudits: {
        title: { TR: "Döngüsellik Denetimi", EN: "Circularity Audits", DE: "Zirkularitäts-Audits", ES: "Auditorías de Circularidad" },
        description: { TR: "Mevcut kaynak akışınızı analiz ediyor ve verimlilik noktalarını belirliyoruz.", EN: "Analyzing your current resource flows and identifying efficiency points.", DE: "Analyse Ihrer Ressourcenströme und Identifizierung von Effizienzpunkten.", ES: "Analizando sus flujos de recursos e identificando puntos de eficiencia." }
      },
      strategyDevelopment: {
        title: { TR: "Strateji Geliştirme", EN: "Strategy Development", DE: "Strategieentwicklung", ES: "Desarrollo de Estrategia" },
        description: { TR: "İş modelinizi döngüsel ilkelere göre yeniden tasarlıyoruz.", EN: "Redesigning your business model according to circular principles.", DE: "Neugestaltung Ihres Geschäftsmodells nach zirkulären Prinzipien.", ES: "Rediseñando su modelo de negocio según principios circulares." }
      },
      esgCompliance: {
        title: { TR: "ESG Uyumluluk", EN: "ESG Compliance", DE: "ESG-Konformität", ES: "Cumplimiento ESG" },
        description: { TR: "Çevresel ve sosyal yönetişim standartlarına tam uyum sağlıyoruz.", EN: "Ensuring full compliance with environmental and social governance standards.", DE: "Gewährleistung der vollen Konformität mit ESG-Standards.", ES: "Asegurando el cumplimiento total de los estándares ESG." }
      },
      greenSupplyChain: {
        title: { TR: "Yeşil Tedarik Zinciri", EN: "Green Supply Chain", DE: "Grüne Lieferkette", ES: "Cadena de Suministro Verde" },
        description: { TR: "Tedarik süreçlerinizi sürdürülebilir ve şeffaf hale getiriyoruz.", EN: "Making your procurement processes sustainable and transparent.", DE: "Nachhaltige und transparente Gestaltung Ihrer Beschaffungsprozesse.", ES: "Haciendo que sus procesos de adquisición sean sostenibles y transparentes." }
      }
    }
  }
};

export const t = (obj: any, lang: Language) => {
  if (!obj) return "";
  return obj[lang] || obj["EN"];
};

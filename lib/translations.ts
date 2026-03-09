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
    badge: {
      TR: "Sürdürülebilir Gelecek",
      EN: "Sustainable Future",
      DE: "Nachhaltige Zukunft",
      ES: "Futuro Sostenible"
    },
    title1: {
      TR: "Geleceği",
      EN: "Redefining",
      DE: "Zukunft",
      ES: "Redefiniendo el"
    },
    titleHighlight: {
      TR: "Döngüsel Kültür",
      EN: "Circular Culture",
      DE: "Zirkuläre Kultur",
      ES: "Cultura Circular"
    },
    title2: {
      TR: "ile Yeniden İnşa Edin",
      EN: "Together",
      DE: "Neu Aufbauen",
      ES: "Futuro Juntos"
    },
    description: {
      TR: "Atıkları değere dönüştüren, kaynakları verimli kullanan ve kültürel dönüşümü tetikleyen yeni nesil döngüsel ekonomi çözümleri.",
      EN: "Next-generation circular economy solutions that transform waste into value, optimize resources, and trigger cultural transformation.",
      DE: "Kreislaufwirtschaftslösungen der nächsten Generation, die Abfall in Wert verwandeln und den kulturellen Wandel anstoßen.",
      ES: "Soluciones de economía circular de próxima generación que transforman los residuos en valor e impulsan la transformación cultural."
    },
    ctaPrimary: {
      TR: "Hemen Başlayın",
      EN: "Get Started Now",
      DE: "Jetzt Starten",
      ES: "Empezar Ahora"
    },
    ctaSecondary: {
      TR: "Hizmetlerimizi İnceleyin",
      EN: "View Our Services",
      DE: "Unsere Dienste",
      ES: "Ver Servicios"
    },
    stats: {
      projects: { TR: "Tamamlanan Proje", EN: "Projects Completed", DE: "Projekte", ES: "Proyectos" },
      waste: { TR: "Atık Azaltma", EN: "Waste Reduction", DE: "Abfallreduzierung", ES: "Reducción de Residuos" },
      retention: { TR: "Müşteri Memnuniyeti", EN: "Client Retention", DE: "Kundenzufriedenheit", ES: "Satisfacción" }
    }
  }
};

export const t = (obj: any, lang: Language) => {
  if (!obj) return "";
  return obj[lang] || obj["EN"];
};

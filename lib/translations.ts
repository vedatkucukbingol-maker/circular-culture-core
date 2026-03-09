// 1. Dil tipini tanımlıyoruz (Navbar ile uyumlu olması için)
export type Language = "EN" | "TR" | "DE" | "ES";

// 2. Çeviri sözlüğümüz
export const translations = {
  nav: {
    services: {
      TR: "Hizmetler",
      EN: "Services",
      DE: "Dienstleistungen",
      ES: "Servicios",
    },
    auditTool: {
      TR: "Denetim Aracı",
      EN: "Audit Tool",
      DE: "Audit-Tool",
      ES: "Herramienta de Auditoría",
    },
    about: {
      TR: "Hakkımızda",
      EN: "About",
      DE: "Über uns",
      ES: "Sobre Nosotros",
    },
    contact: {
      TR: "İletişim",
      EN: "Contact",
      DE: "Kontakt",
      ES: "Contacto",
    },
    getStarted: {
      TR: "Başlayın",
      EN: "Get Started",
      DE: "Loslegen",
      ES: "Empezar",
    }
  },
  // İhtiyaç duydukça buraya hero, footer gibi bölümler ekleyebilirsin
};

// 3. Yardımcı "t" fonksiyonu (Navbar'ın kullandığı sihirli araç)
export const t = (obj: any, lang: Language) => {
  return obj[lang] || obj["EN"]; // Eğer seçili dilde karşılık yoksa İngilizceyi getir
};

export type Language = "EN" | "TR" | "DE" | "ES"

export const translations = {
  // Navbar
  nav: {
    services: {
      EN: "Services",
      TR: "Hizmetler",
      DE: "Leistungen",
      ES: "Servicios",
    },
    auditTool: {
      EN: "Audit Tool",
      TR: "Denetim Aracı",
      DE: "Audit-Tool",
      ES: "Herramienta de Auditoría",
    },
    about: {
      EN: "About",
      TR: "Hakkımızda",
      DE: "Über uns",
      ES: "Nosotros",
    },
    contact: {
      EN: "Contact",
      TR: "İletişim",
      DE: "Kontakt",
      ES: "Contacto",
    },
    getStarted: {
      EN: "Get Started",
      TR: "Başla",
      DE: "Loslegen",
      ES: "Comenzar",
    },
  },

  // Hero Section
  hero: {
    badge: {
      EN: "Sustainability Consultancy",
      TR: "Sürdürülebilirlik Danışmanlığı",
      DE: "Nachhaltigkeitsberatung",
      ES: "Consultoría de Sostenibilidad",
    },
    title1: {
      EN: "Leading the",
      TR: "Döngüsel",
      DE: "Die",
      ES: "Liderando la",
    },
    titleHighlight: {
      EN: "Circular",
      TR: "Ekonomide",
      DE: "Kreislauf",
      ES: "Revolución",
    },
    title2: {
      EN: "Revolution",
      TR: "Öncü",
      DE: "revolution anführen",
      ES: "Circular",
    },
    description: {
      EN: "We help forward-thinking organizations transition to circular business models, reducing waste and maximizing value through data-driven sustainability strategies.",
      TR: "İleri görüşlü kuruluşların döngüsel iş modellerine geçişine yardımcı oluyoruz; veri odaklı sürdürülebilirlik stratejileriyle atıkları azaltıyor ve değeri maksimize ediyoruz.",
      DE: "Wir helfen zukunftsorientierten Organisationen beim Übergang zu zirkulären Geschäftsmodellen, reduzieren Abfälle und maximieren den Wert durch datengesteuerte Nachhaltigkeitsstrategien.",
      ES: "Ayudamos a organizaciones visionarias a transitar hacia modelos de negocio circulares, reduciendo residuos y maximizando el valor a través de estrategias de sostenibilidad basadas en datos.",
    },
    ctaPrimary: {
      EN: "Try Our Audit Tool",
      TR: "Denetim Aracını Dene",
      DE: "Audit-Tool testen",
      ES: "Probar Herramienta",
    },
    ctaSecondary: {
      EN: "Learn More",
      TR: "Daha Fazla",
      DE: "Mehr erfahren",
      ES: "Saber Más",
    },
    stats: {
      projects: {
        EN: "Projects Delivered",
        TR: "Tamamlanan Proje",
        DE: "Projekte geliefert",
        ES: "Proyectos Entregados",
      },
      waste: {
        EN: "Waste Reduction",
        TR: "Atık Azaltma",
        DE: "Abfallreduzierung",
        ES: "Reducción Residuos",
      },
      retention: {
        EN: "Client Retention",
        TR: "Müşteri Sadakati",
        DE: "Kundenbindung",
        ES: "Retención Clientes",
      },
    },
  },

  // AI Chat Widget
  chat: {
    title: {
      EN: "CircularAI Assistant",
      TR: "CircularAI Asistan",
      DE: "CircularAI Assistent",
      ES: "Asistente CircularAI",
    },
    status: {
      EN: "Always online",
      TR: "Her zaman çevrimiçi",
      DE: "Immer online",
      ES: "Siempre en línea",
    },
    placeholder: {
      EN: "Ask about sustainability...",
      TR: "Sürdürülebilirlik hakkında sorun...",
      DE: "Fragen Sie zur Nachhaltigkeit...",
      ES: "Pregunte sobre sostenibilidad...",
    },
    greeting: {
      EN: "Hello! I'm your Circular Culture AI assistant. Ask me anything about sustainability, circular economy, or how we can help your organization.",
      TR: "Merhaba! Ben Circular Culture yapay zeka asistanınızım. Sürdürülebilirlik, döngüsel ekonomi veya kuruluşunuza nasıl yardımcı olabileceğimiz hakkında her şeyi sorabilirsiniz.",
      DE: "Hallo! Ich bin Ihr Circular Culture KI-Assistent. Fragen Sie mich alles über Nachhaltigkeit, Kreislaufwirtschaft oder wie wir Ihrer Organisation helfen können.",
      ES: "¡Hola! Soy tu asistente de IA de Circular Culture. Pregúntame sobre sostenibilidad, economía circular o cómo podemos ayudar a tu organización.",
    },
  },

  // Services Section
  services: {
    badge: {
      EN: "Our Services",
      TR: "Hizmetlerimiz",
      DE: "Unsere Leistungen",
      ES: "Nuestros Servicios",
    },
    title: {
      EN: "Transforming business through circularity",
      TR: "Döngüsellik ile iş dünyasını dönüştürmek",
      DE: "Geschäftstransformation durch Kreislaufwirtschaft",
      ES: "Transformando negocios a través de la circularidad",
    },
    description: {
      EN: "From audits to implementation, we provide end-to-end consultancy to help your organization embrace the circular economy.",
      TR: "Denetimlerden uygulamaya kadar, kuruluşunuzun döngüsel ekonomiyi benimsemesine yardımcı olmak için uçtan uca danışmanlık sağlıyoruz.",
      DE: "Von Audits bis zur Implementierung bieten wir End-to-End-Beratung, um Ihrer Organisation beim Übergang zur Kreislaufwirtschaft zu helfen.",
      ES: "Desde auditorías hasta implementación, ofrecemos consultoría integral para ayudar a su organización a adoptar la economía circular.",
    },
    learnMore: {
      EN: "Learn more",
      TR: "Daha fazla",
      DE: "Mehr erfahren",
      ES: "Saber más",
    },
    items: {
      circularityAudits: {
        title: {
          EN: "Circularity Audits",
          TR: "Döngüsellik Denetimleri",
          DE: "Kreislauf-Audits",
          ES: "Auditorías de Circularidad",
        },
        description: {
          EN: "Comprehensive assessment of your current operations, identifying opportunities for circular transformation across your value chain.",
          TR: "Mevcut operasyonlarınızın kapsamlı değerlendirmesi, değer zinciriniz genelinde döngüsel dönüşüm fırsatlarının belirlenmesi.",
          DE: "Umfassende Bewertung Ihrer aktuellen Abläufe und Identifizierung von Möglichkeiten für zirkuläre Transformation in Ihrer Wertschöpfungskette.",
          ES: "Evaluación integral de sus operaciones actuales, identificando oportunidades de transformación circular en toda su cadena de valor.",
        },
      },
      strategyDevelopment: {
        title: {
          EN: "Strategy Development",
          TR: "Strateji Geliştirme",
          DE: "Strategieentwicklung",
          ES: "Desarrollo de Estrategia",
        },
        description: {
          EN: "Data-driven sustainability strategies tailored to your industry, with clear KPIs and actionable implementation roadmaps.",
          TR: "Sektörünüze özel veri odaklı sürdürülebilirlik stratejileri, net KPI'lar ve uygulanabilir yol haritaları ile.",
          DE: "Datengesteuerte Nachhaltigkeitsstrategien, auf Ihre Branche zugeschnitten, mit klaren KPIs und umsetzbaren Implementierungsplänen.",
          ES: "Estrategias de sostenibilidad basadas en datos adaptadas a su industria, con KPIs claros y hojas de ruta implementables.",
        },
      },
      esgCompliance: {
        title: {
          EN: "ESG Compliance",
          TR: "ESG Uyumluluğu",
          DE: "ESG-Compliance",
          ES: "Cumplimiento ESG",
        },
        description: {
          EN: "Navigate the complex landscape of ESG regulations and reporting frameworks with confidence and accuracy.",
          TR: "ESG düzenlemeleri ve raporlama çerçevelerinin karmaşık ortamında güvenle ve doğrulukla yol alın.",
          DE: "Navigieren Sie sicher und präzise durch die komplexe Landschaft der ESG-Vorschriften und Berichtsrahmen.",
          ES: "Navegue con confianza y precisión por el complejo panorama de regulaciones ESG y marcos de informes.",
        },
      },
      greenSupplyChain: {
        title: {
          EN: "Green Supply Chain",
          TR: "Yeşil Tedarik Zinciri",
          DE: "Grüne Lieferkette",
          ES: "Cadena Verde",
        },
        description: {
          EN: "Optimize your supply chain for sustainability, reducing environmental impact while improving operational efficiency.",
          TR: "Tedarik zincirinizi sürdürülebilirlik için optimize edin, operasyonel verimliliği artırırken çevresel etkiyi azaltın.",
          DE: "Optimieren Sie Ihre Lieferkette für Nachhaltigkeit, reduzieren Sie Umweltauswirkungen und verbessern Sie die Betriebseffizienz.",
          ES: "Optimice su cadena de suministro para la sostenibilidad, reduciendo el impacto ambiental mientras mejora la eficiencia operativa.",
        },
      },
    },
  },

  // Audit Tool Section
  audit: {
    badge: {
      EN: "Free Tool",
      TR: "Ücretsiz Araç",
      DE: "Kostenloses Tool",
      ES: "Herramienta Gratuita",
    },
    title: {
      EN: "Circularity Audit Tool",
      TR: "Döngüsellik Denetim Aracı",
      DE: "Kreislauf-Audit-Tool",
      ES: "Herramienta de Auditoría Circular",
    },
    description: {
      EN: "Evaluate your organization's circular economy performance with our quick assessment tool. Enter your metrics and get instant insights.",
      TR: "Hızlı değerlendirme aracımızla kuruluşunuzun döngüsel ekonomi performansını değerlendirin. Metriklerinizi girin ve anında içgörüler alın.",
      DE: "Bewerten Sie die Kreislaufwirtschaftsleistung Ihrer Organisation mit unserem schnellen Bewertungstool. Geben Sie Ihre Metriken ein und erhalten Sie sofortige Einblicke.",
      ES: "Evalúe el rendimiento de economía circular de su organización con nuestra herramienta de evaluación rápida. Ingrese sus métricas y obtenga información instantánea.",
    },
    inputTitle: {
      EN: "Input Your Metrics",
      TR: "Metriklerinizi Girin",
      DE: "Geben Sie Ihre Metriken ein",
      ES: "Ingrese Sus Métricas",
    },
    recycledInput: {
      label: {
        EN: "Recycled Input (%)",
        TR: "Geri Dönüşüm Girdisi (%)",
        DE: "Recycling-Input (%)",
        ES: "Entrada Reciclada (%)",
      },
      tooltip: {
        EN: "Percentage of recycled materials used in production",
        TR: "Üretimde kullanılan geri dönüştürülmüş malzeme yüzdesi",
        DE: "Prozentsatz der in der Produktion verwendeten recycelten Materialien",
        ES: "Porcentaje de materiales reciclados utilizados en la producción",
      },
    },
    totalWaste: {
      label: {
        EN: "Total Waste (%)",
        TR: "Toplam Atık (%)",
        DE: "Gesamtabfall (%)",
        ES: "Residuos Totales (%)",
      },
      tooltip: {
        EN: "Percentage of materials that end up as waste",
        TR: "Atık olarak sonuçlanan malzeme yüzdesi",
        DE: "Prozentsatz der Materialien, die als Abfall enden",
        ES: "Porcentaje de materiales que terminan como residuos",
      },
    },
    recoveryRate: {
      label: {
        EN: "Recovery Rate (%)",
        TR: "Geri Kazanım Oranı (%)",
        DE: "Rückgewinnungsrate (%)",
        ES: "Tasa de Recuperación (%)",
      },
      tooltip: {
        EN: "Percentage of waste recovered or recycled",
        TR: "Geri kazanılan veya geri dönüştürülen atık yüzdesi",
        DE: "Prozentsatz des zurückgewonnenen oder recycelten Abfalls",
        ES: "Porcentaje de residuos recuperados o reciclados",
      },
    },
    calculate: {
      EN: "Calculate Score",
      TR: "Puanı Hesapla",
      DE: "Punktzahl berechnen",
      ES: "Calcular Puntuación",
    },
    reset: {
      EN: "Reset",
      TR: "Sıfırla",
      DE: "Zurücksetzen",
      ES: "Reiniciar",
    },
    results: {
      title: {
        EN: "Audit Results",
        TR: "Denetim Sonuçları",
        DE: "Audit-Ergebnisse",
        ES: "Resultados de Auditoría",
      },
      grade: {
        EN: "Circularity Performance Grade",
        TR: "Döngüsellik Performans Notu",
        DE: "Kreislaufwirtschafts-Leistungsgrad",
        ES: "Calificación de Rendimiento Circular",
      },
      recommendations: {
        EN: "Recommendations",
        TR: "Öneriler",
        DE: "Empfehlungen",
        ES: "Recomendaciones",
      },
      emptyTitle: {
        EN: "Enter your metrics and click calculate",
        TR: "Metriklerinizi girin ve hesapla'ya tıklayın",
        DE: "Geben Sie Ihre Metriken ein und klicken Sie auf Berechnen",
        ES: "Ingrese sus métricas y haga clic en calcular",
      },
      emptySubtitle: {
        EN: "Your circularity score will appear here",
        TR: "Döngüsellik puanınız burada görünecek",
        DE: "Ihre Kreislaufwirtschaftspunktzahl erscheint hier",
        ES: "Su puntuación de circularidad aparecerá aquí",
      },
    },
    grades: {
      excellent: {
        EN: "Excellent",
        TR: "Mükemmel",
        DE: "Ausgezeichnet",
        ES: "Excelente",
      },
      good: {
        EN: "Good",
        TR: "İyi",
        DE: "Gut",
        ES: "Bueno",
      },
      needsImprovement: {
        EN: "Needs Improvement",
        TR: "İyileştirme Gerekli",
        DE: "Verbesserungsbedarf",
        ES: "Necesita Mejora",
      },
      critical: {
        EN: "Critical",
        TR: "Kritik",
        DE: "Kritisch",
        ES: "Crítico",
      },
    },
    recommendationTexts: {
      recycledInput: {
        EN: "Increase recycled material input by sourcing from certified circular suppliers.",
        TR: "Sertifikalı döngüsel tedarikçilerden temin ederek geri dönüştürülmüş malzeme girdisini artırın.",
        DE: "Erhöhen Sie den Recycling-Materialinput durch Beschaffung von zertifizierten Kreislauflieferanten.",
        ES: "Aumente la entrada de material reciclado adquiriendo de proveedores circulares certificados.",
      },
      totalWaste: {
        EN: "Implement waste reduction programs focusing on production process optimization.",
        TR: "Üretim süreç optimizasyonuna odaklanan atık azaltma programları uygulayın.",
        DE: "Implementieren Sie Abfallreduzierungsprogramme mit Fokus auf Produktionsprozessoptimierung.",
        ES: "Implemente programas de reducción de residuos enfocados en la optimización del proceso de producción.",
      },
      recoveryRate: {
        EN: "Improve material recovery through better sorting and recycling infrastructure.",
        TR: "Daha iyi ayırma ve geri dönüşüm altyapısı ile malzeme geri kazanımını iyileştirin.",
        DE: "Verbessern Sie die Materialrückgewinnung durch bessere Sortier- und Recyclinginfrastruktur.",
        ES: "Mejore la recuperación de materiales mediante una mejor infraestructura de clasificación y reciclaje.",
      },
      outstanding: {
        EN: "Outstanding performance! Consider sharing your practices as an industry benchmark.",
        TR: "Olağanüstü performans! Uygulamalarınızı sektör standardı olarak paylaşmayı düşünün.",
        DE: "Hervorragende Leistung! Erwägen Sie, Ihre Praktiken als Branchenmaßstab zu teilen.",
        ES: "¡Rendimiento excepcional! Considere compartir sus prácticas como referencia del sector.",
      },
    },
  },

  // Footer
  footer: {
    description: {
      EN: "Helping organizations transition to circular business models for a sustainable future. Based in Zurich, working globally.",
      TR: "Sürdürülebilir bir gelecek için kuruluşların döngüsel iş modellerine geçişine yardımcı oluyoruz. Merkez: Zürih, küresel çalışıyoruz.",
      DE: "Wir helfen Organisationen beim Übergang zu zirkulären Geschäftsmodellen für eine nachhaltige Zukunft. Mit Sitz in Zürich, weltweit tätig.",
      ES: "Ayudando a organizaciones a transitar hacia modelos de negocio circulares para un futuro sostenible. Con sede en Zúrich, trabajando globalmente.",
    },
    columns: {
      services: {
        EN: "Services",
        TR: "Hizmetler",
        DE: "Leistungen",
        ES: "Servicios",
      },
      company: {
        EN: "Company",
        TR: "Şirket",
        DE: "Unternehmen",
        ES: "Empresa",
      },
      resources: {
        EN: "Resources",
        TR: "Kaynaklar",
        DE: "Ressourcen",
        ES: "Recursos",
      },
    },
    links: {
      circularityAudits: {
        EN: "Circularity Audits",
        TR: "Döngüsellik Denetimleri",
        DE: "Kreislauf-Audits",
        ES: "Auditorías de Circularidad",
      },
      strategyDevelopment: {
        EN: "Strategy Development",
        TR: "Strateji Geliştirme",
        DE: "Strategieentwicklung",
        ES: "Desarrollo de Estrategia",
      },
      esgCompliance: {
        EN: "ESG Compliance",
        TR: "ESG Uyumluluğu",
        DE: "ESG-Compliance",
        ES: "Cumplimiento ESG",
      },
      greenSupplyChain: {
        EN: "Green Supply Chain",
        TR: "Yeşil Tedarik Zinciri",
        DE: "Grüne Lieferkette",
        ES: "Cadena Verde",
      },
      aboutUs: {
        EN: "About Us",
        TR: "Hakkımızda",
        DE: "Über uns",
        ES: "Nosotros",
      },
      ourTeam: {
        EN: "Our Team",
        TR: "Ekibimiz",
        DE: "Unser Team",
        ES: "Nuestro Equipo",
      },
      careers: {
        EN: "Careers",
        TR: "Kariyer",
        DE: "Karriere",
        ES: "Empleos",
      },
      blog: {
        EN: "Blog",
        TR: "Blog",
        DE: "Blog",
        ES: "Blog",
      },
      caseStudies: {
        EN: "Case Studies",
        TR: "Vaka Çalışmaları",
        DE: "Fallstudien",
        ES: "Casos de Estudio",
      },
      whitepapers: {
        EN: "Whitepapers",
        TR: "Teknik Raporlar",
        DE: "Whitepapers",
        ES: "Documentos Técnicos",
      },
      webinars: {
        EN: "Webinars",
        TR: "Web Seminerleri",
        DE: "Webinare",
        ES: "Seminarios Web",
      },
      newsletter: {
        EN: "Newsletter",
        TR: "Bülten",
        DE: "Newsletter",
        ES: "Boletín",
      },
    },
    legal: {
      copyright: {
        EN: "2024 Circular Culture. All rights reserved.",
        TR: "2024 Circular Culture. Tüm hakları saklıdır.",
        DE: "2024 Circular Culture. Alle Rechte vorbehalten.",
        ES: "2024 Circular Culture. Todos los derechos reservados.",
      },
      privacy: {
        EN: "Privacy Policy",
        TR: "Gizlilik Politikası",
        DE: "Datenschutz",
        ES: "Política de Privacidad",
      },
      terms: {
        EN: "Terms of Service",
        TR: "Kullanım Şartları",
        DE: "Nutzungsbedingungen",
        ES: "Términos de Servicio",
      },
      cookies: {
        EN: "Cookie Settings",
        TR: "Çerez Ayarları",
        DE: "Cookie-Einstellungen",
        ES: "Configuración de Cookies",
      },
    },
  },
} as const

export function t(
  obj: { [key in Language]: string },
  lang: Language
): string {
  return obj[lang] || obj.EN
}

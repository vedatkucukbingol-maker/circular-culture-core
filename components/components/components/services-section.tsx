import {
  Recycle,
  BarChart3,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Recycle,
    title: "Circularity Audits",
    description:
      "Comprehensive assessment of your current operations, identifying opportunities for circular transformation across your value chain.",
  },
  {
    icon: BarChart3,
    title: "Strategy Development",
    description:
      "Data-driven sustainability strategies tailored to your industry, with clear KPIs and actionable implementation roadmaps.",
  },
  {
    icon: ShieldCheck,
    title: "ESG Compliance",
    description:
      "Navigate the complex landscape of ESG regulations and reporting frameworks with confidence and accuracy.",
  },
  {
    icon: Leaf,
    title: "Green Supply Chain",
    description:
      "Optimize your supply chain for sustainability, reducing environmental impact while improving operational efficiency.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Transforming business through circularity
            </span>
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            From audits to implementation, we provide end-to-end consultancy to
            help your organization embrace the circular economy.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border/60 bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2.5 font-mono text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

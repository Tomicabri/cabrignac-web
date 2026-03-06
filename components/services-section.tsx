import { Globe, Smartphone, Search, Zap, Palette, MessageCircle } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Landing Page Profesional",
    description:
      "Sitio web de una pagina con scroll vertical, hasta 8 secciones, diseño moderno y contenido personalizado.",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsive",
    description:
      "Tu pagina se vera perfecta en celulares, tablets y computadoras. Optimizada para cualquier dispositivo.",
  },
  {
    icon: Search,
    title: "SEO Basico",
    description:
      "Optimizacion para aparecer en Google. Estructura limpia, meta tags y velocidad de carga optimizada.",
  },
  {
    icon: Zap,
    title: "Alta Velocidad",
    description:
      "Carga ultra rapida en menos de 3 segundos. Mejor experiencia para tus clientes y mejor ranking en Google.",
  },
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description:
      "Colores, fuentes y estilos a medida de tu marca. Tu sitio refleja la identidad unica de tu negocio.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integrado",
    description:
      "Boton de WhatsApp directo para que tus clientes te contacten al instante desde tu pagina.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Servicios
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Todo lo que tu negocio necesita en la web
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Ofrecemos un servicio completo para que tu negocio tenga la
            presencia digital que merece, sin complicaciones tecnicas.
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

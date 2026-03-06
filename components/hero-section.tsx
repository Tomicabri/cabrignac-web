import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-20"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/fondo.jpg"
          alt="Espacio de trabajo de desarrollo web profesional"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Desarrollo Web Profesional
          </p>
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-7xl">
            Tu negocio merece una presencia digital profesional
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            Ayudo a emprendedores y empresas a tener páginas web rápidas, modernas y optimizadas para atraer clientes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="group flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              Quiero mi pagina web
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="rounded-lg border border-primary-foreground/20 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Ver servicios
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-primary-foreground/10 pt-10 md:grid-cols-4">
            {[
              { value: "100%", label: "Responsive" },
              { value: "<3s", label: "Carga rapida" },
              { value: "SEO", label: "Optimizado" },
              { value: "24hs", label: "Soporte" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-accent md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


// prueba
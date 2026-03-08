import Image from "next/image"
import { CheckCircle } from "lucide-react"

const values = [
  "Trato personalizado y directo",
  "Entrega rapida y puntual",
  "Precios accesibles y transparentes",
  "Soporte continuo post-entrega",
]

export function AboutSection() {
  return (
    <section id="Sobre mi" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/fotoprincipal.jpg"
                alt="Tomas Cabrignac - Desarrollador Web"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-accent p-6 text-accent-foreground shadow-lg lg:block">
              <p className="text-3xl font-bold">+5</p>
              <p className="text-sm">Proyectos realizados</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Sobre mi
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Soy Tomás Cabrignac, desarrollador web especializado en crear páginas modernas para pequeños negocios y profesionales.
            </h2>
           
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Entiendo que cada negocio es unico. Por eso, trabajo codo a codo
              con cada persona para crear un sitio que refleje su identidad y
              conecte con sus clientes.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { MapPin, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section id="ubicacion" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Ubicacion
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Donde estoy ubicado
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Trabajo con clientes de toda la zona de Cordoba principalmente, con atencion
            personalizada y directa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <div className="overflow-hidden rounded-xl lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108888.94245089255!2d-63.33519237128906!3d-32.43206639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc13e40dcc5fbf%3A0xbc4f7cc99e2b18e8!2sVilla%20Mar%C3%ADa%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1709308800000!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion de Cabrignac Web Studio en Villa Maria, Cordoba"
              className="rounded-xl"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-8 lg:col-span-2">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Direccion
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Villa Maria, Cordoba
                </p>
                <p className="text-muted-foreground">Argentina</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Horarios de atencion
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Lunes a Viernes: 9:00 - 18:00
                </p>
                <p className="text-muted-foreground">
                  Sabados: 9:00 - 13:00
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
              <p className="text-sm font-medium text-foreground">
                Atencion de clientes en toda la zona
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Villa Maria - Cordoba Capital y alrededores. Tambien
                trabajamos de forma remota con clientes de todo el pais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

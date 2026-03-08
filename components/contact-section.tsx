"use client"

import { useState } from "react"
import { Send, Phone, Mail, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = encodeURIComponent(
      `Hola! Soy ${formData.name}. ${formData.message}`
    )
    window.open(
      `https://wa.me/5493534781007?text=${whatsappMessage}`,
      "_blank"
    )
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Contacto
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Hablemos sobre tu proyecto
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
              Contactame y te cuento como puedo ayudar a tu negocio a tener la
              presencia digital que merece. Sin compromiso.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <a
                href="https://wa.me/5493534781007"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-primary-foreground/10 p-4 transition-colors hover:border-accent/30 hover:bg-accent/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366]/10">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    WhatsApp
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    +54 353 4781007
                  </p>
                </div>
              </a>

              <a
                href="tel:+5493534781007"
                className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 p-4 transition-colors hover:border-accent/30 hover:bg-accent/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    Telefono
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    +54 9 353 4781007
                  </p>
                </div>
              </a>

              <a
                href="mailto:cabrignacdev@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 p-4 transition-colors hover:border-accent/30 hover:bg-accent/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    Email
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    cabrignacdev@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/cabrignacdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 p-4 transition-colors hover:border-accent/30 hover:bg-accent/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Instagram className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    Instagram
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    @cabrignacdev
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8"
            >
              <h3 className="text-xl font-semibold text-primary-foreground">
                Envianos un mensaje
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/60">
                Completa el formulario y te respondemos por WhatsApp.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-primary-foreground"
                  >
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Juan Perez"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-primary-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Hola! Me interesa una pagina web para mi negocio..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  {submitted ? (
                    "Mensaje enviado!"
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Nandez",
    role: "Dueña de Perfumeria Elegance",
    content:
      "Tomas entendio exactamente lo que necesitaba. Mi pagina web se ve increible y mis clientes ahora me encuentran facilmente en Google. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Carlos Fernandez",
    role: "Contador Publico",
    content:
      "Profesional y rapido. En menos de una semana tenia mi pagina funcionando. El boton de WhatsApp me genera consultas todos los dias. Excelente inversion.",
    rating: 5,
  },
  {
    name: "Laura Martinez",
    role: "Pet Shop Amigos",
    content:
      "No sabia nada de tecnologia y Tomas me guio en todo el proceso. Mi pagina se ve profesional y mis clientes me dicen que les encanta. Muy agradecida.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            La satisfaccion de nuestros clientes es nuestra mejor carta de
            presentacion.
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.content}"`}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Proyecto de sitio web para pet shop local",
    title: "Pet Shop Amigos",
    category: "Comercio",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Proyecto de sitio web para inmobiliaria",
    title: "Inmobiliaria del Centro",
    category: "Servicios",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Proyecto de sitio web para perfumeria",
    title: "Perfumeria Elegance",
    category: "Comercio",
  },
]

export function GallerySection() {
  return (
    <section id="galeria" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Galeria
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Algunos de nuestros trabajos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Cada proyecto es unico y esta diseñado especificamente para el
            negocio de cada cliente.
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mt-4 border-t border-background/10 pt-4 text-center">
          <p className="text-sm text-background/50">
            {`\u00A9 ${currentYear} Cabrignac Web Developer. Todos los derechos reservados.`}
          </p>
        </div>

      </div>
    </footer>
  )
}
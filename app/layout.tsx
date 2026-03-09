import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Cabrignac Web Studio | Sitios Web Profesionales para tu Negocio',

  description:
    'Creamos páginas web modernas y landing pages optimizadas para celulares. Ideal para negocios y profesionales en Villa María, Córdoba, Argentina.',

  keywords: [
    'paginas web',
    'landing page',
    'diseño web',
    'sitios web',
    'desarrollador web villa maria',
    'diseño web cordoba',
    'paginas web para negocios'
  ],

  authors: [{ name: 'Tomás Cabrignac' }],

  icons: {
    icon: '/logo/favicon2.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D9488',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 
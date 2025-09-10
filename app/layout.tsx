import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Crimson_Text, Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/hooks/useLanguage'
import { company } from '@/content/company'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
})

const crimson = Crimson_Text({ 
  subsets: ['latin'], 
  variable: '--font-crimson',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  weight: ['200','300','400','500','600','700','900'],
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['100','200','300','400','500','600','700','800','900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${company.name} — ${company.tagline}`,
  description: company.mission.en,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${crimson.variable} ${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <body className="font-sans bg-silk-50 text-ink-900 antialiased">
        <LanguageProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

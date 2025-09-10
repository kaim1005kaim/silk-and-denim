'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

const NAV = [
  { href: '#home', label: { en: 'Home', ja: 'ホーム' } },
  { href: '#about', label: { en: 'About', ja: '会社概要' } },
  { href: '#capabilities', label: { en: 'Capabilities', ja: 'ケイパビリティ' } },
  { href: '#projects', label: { en: 'Projects', ja: 'プロジェクト' } },
  { href: '#founders', label: { en: 'Founders', ja: '創業者' } },
  { href: '#contact', label: { en: 'Contact', ja: 'お問い合わせ' } },
]

export default function Header() {
  const pathname = usePathname()
  const [elev, setElev] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setElev(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV.map(n => n.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(`#${current}`)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  const isActive = (href: string) => activeSection === href || (href === '#home' && !activeSection)

  return (
    <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 transition-all duration-300 ${elev ? 'border-b border-[color:var(--line,rgba(16,24,32,.08))]' : ''}`}>
      <div className="container-narrow">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-medium tracking-[0.08em] text-ink-900 uppercase text-xs">
            Silk &amp; Denim
            <span className="ml-3 hidden text-[10px] tracking-[0.18em] text-ink-500 md:inline">
              WE CREATE NEW COMBINATION
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(n => (
              <a 
                key={n.href} 
                href={n.href} 
                onClick={(e) => handleNavClick(e, n.href)}
                className={`nav-link ${isActive(n.href) ? 'nav-link--active' : ''}`}
              >
                {t(n.label)}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
              className="ml-2 text-[10px] uppercase tracking-[0.18em] text-ink-500 hover:text-ink-900 transition-colors font-medium"
              aria-label="Toggle language"
            >
              {lang === 'en' ? '日本語' : 'English'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

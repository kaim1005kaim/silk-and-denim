'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navigation = [
    { href: '#about', label: { en: 'About', ja: '会社概要' } },
    { href: '#capabilities', label: { en: 'Capabilities', ja: 'ケイパビリティ' } },
    { href: '#projects', label: { en: 'Projects', ja: 'プロジェクト' } },
    { href: '#founders', label: { en: 'Founders', ja: '創業者' } },
    { href: '#contact', label: { en: 'Contact', ja: 'お問い合わせ' } },
  ];

  return (
    <footer className="mt-section bg-white text-ink-900 border-t border-line">
      <div className="container-narrow py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Access */}
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-4">Access</div>
            <p className="text-ink-900 jp-palt leading-relaxed">
              {company.contact.address}
            </p>
            <div className="mt-4">
              <a href="https://maps.google.com" target="_blank" className="text-link text-indigo-900 hover:opacity-80" rel="noreferrer">
                Google Maps
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-4">{t({ en: 'Explore', ja: '探索' })}</div>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-700 hover:text-ink-900 transition-colors">
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-ink-500 mb-4">{t({ en: 'Contact', ja: 'コンタクト' })}</div>
            <ul className="space-y-2 text-ink-700">
              <li>
                <a href={`mailto:${company.contact.email}`} className="hover:text-ink-900 transition-colors">
                  {company.contact.email}
                </a>
              </li>
              <li>{company.contact.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-medium tracking-[0.08em] text-ink-900 uppercase text-xs">
            Silk &amp; Denim
          </Link>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy" className="text-ink-500 hover:text-ink-900 transition-colors">{t({ en: 'Privacy', ja: 'プライバシー' })}</Link>
            <Link href="/terms" className="text-ink-500 hover:text-ink-900 transition-colors">{t({ en: 'Terms', ja: '利用規約' })}</Link>
          </div>
          <p className="text-ink-500 text-xs">© {currentYear} {company.name}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

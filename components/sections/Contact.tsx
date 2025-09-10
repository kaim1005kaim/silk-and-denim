'use client';

import { useState } from 'react';
import FadeUp from '@/components/motion/FadeUp';
import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-section bg-white">
      <div className="container-editorial px-8 md:px-12">
        <FadeUp>
          <h2 className="heading-title text-denim-900 text-center mb-16">
            Contact
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <FadeUp delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-2">
                  {t({ en: 'Name', ja: 'お名前' })}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-silk-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-denim-700 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-2">
                  {t({ en: 'Email', ja: 'メールアドレス' })}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-silk-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-denim-700 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-2">
                  {t({ en: 'Message', ja: 'メッセージ' })}
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-silk-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-denim-700 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                {t({ en: 'Send Message', ja: 'メッセージを送信' })}
              </button>
            </form>
          </FadeUp>

          {/* Contact Info */}
          <FadeUp delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg font-semibold text-denim-900 mb-4">
                  {t({ en: 'Contact Information', ja: '連絡先情報' })}
                </h3>
                <div className="space-y-3 text-ink-600">
                  <p>
                    <a href={`mailto:${company.contact.email}`} className="hover:text-denim-900 transition-colors">
                      {company.contact.email}
                    </a>
                  </p>
                  <p>{company.contact.phone}</p>
                  <p>{company.contact.address}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-semibold text-denim-900 mb-4">
                  {t({ en: 'Follow Us', ja: 'フォロー' })}
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="text-ink-500 hover:text-denim-900 transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-ink-500 hover:text-denim-900 transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-ink-500 hover:text-denim-900 transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

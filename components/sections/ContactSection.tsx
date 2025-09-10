'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('お問い合わせありがとうございます。担当者より連絡させていただきます。');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      content: 'Tokyo, Japan'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@silkanddenim.jp'
    },
    {
      icon: '🌐',
      title: 'Global Network',
      content: 'Japan • Europe • Middle East • Americas'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 font-japanese">
            新たなビジネスチャンスについてお話ししましょう
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="heading-sm text-navy mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-2xl mr-4">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-navy/5 to-beige/10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3">🗾</div>
                  <p className="text-navy font-semibold">Tokyo Office</p>
                  <p className="text-sm text-gray-600">Minato-ku, Tokyo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light-beige/30 rounded-2xl p-8">
            <h3 className="heading-sm text-navy mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    お名前 / Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    メールアドレス / Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                  会社名 / Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                  件名 / Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors"
                >
                  <option value="">選択してください / Select</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="business">Business Consultation</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  メッセージ / Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn ${isSubmitting ? 'bg-gray-400' : 'btn-primary'}`}
              >
                {isSubmitting ? '送信中...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
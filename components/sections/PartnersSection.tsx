'use client';

import { useState } from 'react';

const PartnersSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const partners = [
    {
      name: 'Moment Factory',
      location: 'Montreal, Canada',
      category: 'entertainment',
      description: 'Multimedia entertainment studio',
      logo: '🎪'
    },
    {
      name: 'Pophouse',
      location: 'London, UK',
      category: 'entertainment',
      description: 'ABBA Voyage creators',
      logo: '🎵'
    },
    {
      name: 'MIRAL',
      location: 'Abu Dhabi, UAE',
      category: 'development',
      description: 'Destination creator',
      logo: '🏗️'
    },
    {
      name: "Musée d'Orsay",
      location: 'Paris, France',
      category: 'art',
      description: 'World-renowned museum',
      logo: '🖼️'
    },
    {
      name: 'Alicia Foundation',
      location: 'Catalonia, Spain',
      category: 'food',
      description: 'Food & science research',
      logo: '🍽️'
    },
    {
      name: 'SLASH',
      location: 'Dubai, UAE',
      category: 'retail',
      description: 'Luxury retail innovation',
      logo: '🛍️'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Partners' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'art', label: 'Art & Culture' },
    { id: 'food', label: 'Food' },
    { id: 'development', label: 'Development' },
    { id: 'retail', label: 'Retail' }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === activeCategory);

  return (
    <section id="partners" className="section-padding bg-gradient-to-b from-white to-light-beige/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy mb-4">Global Partners</h2>
          <p className="text-lg text-gray-600 font-japanese">
            世界をリードする企業・機関との戦略的パートナーシップ
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy border-2 border-navy/20 hover:border-navy'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map((partner, index) => (
            <div
              key={index}
              className="group card p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Logo Placeholder */}
              <div className="w-20 h-20 bg-gradient-to-br from-navy/10 to-beige/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{partner.logo}</span>
              </div>

              {/* Partner Info */}
              <h3 className="text-xl font-bold text-navy mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-beige font-medium mb-1">
                {partner.location}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {partner.description}
              </p>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-beige/20 text-navy text-xs font-medium rounded-full capitalize">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="heading-md text-navy mb-4">
            Become a Partner
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-japanese">
            私たちと一緒に、日本と世界を繋ぐ新たなビジネスを創造しませんか。
            グローバルパートナーシップのご相談をお待ちしております。
          </p>
          <button className="btn btn-primary">
            Partnership Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
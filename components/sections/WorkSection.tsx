'use client';

import { useState } from 'react';

const WorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('01');

  const categories = [
    { id: '01', title: 'Website Design & Development', description: 'User-centric and high-performing digital experiences tailored to your brand.' },
    { id: '02', title: 'Graphic Design & Illustration', description: 'Visual storytelling that captures attention and communicates your message.' },
    { id: '03', title: 'Digital Marketing & SEO', description: 'Strategic campaigns that drive traffic and convert visitors into customers.' },
    { id: '04', title: 'Branding & Identity', description: 'Cohesive brand systems that resonate with your target audience.' },
    { id: '05', title: 'Motion Graphics & Video Production', description: 'Dynamic visual content that brings your story to life.' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Lumiere Fashion Website',
      category: 'Website Design & Development, Digital Marketing',
      image: '/figma-designs/project1.jpg'
    },
    {
      id: 2,
      title: 'NovaTech Rebrand',
      category: 'Branding & Identity',
      image: '/figma-designs/project2.jpg'
    },
    {
      id: 3,
      title: 'Skyline Motion Campaign',
      category: 'Motion Graphics & Video Production',
      image: '/figma-designs/project3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`cursor-pointer p-6 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              <div className="text-2xl font-bold mb-2">{category.id}</div>
              <h3 className="font-medium text-sm mb-2">{category.title}</h3>
              {selectedCategory === category.id && (
                <p className="text-xs opacity-80 mt-2">{category.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Work
            <br />
            <span className="text-gray-600">Speaks for Itself</span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            Explore our portfolio of bold and impactful projects, designed to inspire and deliver excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Large Project Card */}
          <div className="relative group overflow-hidden rounded-xl bg-gray-100 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90">
              <div className="p-8 h-full flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-2">Lumiere Fashion Website</h3>
                <p className="text-sm opacity-80">Website Design & Development, Digital Marketing</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Project Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded"></div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">NovaTech Rebrand</h3>
              <p className="text-sm text-gray-600">Branding & Identity</p>
            </div>

            {/* Project Card 3 */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Skyline Motion Campaign</h3>
                  <p className="text-sm text-gray-600">Motion Graphics & Video Production</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Hear from brands and businesses
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            that have transformed with Silk & Denim&apos;s expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
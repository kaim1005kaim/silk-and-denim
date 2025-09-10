'use client';
import Image from 'next/image';

const HeroSection = () => {
  const portfolioItems = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
    { id: 3, title: 'Project 3' },
    { id: 4, title: 'Project 4' },
  ];

  return (
    <section className="relative w-full bg-white" style={{ minHeight: '1069px' }}>
      <div className="container-figma">
        <div className="flex flex-col px-[80px]">
          {/* Main Content - Exact positioning from Figma */}
          <div className="flex flex-col items-center text-center" style={{ paddingTop: '280px' }}>
            {/* Main Title */}
            <h1 style={{ 
              fontFamily: 'Schibsted Grotesk',
              fontSize: '90px',
              fontWeight: 600,
              lineHeight: '101px',
              letterSpacing: '-0.02em',
              color: '#222222',
              marginBottom: '32px'
            }}>
              Elevate Your Brand
              <br />
              with Bold Creativity
            </h1>

            {/* Subtitle */}
            <p style={{ 
              fontFamily: 'Hanken Grotesk',
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: '31px',
              color: '#767676',
              maxWidth: '734px',
              marginBottom: '48px'
            }}>
              We craft visionary designs and strategic solutions that make your brand stand out in a crowded digital world.
            </p>

            {/* CTA Button */}
            <button style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '20px 40px',
              borderRadius: '8px',
              fontFamily: 'Schibsted Grotesk',
              fontSize: '20px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer'
            }}>
              Let&apos;s Get Started
            </button>
          </div>

          {/* Portfolio Grid - Exact positioning */}
          <div style={{ marginTop: '160px', paddingBottom: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {portfolioItems.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '16px',
                    backgroundColor: '#f0f0f0',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  {/* Placeholder for project images */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#e8e8e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: '#999', fontSize: '14px' }}>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
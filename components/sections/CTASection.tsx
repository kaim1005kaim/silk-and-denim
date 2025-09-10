'use client';

const CTASection = () => {
  return (
    <>
      {/* First CTA */}
      <section className="w-full bg-primary">
        <div className="container-figma">
          <div className="py-32 px-[100px] text-center">
            <h2 className="text-6xl font-semibold text-white mb-8 leading-[1.1] tracking-[-0.04em]" style={{ fontFamily: 'Schibsted Grotesk' }}>
              Ready to create
              <br />
              something extraordinary?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-[1.4]" style={{ fontFamily: 'Hanken Grotesk', fontWeight: 300 }}>
              Let&apos;s collaborate to bring your vision to life with bold creativity and strategic innovation.
            </p>
            <button 
              className="bg-white text-primary px-12 py-5 rounded-lg font-semibold text-xl hover:bg-gray-100 transition-colors"
              style={{ fontFamily: 'Schibsted Grotesk' }}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Second CTA with Video Background */}
      <section className="relative w-full h-[572px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundColor: '#1a1a1a',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container-figma px-[100px]">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur mb-8 cursor-pointer hover:bg-white/30 transition-colors">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                <path d="M24 14L0 28V0L24 14Z" fill="white"/>
              </svg>
            </div>
            <h2 className="text-5xl font-semibold text-white mb-4 leading-[1.1] tracking-[-0.03em]" style={{ fontFamily: 'Schibsted Grotesk' }}>
              See Our Work in Action
            </h2>
            <p className="text-xl text-gray-300 leading-[1.4]" style={{ fontFamily: 'Hanken Grotesk', fontWeight: 300 }}>
              Watch how we transform brands with creativity and innovation
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
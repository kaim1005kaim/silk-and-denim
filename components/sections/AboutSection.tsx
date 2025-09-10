'use client';

const AboutSection = () => {
  return (
    <section className="w-full bg-white" style={{ height: '390px' }}>
      <div className="container-figma">
        <div style={{ padding: '80px', height: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '176px', alignItems: 'start' }}>
            {/* Left Content */}
            <div>
              <h2 style={{ 
                fontFamily: 'Schibsted Grotesk',
                fontSize: '64px',
                fontWeight: 600,
                lineHeight: '64px',
                letterSpacing: '-0.06em',
                color: '#767676'
              }}>
                Creativity isn&apos;t
                <br />
                just what we do
                <br />
                —it&apos;s who we are.
              </h2>
            </div>

            {/* Right Content */}
            <div style={{ paddingTop: '8px' }}>
              <p style={{ 
                fontFamily: 'Hanken Grotesk',
                fontSize: '20px',
                fontWeight: 300,
                lineHeight: '26px',
                color: '#454545'
              }}>
                <strong style={{ fontWeight: 500 }}>We don&apos;t follow trends—we create them.</strong> We blend strategy, storytelling, and design to build brands that leave a lasting impact. Whether it&apos;s crafting a bold new identity, designing immersive digital experiences, or launching high-converting campaigns, we bring ideas to life with precision and passion. Let&apos;s turn your vision into something unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
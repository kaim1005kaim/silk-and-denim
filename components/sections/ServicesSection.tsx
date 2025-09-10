'use client';

const ServicesSection = () => {
  const services = [
    { number: '01', title: 'Website Design &\nDevelopment', description: 'User-centric and high-performing digital experiences tailored to your brand.' },
    { number: '02', title: 'Graphic Design &\nIllustration', description: '' },
    { number: '03', title: 'Digital Marketing\n& SEO', description: '' },
    { number: '04', title: 'Branding &\nIdentity', description: '' },
    { number: '05', title: 'Motion Graphics\n& Video Production', description: '' },
  ];

  return (
    <section className="w-full" style={{ backgroundColor: '#f8f8f8', height: '714px' }}>
      <div className="container-figma">
        <div style={{ padding: '100px 100px 80px 100px', height: '100%' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ 
              fontFamily: 'Schibsted Grotesk',
              fontSize: '64px',
              fontWeight: 600,
              lineHeight: '64px',
              letterSpacing: '-0.06em',
              color: '#222222',
              marginBottom: '24px'
            }}>
              Creative Solutions
            </h2>
            <p style={{ 
              fontFamily: 'Hanken Grotesk',
              fontSize: '20px',
              fontWeight: 300,
              lineHeight: '26px',
              color: '#454545',
              maxWidth: '586px',
              margin: '0 auto'
            }}>
              Combining innovation, strategy, and design to craft powerful brand experiences that drive real results.
            </p>
          </div>

          {/* Services Grid */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            {/* First card - Active */}
            <div style={{
              width: '242px',
              height: '334px',
              backgroundColor: '#222222',
              borderRadius: '16px',
              padding: '32px',
              color: 'white'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ 
                  fontFamily: 'Schibsted Grotesk',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#999999'
                }}>
                  {services[0].number}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'Schibsted Grotesk',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '29px',
                color: '#ffffff',
                marginBottom: '24px',
                whiteSpace: 'pre-line'
              }}>
                {services[0].title}
              </h3>
              <p style={{ 
                fontFamily: 'Hanken Grotesk',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: '18px',
                color: '#cccccc'
              }}>
                {services[0].description}
              </p>
            </div>

            {/* Other cards */}
            {services.slice(1).map((service, index) => (
              <div 
                key={index + 1}
                style={{
                  width: '242px',
                  height: '334px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #f0f0f0'
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ 
                    fontFamily: 'Schibsted Grotesk',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#d0d0d0'
                  }}>
                    {service.number}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'Schibsted Grotesk',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '29px',
                  color: '#222222',
                  whiteSpace: 'pre-line'
                }}>
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
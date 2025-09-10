'use client';

const WorksSection = () => {
  return (
    <section className="w-full bg-white" style={{ height: '934px' }}>
      <div className="container-figma">
        <div style={{ padding: '100px 80px' }}>
          {/* Section Header */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ 
              fontFamily: 'Schibsted Grotesk',
              fontSize: '64px',
              fontWeight: 600,
              lineHeight: '64px',
              letterSpacing: '-0.06em',
              color: '#222222'
            }}>
              Our Work
            </h2>
            <h3 style={{ 
              fontFamily: 'Schibsted Grotesk',
              fontSize: '64px',
              fontWeight: 600,
              lineHeight: '64px',
              letterSpacing: '-0.06em',
              color: '#767676',
              marginTop: '8px',
              marginBottom: '32px'
            }}>
              Speaks for Itself
            </h3>
            <p style={{ 
              fontFamily: 'Hanken Grotesk',
              fontSize: '20px',
              fontWeight: 300,
              lineHeight: '26px',
              color: '#454545',
              maxWidth: '600px'
            }}>
              Explore our portfolio of bold and impactful projects, designed to inspire and deliver excellence.
            </p>
          </div>

          {/* Works Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {/* Left - Large Project */}
            <div style={{ 
              height: '580px',
              borderRadius: '16px',
              backgroundColor: '#f0f0f0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '40px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
              }}>
                <h4 style={{ 
                  fontFamily: 'Schibsted Grotesk',
                  fontSize: '32px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '12px'
                }}>
                  Lumiere Fashion Website
                </h4>
                <p style={{ 
                  fontFamily: 'Hanken Grotesk',
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  Website Design & Development, Digital Marketing
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Project 2 */}
              <div style={{ 
                height: '270px',
                borderRadius: '16px',
                backgroundColor: 'white',
                border: '1px solid #f0f0f0',
                padding: '32px'
              }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gap: '8px',
                  marginBottom: '24px',
                  height: '120px'
                }}>
                  {[...Array(9)].map((_, i) => (
                    <div key={i} style={{ backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                  ))}
                </div>
                <h4 style={{ 
                  fontFamily: 'Schibsted Grotesk',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#222222',
                  marginBottom: '8px'
                }}>
                  NovaTech Rebrand
                </h4>
                <p style={{ 
                  fontFamily: 'Hanken Grotesk',
                  fontSize: '16px',
                  color: '#767676'
                }}>
                  Branding & Identity
                </p>
              </div>

              {/* Project 3 */}
              <div style={{ 
                height: '270px',
                borderRadius: '16px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ 
                    fontFamily: 'Schibsted Grotesk',
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#222222',
                    marginBottom: '8px'
                  }}>
                    Skyline Motion Campaign
                  </h4>
                  <p style={{ 
                    fontFamily: 'Hanken Grotesk',
                    fontSize: '16px',
                    color: '#767676'
                  }}>
                    Motion Graphics & Video Production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
'use client';

const TeamSection = () => {
  const team = [
    { name: 'Alex Chen', role: 'Creative Director', image: '#e0e0e0' },
    { name: 'Maria Silva', role: 'Lead Designer', image: '#d0d0d0' },
    { name: 'James Park', role: 'Strategy Lead', image: '#e8e8e8' },
    { name: 'Emma Davis', role: 'Developer', image: '#f0f0f0' },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container-figma">
        <div className="section-padding">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-section-title text-primary leading-[1] tracking-[-0.06em]">
              Meet the creatives
            </h2>
            <h3 className="text-section-subtitle leading-[1] tracking-[-0.06em] mt-2">
              shaping bold new visions.
            </h3>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div 
                  className="aspect-[3/4] rounded-2xl mb-6"
                  style={{ backgroundColor: member.image }}
                />
                <h4 className="text-xl font-semibold text-primary mb-2 leading-[1.2]" style={{ fontFamily: 'Schibsted Grotesk' }}>
                  {member.name}
                </h4>
                <p className="text-body-small text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
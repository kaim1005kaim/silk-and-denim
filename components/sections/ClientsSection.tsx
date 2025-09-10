'use client';

const ClientsSection = () => {
  const clients = [
    { name: 'Logoipsum', id: 1 },
    { name: 'Logoipsum Foundation', id: 2 },
    { name: 'Logoipsum Academy', id: 3 },
    { name: 'Logoipsum', id: 4 },
    { name: 'Logoipsum', id: 5 },
    { name: 'Logoipsum', id: 6 },
  ];

  return (
    <section className="w-full bg-white" style={{ height: '216px' }}>
      <div className="container-figma">
        <div style={{ padding: '80px', height: '100%', display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%',
            opacity: 0.3
          }}>
            {clients.map((client) => (
              <div key={client.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  backgroundColor: '#d0d0d0' 
                }}></div>
                <span style={{ 
                  fontFamily: 'Hanken Grotesk',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#767676'
                }}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
'use client';

import Image from 'next/image';

const logos = [
  { name: 'Moment Factory', src: '/images/partners/moment-factory.png', width: 180, height: 60 },
  { name: 'Puy du Fou', src: '/images/partners/puy-du-fou.png', width: 160, height: 60 },
  { name: 'Japan Expo', src: '/images/partners/japan-expo.jpg', width: 140, height: 60 },
  { name: 'MIRAL', src: '/images/partners/miral.jpg', width: 120, height: 60 },
  { name: "Musée d'Orsay", src: '/images/partners/musee-dorsay.png', width: 160, height: 60 },
  { name: 'Centre Pompidou', src: '/images/partners/centre-pompidou.jpg', width: 180, height: 60 },
  { name: 'Alicia Foundation', src: '/images/partners/alicia-foundation.jpg', width: 180, height: 60 },
];

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-white border-t border-line">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-sm uppercase tracking-[0.2em] text-ink-500">Partners</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-10 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain w-auto max-h-10"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


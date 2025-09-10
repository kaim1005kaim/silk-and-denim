'use client';

const FeedbackSection = () => {
  return (
    <section className="w-full bg-light">
      <div className="container-figma">
        <div className="section-padding">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-section-title text-primary leading-[1] tracking-[-0.06em]">
              Hear from brands and businesses<br />
              that have transformed with Vixel&apos;s expertise.
            </h2>
          </div>

          {/* Testimonial */}
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto mb-8">
                <text x="30" y="40" fontSize="40" fill="#222222" textAnchor="middle">&ldquo;</text>
              </svg>
              <p className="text-3xl font-light leading-[1.4] text-primary mb-12" style={{ fontFamily: 'Hanken Grotesk' }}>
                Working with Vixel was a game-changer for our brand. Their creativity and strategic approach helped us stand out in a competitive market and achieve measurable results.
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              <div className="text-left">
                <p className="font-semibold text-primary text-lg">Sarah Johnson</p>
                <p className="text-secondary text-body-small">CEO, TechStart Inc.</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
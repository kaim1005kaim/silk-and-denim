'use client';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,499',
      period: '/project',
      features: [
        'Custom Website Design',
        '5 Pages Included',
        'Basic SEO Setup',
        'Mobile Responsive',
        '1 Month Support',
      ],
      highlighted: false,
    },
    {
      name: 'Business',
      price: '$5,999',
      period: '/project',
      features: [
        'Advanced Web Design',
        'Unlimited Pages',
        'Full SEO Optimization',
        'E-commerce Integration',
        'CMS Integration',
        '3 Months Support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      period: '',
      features: [
        'Full Brand Strategy',
        'Custom Development',
        'Marketing Campaigns',
        'Analytics Dashboard',
        'Priority Support',
        'Dedicated Team',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="w-full bg-light">
      <div className="container-figma">
        <div className="section-padding">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-section-title text-primary leading-[1] tracking-[-0.06em]">
              Flexible Plans for Every Brand
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-10 ${
                  plan.highlighted ? 'bg-primary text-white' : 'bg-white'
                }`}
                style={{
                  backgroundColor: plan.highlighted ? '#222222' : '#ffffff',
                  border: plan.highlighted ? 'none' : '1px solid #e0e0e0',
                }}
              >
                <h3 
                  className={`text-2xl font-semibold mb-6 ${
                    plan.highlighted ? 'text-white' : 'text-primary'
                  }`}
                  style={{ fontFamily: 'Schibsted Grotesk' }}
                >
                  {plan.name}
                </h3>
                
                <div className="mb-8">
                  <span className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-primary'
                  }`} style={{ fontFamily: 'Schibsted Grotesk' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-lg ml-2 ${
                      plan.highlighted ? 'text-gray-300' : 'text-secondary'
                    }`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-3 ${
                        plan.highlighted ? 'text-gray-300' : 'text-secondary'
                      }`}>
                        ✓
                      </span>
                      <span className={`text-body-small ${
                        plan.highlighted ? 'text-gray-200' : 'text-tertiary'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted 
                      ? 'bg-white text-primary hover:bg-gray-100' 
                      : 'bg-primary text-white hover:bg-gray-800'
                  }`}
                  style={{ fontFamily: 'Schibsted Grotesk' }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
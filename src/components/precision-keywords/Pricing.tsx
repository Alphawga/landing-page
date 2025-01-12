'use client';
import { useState } from 'react';
import { pricingPlans } from '@/constants';
import PaymentDialog from './PaymentDialog';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-4">Choose the Best Plan for Your Business</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover tailored SEO solutions to bolster your online visibility, attract new leads, and fuel digital growth.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-lg border ${
                plan.isPopular 
                  ? 'border-[#2D89EF] shadow-lg relative' 
                  : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2D89EF] text-white px-4 py-1 rounded-full text-sm">
                  Popular Choice
                </div>
              )}
              <h3 className="mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2D89EF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedPlan({ name: plan.name, price: plan.price })}
              >
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <PaymentDialog
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
        />
      )}
    </section>
  );
} 
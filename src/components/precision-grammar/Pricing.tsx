'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PricingDialog from './PricingDialog';

const plans = [
  {
    name: "Silver",
    price: {
      monthly: "₦10,000",
      yearly: "₦108,000"
    },
    description: "Perfect for individuals and small projects",
    features: [
      "7-day turnaround time",
      "Expert document review",
      "Grammar & style check",
      "Formatting suggestions",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Diamond",
    price: {
      monthly: "₦40,000",
      yearly: "₦432,000"
    },
    description: "Ideal for businesses and professional needs",
    features: [
      "4-day turnaround time",
      "Priority expert review",
      "Advanced style enhancement",
      "Free plagiarism check",
      "Document restructuring",
      "24/7 priority support",
      "Dedicated account manager"
    ],
    popular: true
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="mb-4">Choose the Perfect Plan for You</h2>
          <p className="text-gray-600 text-lg mb-8">
            Get started with our flexible pricing options designed to meet your needs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-[--primary] font-semibold' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 rounded-full bg-[--primary] p-1 transition-colors duration-200"
              aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
            >
              <motion.div
                initial={false}
                animate={{ x: isYearly ? 32 : 0 }}
                className="w-6 h-6 rounded-full bg-white shadow-sm"
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-[--primary] font-semibold' : 'text-gray-600'}`}>
              Yearly
              <span className="ml-1 text-[--accent] text-xs font-normal">
                (Save 10%)
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-[--primary] text-white'
                  : 'bg-[--secondary] border-2 border-transparent hover:border-[--primary]'
              } transition-all duration-200`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[--accent] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.popular ? 'text-white/80' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    per {isYearly ? 'year' : 'document'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-[--primary]'}`} />
                    <span className={plan.popular ? 'text-white/80' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan({ 
                  name: plan.name, 
                  price: isYearly ? plan.price.yearly : plan.price.monthly 
                })}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-[--primary] hover:bg-gray-100'
                    : 'bg-[--primary] text-white hover:bg-[--primary-dark]'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 text-gray-600"
        >
          <p>
            Need a custom plan? <button className="text-[--primary] font-medium hover:underline">Contact us</button>
          </p>
        </motion.div>

        {selectedPlan && (
          <PricingDialog
            isOpen={!!selectedPlan}
            onClose={() => setSelectedPlan(null)}
            planName={selectedPlan.name}
            planPrice={selectedPlan.price}
          />
        )}
      </div>
    </section>
  );
} 
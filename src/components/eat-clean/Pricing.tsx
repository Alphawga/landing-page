'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import PricingDialog from './PricingDialog';

const plans = [
  {
    name: "Standard Plan",
    price: "₦20k",
    description: "Perfect for individuals starting their health journey",
    features: [
      { included: true, text: "Weekly Meal Plans" },
      { included: true, text: "Grocery Shopping Lists" },
      { included: true, text: "Basic Recipe Collection" },
      { included: true, text: "Email Support" },
      { included: false, text: "Personalized Meal Plans" },
      { included: false, text: "Exclusive Recipes" },
      { included: false, text: "Cooking Videos" },
      { included: false, text: "24/7 Support" }
    ],
    highlight: false
  },
  {
    name: "Premium Plan",
    price: "₦45k",
    description: "Ideal for those seeking comprehensive support",
    features: [
      { included: true, text: "Weekly Meal Plans" },
      { included: true, text: "Grocery Shopping Lists" },
      { included: true, text: "Extended Recipe Collection" },
      { included: true, text: "Priority Email Support" },
      { included: true, text: "Personalized Meal Plans" },
      { included: true, text: "Exclusive Recipes" },
      { included: true, text: "Cooking Videos" },
      { included: true, text: "24/7 Support" }
    ],
    highlight: true
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);

  return (
    <section className="eat-clean-section bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--eat-clean-primary) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
          opacity: 0.05
        }} />
      </div>

      <div className="eat-clean-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-[--eat-clean-dark] mb-6">
            Choose Your Best Plan
          </h2>
          <p className="text-gray-600">
            Select the perfect plan that aligns with your health and wellness goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative group ${plan.highlight ? 'md:-mt-4' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[--eat-clean-accent] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className={`eat-clean-card h-full flex flex-col ${
                plan.highlight ? 'border-2 border-[--eat-clean-accent]' : ''
              }`}>
                <div className="mb-8">
                  <h3 className="text-[--eat-clean-primary] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[--eat-clean-primary]">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center
                          ${feature.included ? 'bg-[--eat-clean-primary]/10' : 'bg-gray-100'}`}
                        >
                          {feature.included ? (
                            <Check className="w-3 h-3 text-[--eat-clean-primary]" />
                          ) : (
                            <X className="w-3 h-3 text-gray-400" />
                          )}
                        </div>
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlan({
                    name: plan.name,
                    price: plan.price
                  })}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-[--eat-clean-accent] text-white hover:bg-[--eat-clean-primary]'
                      : 'bg-[--eat-clean-primary] text-white hover:bg-[--eat-clean-accent]'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-600"
        >
          All plans include access to our mobile app and customer support
        </motion.p>
      </div>

      {selectedPlan && (
        <PricingDialog
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
        />
      )}
    </section>
  );
} 
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import PricingDialog from '@/components/elite-copy/PricingDialog';

const plans = [
  {
    name: "Basic",
    price: {
      monthly: "₦25,000",
      yearly: "₦270,000"
    },
    description: "Perfect for small projects and individual needs",
    features: [
      "1,000 words per document",
      "2-day turnaround",
      "Content review",
      "Expert feedback",
      "Basic SEO optimization",
      "Email support"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: {
      monthly: "₦50,000",
      yearly: "₦540,000"
    },
    description: "Ideal for growing businesses and agencies",
    features: [
      "5,000 words per document",
      "24-hour turnaround",
      "Advanced content review",
      "Priority feedback",
      "Full SEO optimization",
      "Custom tone/style guide",
      "Dedicated support",
      "Unlimited revisions"
    ],
    highlight: true
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);

  return (
    <section className="elite-section relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[--elite-navy]/5" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[--elite-aqua]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[--elite-yellow]/10 rounded-full blur-3xl" />
      </div>

      <div className="elite-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-[--elite-navy] mb-6">Flexible Plans to Match Your Goals</h2>
          <p className="text-gray-600 mb-8">
            Choose the perfect plan for your content needs. Save up to 10% with yearly billing.
          </p>

          {/* 3D Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-[--elite-white] rounded-full shadow-lg">
            <motion.button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full ${!isYearly ? 'bg-[--elite-navy] text-white' : 'text-gray-600'}`}
              animate={{
                scale: !isYearly ? 1.05 : 1,
                z: !isYearly ? 20 : 0
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full ${isYearly ? 'bg-[--elite-navy] text-white' : 'text-gray-600'}`}
              animate={{
                scale: isYearly ? 1.05 : 1,
                z: isYearly ? 20 : 0
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Yearly
              <span className="ml-1 text-[--elite-yellow] text-xs">
                Save 10%
              </span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {plan.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[--elite-yellow] text-[--elite-navy]
                    px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                >
                  <Star size={14} /> Most Popular
                </motion.div>
              )}

              <div className={`elite-card h-full ${
                plan.highlight ? 'border-2 border-[--elite-navy]' : ''
              }`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[--elite-navy] mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[--elite-navy]">
                      {isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-600">
                      per {isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[--elite-aqua]/10 
                        flex items-center justify-center">
                        <Check className="w-3 h-3 text-[--elite-aqua]" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlan({
                    name: plan.name,
                    price: isYearly ? plan.price.yearly : plan.price.monthly
                  })}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 
                    ${plan.highlight 
                      ? 'bg-[--elite-navy] text-white hover:bg-[--elite-aqua]' 
                      : 'bg-[--elite-white] text-[--elite-navy] hover:bg-[--elite-navy] hover:text-white'
                    }`}
                >
                  Get Started
                  {plan.highlight && <Zap className="inline ml-2 w-4 h-4" />}
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
          Need a custom plan?{' '}
          <button className="text-[--elite-navy] font-semibold hover:text-[--elite-aqua] transition-colors">
            Contact us
          </button>
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
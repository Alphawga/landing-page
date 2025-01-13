'use client';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Regular Package",
    price: "₦24,999",
    unit: "per Document",
    description: "Perfect for individuals with occasional document review needs",
    features: [
      { included: true, text: "Standard Turnaround (8–10 Business Days)" },
      { included: true, text: "2,000-Word Limit" },
      { included: true, text: "Basic Grammar Check" },
      { included: true, text: "Spelling Review" },
      { included: false, text: "Priority Support" },
      { included: false, text: "Advanced Style Suggestions" },
      { included: false, text: "Multilingual Review" },
      { included: false, text: "Document Formatting" }
    ],
    highlight: false
  },
  {
    name: "Standard Package",
    price: "₦49,999",
    unit: "per Document",
    description: "Ideal for professionals seeking comprehensive document support",
    features: [
      { included: true, text: "Priority Turnaround (5–7 Business Days)" },
      { included: true, text: "10,000-Word Limit" },
      { included: true, text: "Advanced Grammar Analysis" },
      { included: true, text: "Spelling & Style Review" },
      { included: true, text: "24/7 Priority Support" },
      { included: true, text: "Advanced Style Suggestions" },
      { included: true, text: "Multilingual Review" },
      { included: true, text: "Professional Formatting" }
    ],
    highlight: true
  }
];

export default function Pricing() {
  return (
    <section className="multilingo-section bg-[--multilingo-secondary] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-[--multilingo-primary] rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[--multilingo-accent] rounded-full filter blur-3xl"
        />
      </div>

      <div className="multilingo-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-[--multilingo-dark] mb-6">
            Choose the Perfect Plan for Your Needs
          </h2>
          <p className="text-gray-600">
            Select a package that aligns with your document review requirements and budget
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
              className={`relative ${plan.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-0 right-0 text-center">
                  <span className="bg-[--multilingo-accent] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular Choice
                  </span>
                </div>
              )}

              <div className={`multilingo-card h-full flex flex-col ${
                plan.highlight ? 'border-2 border-[--multilingo-accent]' : ''
              }`}>
                <div className="mb-8">
                  <h3 className="text-[--multilingo-primary] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.unit}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${feature.included ? 'bg-[--multilingo-primary]/10' : 'bg-gray-100'}`}
                      >
                        {feature.included ? (
                          <Check className="w-3 h-3 text-[--multilingo-primary]" />
                        ) : (
                          <X className="w-3 h-3 text-gray-400" />
                        )}
                      </div>
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group w-full py-3 rounded-lg font-medium transition-all duration-300 
                    flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? 'bg-[--multilingo-accent] text-white hover:bg-[--multilingo-primary]'
                      : 'bg-[--multilingo-primary] text-white hover:bg-[--multilingo-accent]'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
    </section>
  );
} 
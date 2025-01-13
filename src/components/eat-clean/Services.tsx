'use client';
import { motion } from 'framer-motion';
import { Scale,  Stethoscope, ArrowRight, FlaskConical } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: "Weight Loss Program",
    description: "Our evidence-based program helps you safely lose weight while enjoying nutritious, flavorful meals every day.",
    features: [
      "Personalized meal planning",
      "Progress tracking",
      "Weekly check-ins",
      "Recipe adjustments"
    ]
  },
  {
    icon: FlaskConical,
    title: "Nutrition Response Testing",
    description: "Analyze how your body reacts to different foods and nutrients, enabling us to create meal plans that optimize your health and well-being.",
    features: [
      "Food sensitivity analysis",
      "Nutrient deficiency testing",
      "Metabolic assessment",
      "Customized recommendations"
    ]
  },
  {
    icon: Stethoscope,
    title: "Clinical Nutrition",
    description: "Address medical conditions with science-backed dietary strategies. We design meal plans that suit your unique health requirements and tastes.",
    features: [
      "Medical history review",
      "Condition-specific planning",
      "Supplement guidance",
      "Ongoing support"
    ]
  }
];

export default function Services() {
  return (
    <section className="eat-clean-section bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--eat-clean-primary) 1px, transparent 0)',
          backgroundSize: '40px 40px'
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
            Diet & Nutritionist Services Tailored to You
          </h2>
          <p className="text-gray-600">
            Discover our comprehensive range of services designed to support your journey to better health
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="eat-clean-card h-full flex flex-col relative overflow-hidden">
                  {/* Service Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[--eat-clean-primary] to-[--eat-clean-accent] 
                      flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[--eat-clean-primary] mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="mt-auto">
                    <div className="border-t border-gray-100 pt-6 space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-[--eat-clean-accent]" />
                          <span className="text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-8 text-[--eat-clean-primary] font-semibold flex items-center gap-2 
                        group-hover:text-[--eat-clean-accent] transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[--eat-clean-primary]/10 to-transparent 
                    transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
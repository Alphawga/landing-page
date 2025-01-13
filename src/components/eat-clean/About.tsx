'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Clock, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Target,
    value: "90",
    unit: "Days",
    label: "Transformation Journey"
  },
  {
    icon: Clock,
    value: "24/7",
    unit: "",
    label: "Expert Support"
  },
  {
    icon: Users,
    value: "1000+",
    unit: "",
    label: "Happy Clients"
  },
  {
    icon: Award,
    value: "100%",
    unit: "",
    label: "Satisfaction Rate"
  }
];

export default function About() {
  return (
    <section className="eat-clean-section bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[--eat-clean-secondary] rounded-bl-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[--eat-clean-secondary] rounded-tr-full opacity-50" />
      </div>

      <div className="eat-clean-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/eat-clean/about-kitchen.jpg"
                alt="Happy individuals preparing healthy meals in a bright kitchen"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[--eat-clean-primary]/20 to-transparent" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="eat-clean-card group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[--eat-clean-primary]/10 flex items-center justify-center
                        group-hover:bg-[--eat-clean-primary] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[--eat-clean-primary] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-2xl font-bold text-[--eat-clean-primary]"
                          >
                            {stat.value}
                          </motion.span>
                          {stat.unit && (
                            <span className="text-sm text-gray-600">{stat.unit}</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-[--eat-clean-dark]">
                Change Your Life in the Next 90 Days with EatCleanFit
              </h2>
              <p className="text-gray-600">
                Experience a transformative 90-day journey anchored in healthy, nourishing meal plans. 
                Our approach combines delicious pasta-based recipes with personalized strategies to help you thrive. 
                Join us to embark on a path toward better health, daily exercise, and an overall sense of well-being.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="eat-clean-card border-l-4 border-[--eat-clean-primary]"
              >
                <h3 className="text-[--eat-clean-primary] mb-2">Personalized Nutrition Plan</h3>
                <p className="text-gray-600">
                  Receive a tailor-made meal plan adapted to your dietary preferences and health objectives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="eat-clean-card border-l-4 border-[--eat-clean-accent]"
              >
                <h3 className="text-[--eat-clean-primary] mb-2">Personalized Exercise Plan</h3>
                <p className="text-gray-600">
                  Complement your nutrition with a customized workout regimen that fits your lifestyle, 
                  maximizes results, and keeps you motivated.
                </p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="eat-clean-btn-primary"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
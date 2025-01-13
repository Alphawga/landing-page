'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Salad, Lightbulb, Users, Activity } from 'lucide-react';

const reasons = [
  {
    icon: Salad,
    title: "Healthy Diets",
    description: "Find meal plans that fit your lifestyle, helping you reach specific goals without compromising on flavor."
  },
  {
    icon: Lightbulb,
    title: "Nutrition Strategies",
    description: "Access expert tips for maintaining balanced, nourishing meals aligned with your personal preferences."
  },
  {
    icon: Users,
    title: "Individual Support",
    description: "Stay on track thanks to our dedicated team of nutritionists and fitness specialists who provide guidance every step of the way."
  },
  {
    icon: Activity,
    title: "Daily Exercise",
    description: "Complement tasty meals with daily activity programs to strengthen your body and maintain high energy levels."
  }
];

export default function WhyChoose() {
  return (
    <section className="eat-clean-section bg-[--eat-clean-secondary] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-[--eat-clean-primary] rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[--eat-clean-accent] rounded-full filter blur-3xl"
        />
      </div>

      <div className="eat-clean-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-[--eat-clean-dark]">
                Why Choose EatCleanFit?
              </h2>
              <p className="text-gray-600">
                Join thousands of satisfied clients who have transformed their lives through our comprehensive approach to nutrition and wellness.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[--eat-clean-primary] to-[--eat-clean-accent] 
                            flex items-center justify-center shadow-lg"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-[--eat-clean-primary] mb-2 group-hover:text-[--eat-clean-accent] transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <p className="text-gray-600">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square">
              <Image
                src="/eat-clean/oung-woman-pink-top-standing-with-coach.jpg"
                alt="Fitness coach guiding a client through a healthy lifestyle plan"
                fill
                className="object-cover rounded-3xl"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[--eat-clean-primary]/50 to-transparent rounded-3xl" />

              {/* Floating Stats */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 -right-4 bg-white p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[--eat-clean-accent]/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-[--eat-clean-accent]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                    <p className="font-bold text-[--eat-clean-primary]">1,000+</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[--eat-clean-primary]/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-[--eat-clean-primary]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="font-bold text-[--eat-clean-primary]">98%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
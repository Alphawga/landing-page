'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Brain, Sparkles, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: "AI-Powered Suggestions",
    description: "Get intelligent writing prompts and ideas tailored to your content goals"
  },
  {
    icon: Sparkles,
    title: "Creative Flow",
    description: "Maintain momentum with our intuitive writing interface and real-time feedback"
  },
  {
    icon: Zap,
    title: "Quick Solutions",
    description: "Access instant alternatives and improvements to keep your writing flowing"
  }
];

export default function WriterBlock() {
  return (
    <section className="multilingo-section bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="multilingo-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-[--multilingo-dark] mb-6">
                Keep Your Ideas Flowing, Stress-Free
              </h2>
              <p className="text-gray-600">
                Eliminate frustrating pauses in your writing process with our all-in-one solution. 
                With expert support and comprehensive review tools, you&apos;ll maintain momentum and 
                deliver impactful documents consistently.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-[--multilingo-secondary] transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[--multilingo-primary] to-[--multilingo-accent] 
                        flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[--multilingo-primary] text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="multilingo-btn-primary group"
            >
              <span className="flex items-center gap-2">
                Try It Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <Image
                src="/multilingo/rb_53095.png"
                alt="User typing on a laptop with idea icons appearing on screen"
                fill
                className="object-cover rounded-3xl"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[--multilingo-primary]/50 to-transparent rounded-3xl" />

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 -right-4 bg-white p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-[--multilingo-accent]" />
                  <span className="font-semibold text-[--multilingo-primary]">
                    Smart Suggestions
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
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
                  <Sparkles className="w-5 h-5 text-[--multilingo-accent]" />
                  <span className="font-semibold text-[--multilingo-primary]">
                    Creative Flow
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
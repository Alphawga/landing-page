'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Leaf, Activity, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    text: "Enjoy mouthwatering dishes enriched with essential nutrients"
  },
  {
    icon: Activity,
    text: "Access weekly meal plans that cater to your goals"
  },
  {
    icon: Heart,
    text: "Get expert tips on exercise, natural foods, and balanced nutrition"
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[--eat-clean-secondary] overflow-hidden">
      {/* Curved Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[--eat-clean-primary] to-[--eat-clean-primary]/80" />
        <svg
          className="absolute bottom-0 w-full text-white"
          viewBox="0 0 1440 320"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <div className="eat-clean-container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <h1 className="font-bold">
              Fuel Your Body with Delicious, Healthy Meals that Prevent Disease
            </h1>
            <p className="text-xl text-white/90">
              Explore our collection of tasty pasta options, carefully designed to simplify your meal planning, promote your well-being, and keep every bite satisfying.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[--eat-clean-accent]" />
                    </div>
                    <p className="text-white/90">{benefit.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="eat-clean-btn-primary bg-[--eat-clean-accent] group"
            >
              <span className="flex items-center gap-2">
                Download Meal Plan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[600px] mx-auto">
              <Image
                src="/eat-clean/pexels-janetrangdoan-769969.jpg"
                alt="Healthy pasta dish with fresh vegetables and herbs on a plate"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>

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
              className="absolute top-10 -right-10 bg-white p-4 rounded-xl shadow-lg"
            >
              <span className="text-[--eat-clean-primary] font-semibold">
                100% Natural
              </span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-10 -left-10 bg-[--eat-clean-accent] p-4 rounded-xl shadow-lg"
            >
              <span className="text-white font-semibold">
                Nutritionist Approved
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
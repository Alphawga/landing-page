'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Clock, CheckCircle, Globe, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    text: "Review documents up to 10x faster"
  },
  {
    icon: CheckCircle,
    text: "Enhance clarity, impact, and engagement"
  },
  {
    icon: Sparkles,
    text: "Eliminate writer's block with expert guidance"
  },
  {
    icon: Globe,
    text: "Collaborate in multiple languages effortlessly"
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[--multilingo-secondary] overflow-hidden">
      {/* Diagonal Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[--multilingo-primary] to-[--multilingo-primary]/80 transform -skew-y-6 origin-top-right" />
      </div>

      <div className="multilingo-container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <h1>
              Elevate Your Document Review Process with EasyMultiLingo
            </h1>
            <p className="text-xl text-white/90">
              Streamline your workflow, ensure accuracy, and collaborate seamlessly using our advanced review platform. 
              Save time, boost productivity, and achieve professional results—all in one place.
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
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[--multilingo-accent]" />
                    </div>
                    <p className="text-white/90">{benefit.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="multilingo-btn-primary bg-[--multilingo-accent] group"
            >
              <span className="flex items-center gap-2">
                Get Started
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
            <div className="relative aspect-[4/3] max-w-[600px] mx-auto">
              <Image
                src="/easy-multilingo/medium-shot-colleagues-meeting.jpg"
                alt="Group of diverse professionals collaborating on document reviews"
                fill
                className="object-cover rounded-3xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--multilingo-primary]/50 to-transparent rounded-3xl" />
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
              <span className="text-[--multilingo-primary] font-semibold">
                10x Faster Reviews
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
              className="absolute -bottom-10 -left-10 bg-[--multilingo-accent] p-4 rounded-xl shadow-lg"
            >
              <span className="text-white font-semibold">
                Multiple Languages
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
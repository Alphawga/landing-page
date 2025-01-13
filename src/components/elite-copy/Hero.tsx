'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[--elite-navy] to-[--elite-aqua] overflow-hidden">
      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-[--elite-navy]/20 transform -skew-y-6 origin-top-left" />
      
      <div className="elite-container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 px-4 lg:px-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Brand With Copy That Inspires Action
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              At EliteCopyStudio, we deliver polished, SEO-optimized content designed to engage, rank, and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="elite-btn-primary bg-white text-[--elite-navy]"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="elite-btn-secondary border-2 border-white"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[600px] mx-auto">
              <Image
                src="/elite-copy/vecteezy_illustration-man-working-on-laptop_46013490.png"
                alt="A professional writer reviewing content on a laptop, symbolizing EliteCopyStudio's expertise"
                fill
                className="object-contain"
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
              className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg"
            >
              <span className="text-[--elite-navy] font-semibold">SEO Optimized</span>
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
              className="absolute bottom-10 left-10 bg-[--elite-yellow] p-4 rounded-lg shadow-lg"
            >
              <span className="text-[--elite-navy] font-semibold">Fast Delivery</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
} 
'use client';
import { motion } from 'framer-motion';
import { Calendar, Upload, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: "Book Your Consultation",
    description: "Choose your service and make a secure payment.",
    color: "bg-[--elite-navy]"
  },
  {
    icon: Upload,
    title: "Share Your Vision",
    description: "Upload your documents or share your project brief.",
    color: "bg-[--elite-aqua]"
  },
  {
    icon: FileCheck,
    title: "Receive Your Copy",
    description: "Get polished, conversion-focused content on time.",
    color: "bg-[--elite-yellow]"
  }
];

export default function HowItWorks() {
  return (
    <section className="elite-section bg-[--elite-white] relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        <motion.div
          initial={{ opacity: 0, rotateX: 45, y: 100 }}
          whileInView={{ opacity: 0.05, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-[--elite-navy] to-[--elite-aqua] transform-gpu"
        />
      </div>

      <div className="elite-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-[--elite-navy] mb-6">A Simple Process for Exceptional Results</h2>
          <p className="text-gray-600">
            We&apos;ve streamlined our workflow to deliver quality content efficiently.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-0 right-0 h-1 bg-[--elite-navy]/20 transform -translate-y-1/2"
          />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2 + 0.5 
                  }}
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[--elite-navy] text-white
                    flex items-center justify-center font-bold z-10"
                >
                  {index + 1}
                </motion.div>

                <div className="elite-card group h-full pt-8">
                  <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6
                    transform group-hover:rotate-12 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[--elite-navy] mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>

                  {/* Interactive Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 1 }}
                    className="mt-6 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-[--elite-aqua]" />
                    <div className="w-2 h-2 rounded-full bg-[--elite-yellow]" />
                    <div className="w-2 h-2 rounded-full bg-[--elite-coral]" />
                  </motion.div>
                </div>

                {/* Connecting Lines for Desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[--elite-navy]/20"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="elite-btn-primary"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
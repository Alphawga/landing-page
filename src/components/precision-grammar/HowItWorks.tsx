'use client';
import { motion } from 'framer-motion';
import { Upload, MessageSquare, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Submit Your Document",
    description: "Upload your file and share your goals with our team of experts.",
    color: "bg-[--primary]"
  },
  {
    icon: MessageSquare,
    title: "Receive Expert Feedback",
    description: "Get actionable insights and detailed recommendations from our specialists.",
    color: "bg-[--accent]"
  },
  {
    icon: FileCheck,
    title: "Perfected Documents Delivered",
    description: "Receive your polished, professional documents ready for success.",
    color: "bg-[--primary-dark]"
  }
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-[--secondary]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">
            Our simple three-step process ensures quality and efficiency.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-4`}>
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="hidden md:block w-4 h-4 rounded-full bg-[--primary] relative z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[--primary]/20 animate-ping" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            Start Your Review Now
          </button>
        </motion.div>
      </div>
    </section>
  );
} 
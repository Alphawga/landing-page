'use client';
import { motion } from 'framer-motion';
import { Zap, Target, Sparkles, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Review Documents 10x Faster",
    description: "Accelerate your review process with intuitive tools, maintaining accuracy and productivity.",
    color: "from-[--multilingo-primary] to-[--multilingo-accent]"
  },
  {
    icon: Target,
    title: "Improve Document Clarity and Impact",
    description: "Elevate your content with seamless editing and feedback features.",
    color: "from-[--multilingo-accent] to-[--multilingo-primary]"
  },
  {
    icon: Sparkles,
    title: "Unlock Your Creative Potential",
    description: "Overcome writer's block and refine your drafts into polished documents.",
    color: "from-[--multilingo-primary] to-[--multilingo-accent]"
  },
  {
    icon: Globe,
    title: "Multilingual Capabilities",
    description: "Collaborate across multiple languages, expanding your reach without missing important nuances.",
    color: "from-[--multilingo-accent] to-[--multilingo-primary]"
  }
];

export default function WhyChoose() {
  return (
    <section className="multilingo-section bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--multilingo-primary) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
          opacity: 0.05
        }} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[--multilingo-primary]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[--multilingo-accent]/10 to-transparent rounded-full blur-3xl"
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
            Streamlined Document Management for Maximum Efficiency
          </h2>
          <p className="text-gray-600">
            Experience the power of intelligent document review and collaboration tools designed to enhance your workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="multilingo-card group relative overflow-hidden"
              >
                {/* Feature Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} 
                        flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-[--multilingo-primary] group-hover:text-[--multilingo-accent] transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 pl-16">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[--multilingo-secondary] to-transparent 
                  rounded-full opacity-50 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-[--multilingo-secondary] to-transparent 
                  rounded-full opacity-50 transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="multilingo-btn-primary"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
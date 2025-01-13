'use client';
import { motion } from 'framer-motion';
import { Rocket, Users, Lightbulb, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: "Increase Your Output Tenfold",
    description: "Streamline editing, fact-checking, and version control to produce high-quality content faster.",
    color: "from-[--multilingo-primary] to-[--multilingo-accent]",
    stats: "10x",
    statsLabel: "Faster Output"
  },
  {
    icon: Users,
    title: "Collaborate Seamlessly",
    description: "Work in real time with colleagues around the world. Share insights, provide feedback, and finalize documents together.",
    color: "from-[--multilingo-accent] to-[--multilingo-primary]",
    stats: "24/7",
    statsLabel: "Global Access"
  },
  {
    icon: Lightbulb,
    title: "Innovative Idea Generation",
    description: "Unlock fresh perspectives with AI-powered writing suggestions. Keep your content dynamic and relevant.",
    color: "from-[--multilingo-primary] to-[--multilingo-accent]",
    stats: "100%",
    statsLabel: "Original Content"
  },
  {
    icon: BookOpen,
    title: "Enhance Your Writing Skills",
    description: "Receive personalized insights to refine grammar, tone, and structure. Grow your expertise, document by document.",
    color: "from-[--multilingo-accent] to-[--multilingo-primary]",
    stats: "50+",
    statsLabel: "Writing Tips"
  }
];

export default function Features() {
  return (
    <section className="multilingo-section bg-[--multilingo-secondary] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-[--multilingo-primary] rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[--multilingo-accent] rounded-full filter blur-3xl"
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
            Scale Your Writing and Collaboration Effortlessly
          </h2>
          <p className="text-gray-600">
            Transform your document workflow with our powerful features designed for modern teams
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="multilingo-card h-full flex flex-col relative overflow-hidden">
                  {/* Feature Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} 
                      flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[--multilingo-primary] mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold bg-gradient-to-r from-[--multilingo-primary] to-[--multilingo-accent] bg-clip-text text-transparent">
                        {feature.stats}
                      </span>
                      <span className="text-gray-600">{feature.statsLabel}</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-500" />
                </div>
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
            className="multilingo-btn-secondary"
          >
            View All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
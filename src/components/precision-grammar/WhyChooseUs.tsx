'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Zap, Clock } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Error-Free Content",
    description: "Say goodbye to typos and inconsistencies with our thorough review process.",
    color: "text-[--primary]"
  },
  {
    icon: Target,
    title: "Enhanced Readability",
    description: "Deliver clear, professional messaging that connects with your audience.",
    color: "text-[--accent]"
  },
  {
    icon: Zap,
    title: "Industry Compliance",
    description: "Ensure your documents meet the highest standards in your field.",
    color: "text-[--primary-dark]"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Save time and focus on what matters most to your business.",
    color: "text-[--accent]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Why PrecisionGrammar?</h2>
            <p className="text-gray-600 text-lg">
              Experience the difference with our comprehensive document review services.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group"
                whileHover={{ y: -5 }}
              >
                <div className={`${feature.color} mb-4`}>
                  <Icon size={32} className="transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="btn-primary">
            Learn More About Our Process
          </button>
        </motion.div>
      </div>
    </section>
  );
} 
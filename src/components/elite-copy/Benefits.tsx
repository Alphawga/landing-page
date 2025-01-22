'use client';
import { motion } from 'framer-motion';
import { Upload, Zap, Layout, Search, Target, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Upload,
    title: "Effortless Uploads",
    description: "Share your briefs or documents in seconds.",
    color: "bg-[--elite-aqua]"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Turnaround",
    description: "Quality content, delivered on time.",
    color: "bg-[--elite-yellow]"
  },
  {
    icon: Layout,
    title: "Versatile Services",
    description: "Websites, ads, blogs—tailored to your needs.",
    color: "bg-[--elite-coral]"
  },
  {
    icon: Search,
    title: "SEO Expertise",
    description: "Improve your rankings with keyword-driven copy.",
    color: "bg-[--elite-green]"
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Customized tone, style, and impact for every project.",
    color: "bg-[--elite-navy]"
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "100% satisfaction with every delivery.",
    color: "bg-[--elite-aqua]"
  }
];

export default function Benefits() {
  return (
    <section className="elite-section bg-[--elite-white] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[--elite-aqua] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[--elite-yellow] rounded-full filter blur-3xl" />
      </div>

      <div className="elite-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-[--elite-navy] mb-6">Why Choose CopyImpactHub?</h2>
          <p className="text-gray-600">
            Experience the difference with our comprehensive suite of professional copywriting services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.1
                }
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="elite-card group transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[--elite-navy] mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>

              {/* Hover Effect Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="elite-btn-primary"
          >
            Learn More About Our Process
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
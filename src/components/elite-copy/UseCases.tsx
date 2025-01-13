'use client';
import { motion } from 'framer-motion';
import { Globe, Mail, FileText, ShoppingBag, FileCheck, MessageSquare } from 'lucide-react';

const useCases = [
  {
    icon: Globe,
    title: "Website Copy",
    description: "Make a lasting first impression with SEO-optimized content that reflects your brand's voice.",
    color: "from-[--elite-navy] to-[--elite-aqua]"
  },
  {
    icon: Mail,
    title: "Marketing Campaigns",
    description: "Drive conversions with persuasive emails, ads, and landing pages.",
    color: "from-[--elite-aqua] to-[--elite-yellow]"
  },
  {
    icon: FileText,
    title: "Optimized Blog Posts",
    description: "Build authority and engagement with shareable, keyword-rich blogs.",
    color: "from-[--elite-yellow] to-[--elite-coral]"
  },
  {
    icon: ShoppingBag,
    title: "Product Descriptions",
    description: "Showcase your products with compelling, benefit-driven content.",
    color: "from-[--elite-coral] to-[--elite-green]"
  },
  {
    icon: FileCheck,
    title: "Polished Proposals",
    description: "Close more deals with clear, persuasive business proposals.",
    color: "from-[--elite-green] to-[--elite-navy]"
  },
  {
    icon: MessageSquare,
    title: "Social Media Content",
    description: "Ignite engagement with impactful posts tailored to your audience.",
    color: "from-[--elite-navy] to-[--elite-aqua]"
  }
];

interface UseCasesProps {
  id?: string;
}

export default function UseCases({ id }: UseCasesProps) {
  return (
    <section id={id} className="elite-section bg-white">
      <div className="elite-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-[--elite-navy] mb-6">Custom Copy Solutions for Every Business</h2>
          <p className="text-gray-600">
            From website content to marketing materials, we help you communicate effectively across all channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1
              }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="elite-card relative z-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <useCase.icon className={`w-8 h-8 text-[--elite-navy] group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-[--elite-navy]">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 text-[--elite-aqua] font-semibold flex items-center gap-2 group-hover:text-[--elite-navy] transition-colors duration-300"
                >
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
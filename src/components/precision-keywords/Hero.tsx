'use client';
import { motion } from 'framer-motion';
import AnimatedGraph from './AnimatedGraph';

export default function Hero() {
  return (
    <section className="standard-section standard-header">
      <div className="standard-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4">
              Boost Your Online Visibility and Drive More Traffic with PrecisionKeywords
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 font-normal text-gray-600">
              Accelerate your digital success with our tailor-made SEO strategies. Increase your market potential, achieve competitive search rankings, and fuel website growth—fast.
            </h2>
            <motion.ul 
              className="mb-8 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {[
                'Targeted SEO strategies that maximize online market presence',
                'Proven methods for boosting search rankings on Google & beyond',
                'Comprehensive solutions for increasing organic traffic & leads',
                'Transparent reporting & performance tracking'
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#2D89EF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </motion.ul>
            <div className="flex gap-4">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="relative bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "EliteCopy transformed our website content completely. The SEO optimization has significantly improved our rankings.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc."
  },
  {
    content: "Their attention to detail and quick turnaround time is impressive. Our conversion rates have increased by 45%.",
    author: "Michael Chen",
    role: "E-commerce Manager",
    company: "GlobalTrade Ltd."
  },
  {
    content: "The team's expertise in crafting compelling copy has helped us establish a strong brand voice across all channels.",
    author: "Emma Williams",
    role: "Brand Manager",
    company: "Innovate Solutions"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, ] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="elite-section bg-[--elite-white] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[--elite-aqua]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[--elite-yellow]/10 rounded-full blur-3xl" />
      </div>

      <div className="elite-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-[--elite-navy] mb-6">What Our Clients Say</h2>
          <p className="text-gray-600">
            Discover how we&apos;ve helped businesses transform their content and achieve their goals.
          </p>
        </motion.div>

        <div className="relative h-[400px] max-w-4xl mx-auto perspective-1000">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
          >
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl h-full">
                <Quote className="w-12 h-12 text-[--elite-aqua] mb-6" />
                <p className="text-xl md:text-2xl text-gray-800 mb-8">
                  {testimonials[currentIndex].content}
                </p>
                <div>
                  <p className="font-semibold text-[--elite-navy]">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-[--elite-aqua]">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white shadow-lg text-[--elite-navy] hover:text-[--elite-aqua] transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-[--elite-navy]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white shadow-lg text-[--elite-navy] hover:text-[--elite-aqua] transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
} 
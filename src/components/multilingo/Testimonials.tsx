'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Emilia Jenny",
    role: "Research Scholar",
    image: "/multilingo/testimonial-1.jpg",
    quote: "I was overwhelmed finalizing my research paper, but EasyMultiLingo's team delivered detailed, insightful feedback that significantly improved my work. They were so quick with the turnaround—truly a life-saver!",
    rating: 5
  },
  {
    name: "Toby Thomas",
    role: "Business Consultant",
    image: "/multilingo/testimonial-2.jpg",
    quote: "I had a tight deadline for a proposal and needed a fresh set of eyes to polish it. The service was unbelievably responsive and professional. Their pointed feedback helped me communicate more effectively. I'll definitely use them again!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="multilingo-section bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--multilingo-primary) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="multilingo-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-[--multilingo-dark] mb-6">
            What Our Satisfied Clients Say
          </h2>
          <p className="text-gray-600">
            Join thousands of professionals who trust EasyMultiLingo for their document review needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="multilingo-card group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="w-8 h-8 rounded-full bg-[--multilingo-accent] flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[--multilingo-primary] font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[--multilingo-accent] fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-600 italic relative">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[--multilingo-secondary] to-transparent 
                rounded-full opacity-50 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-[--multilingo-secondary] to-transparent 
                rounded-full opacity-50 transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: "Happy Clients", value: "1,000+" },
            { label: "Documents Reviewed", value: "5,000+" },
            { label: "Languages Supported", value: "20+" },
            { label: "Success Rate", value: "98%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[--multilingo-primary] to-[--multilingo-accent] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
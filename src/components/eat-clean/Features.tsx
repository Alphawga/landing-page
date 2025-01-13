'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Utensils, Dumbbell, Apple, ClipboardList } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: "Nutritious & Tasty Pasta Dishes",
    description: "Craving something delicious yet healthy? Our pasta recipes balance flavor and nutrition, ensuring every bite is as satisfying as it is nourishing.",
    image: "/eat-clean/pasta-dish.jpg",
    color: "from-[--eat-clean-primary] to-[--eat-clean-accent]"
  },
  {
    icon: Dumbbell,
    title: "Daily Exercise",
    description: "Enhance your wellness with structured workouts. Boost energy levels, improve your mood, and reinforce your healthy eating habits.",
    image: "/eat-clean/workout.jpg",
    color: "from-[--eat-clean-accent] to-[--eat-clean-primary]"
  },
  {
    icon: Apple,
    title: "Natural Foods",
    description: "Explore wholesome ingredients that fuel your body and support your long-term health goals.",
    image: "/eat-clean/natural-foods.jpg",
    color: "from-[--eat-clean-primary] to-[--eat-clean-accent]"
  },
  {
    icon: ClipboardList,
    title: "Nutrition Plans",
    description: "Enjoy flexible meal plans crafted with balanced macro- and micronutrients. Achieve your fitness targets without sacrificing taste.",
    image: "/eat-clean/meal-plan.jpg",
    color: "from-[--eat-clean-accent] to-[--eat-clean-primary]"
  }
];

export default function Features() {
  return (
    <section className="eat-clean-section bg-[--eat-clean-secondary] relative overflow-hidden">
      {/* Background Decoration */}
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
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[--eat-clean-primary]/10 to-transparent rounded-full blur-3xl"
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
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[--eat-clean-accent]/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="eat-clean-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-[--eat-clean-dark] mb-6">
            Empower Your Health Journey with Our Core Focus
          </h2>
          <p className="text-gray-600">
            Discover our comprehensive approach to health and wellness through these key areas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[--eat-clean-primary] mb-3 group-hover:text-[--eat-clean-accent] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[--eat-clean-primary] to-[--eat-clean-accent]"
                />
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
            className="eat-clean-btn-primary"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
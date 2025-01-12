import { TestimonialType, PricingPlan, FAQItem } from '@/types';

export const testimonials: TestimonialType[] = [
  {
    content: "My website was lost in the online jungle until I found PrecisionKeywords. Their SEO expertise boosted my rankings, bringing in a flood of new customers. I'm so grateful!",
    author: "Samuel N.",
    role: "Business Owner"
  },
  {
    content: "Working with the PrecisionKeywords team was a game-changer. They helped me understand SEO and create content that truly ranks. My business is thriving now!",
    author: "Angela L.",
    role: "Marketing Manager"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$99",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Monthly Performance Reports",
      "Basic Technical SEO Audit"
    ],
    isPopular: false
  },
  {
    name: "Professional",
    price: "$199",
    features: [
      "Everything in Starter",
      "Content Strategy & Creation",
      "Link Building Opportunities",
      "Weekly Performance Updates",
      "Priority Support"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "$399",
    features: [
      "Everything in Professional",
      "Custom SEO Strategy",
      "Dedicated SEO Manager",
      "Advanced Competitor Analysis",
      "24/7 Priority Support"
    ],
    isPopular: false
  }
];

export const faqs: FAQItem[] = [
  {
    question: "How can PrecisionKeywords help my business grow online?",
    answer: "We craft SEO strategies that boost your site's visibility on major search engines, leading to more relevant traffic, increased leads, and higher sales."
  },
  {
    question: "What kind of SEO services do you offer?",
    answer: "Our comprehensive suite includes keyword research, on-page optimization, technical SEO audits, content creation, link building, and local targeting."
  },
  {
    question: "How long will it take to see results?",
    answer: "SEO is a long-term investment. Most businesses notice significant improvements within a few months, and our focus is on delivering sustainable growth over time."
  },
  {
    question: "How do I know if my website needs SEO?",
    answer: "If you're not ranking on the first page of Google for relevant keywords or struggling to drive organic traffic, SEO can significantly benefit your site."
  }
]; 
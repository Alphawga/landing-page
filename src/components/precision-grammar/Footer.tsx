'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Document Review', href: '#' },
      { label: 'Grammar Check', href: '#' },
      { label: 'Style Guide', href: '#' },
      { label: 'Plagiarism Check', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];

const contactInfo = [
  { icon: Mail, text: 'support@precisiongrammar.com' },
  { icon: Phone, text: '+234 123 456 7890' },
  { icon: MapPin, text: 'Lagos, Nigeria' },
];

const socialLinks = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Facebook, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-[--primary] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand and Contact */}
          <div className="lg:col-span-2">
            <Link href="/precision-grammar" className="text-2xl font-bold mb-6 block">
              PrecisionGrammar
            </Link>
            <p className="text-white/80 mb-8 max-w-md">
              Professional document review services to help you achieve excellence in your written communication.
            </p>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <Icon size={20} />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80">
              © {new Date().getFullYear()} PrecisionGrammar. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16">
          <Link href="/precision-grammar" className="font-semibold text-xl text-[--primary]">
            PrecisionGrammar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[--primary] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-gray-600 hover:text-[--primary] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="btn-primary w-full">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
} 
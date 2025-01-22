'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-[--multilingo-primary]/10 backdrop-blur-sm'
      }`}
    >
      <nav className="multilingo-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/easy-multilingo" 
            className={`text-2xl font-bold transition-colors duration-300  ${
              isScrolled ? 'text-[--multilingo-primary]' : 'text-[--multilingo-primary]'
            }`}
          >
            EasyMultiLingo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`relative transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-[--multilingo-primary]' 
                    : 'text-[--multilingo-primary] hover:text-[--multilingo-accent]'
                }`}
                whileHover="hover"
              >
                {item.label}
                <motion.div
                  variants={{
                    hover: {
                      width: '100%',
                      transition: { duration: 0.3 }
                    }
                  }}
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 ${
                    isScrolled ? 'bg-[--multilingo-primary]' : 'bg-[--multilingo-accent]'
                  }`}
                />
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`multilingo-btn-primary ${
                isScrolled 
                  ? 'bg-[--multilingo-primary] text-white hover:bg-[--multilingo-accent]' 
                  : 'bg-[--multilingo-accent] text-white hover:bg-[--multilingo-primary]'
              }`}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-[--multilingo-primary]' : 'text-[--multilingo-primary]'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full px-4 py-2 text-gray-600 hover:text-[--multilingo-primary] hover:bg-gray-50 text-left"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="px-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="multilingo-btn-primary w-full"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CreditCard, Calendar, Lock } from 'lucide-react';

interface PricingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
}

export default function PricingDialog({ isOpen, onClose, planName, planPrice }: PricingDialogProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--eat-clean-primary]/5 to-transparent" />
            
            <div className="relative p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[--eat-clean-primary]">
                  {step === 1 ? 'Complete Your Purchase' : 'Thank You!'}
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-[--eat-clean-secondary] p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Selected Plan</p>
                      <p className="font-semibold text-[--eat-clean-primary]">{planName}</p>
                      <p className="text-2xl font-bold text-[--eat-clean-primary] mt-2">{planPrice}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1 text-[--eat-clean-primary]">
                            Card Number
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-[--eat-clean-primary] focus:border-transparent"
                            />
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1 text-[--eat-clean-primary]">
                              Expiry Date
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                required
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-[--eat-clean-primary] focus:border-transparent"
                              />
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1 text-[--eat-clean-primary]">
                              CVC
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                required
                                placeholder="123"
                                className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-[--eat-clean-primary] focus:border-transparent"
                              />
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full eat-clean-btn-primary flex items-center justify-center gap-2"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />
                            Processing...
                          </>
                        ) : (
                          'Complete Purchase'
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-[--eat-clean-accent] flex items-center justify-center"
                    >
                      <motion.svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[--eat-clean-primary] mb-2">
                      Payment Successful!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your purchase. Check your email for further instructions.
                    </p>
                    <button
                      onClick={onClose}
                      className="eat-clean-btn-primary"
                    >
                      Get Started
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 
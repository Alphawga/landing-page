'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';

interface PricingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
}

export default function PricingDialog({ isOpen, onClose, planName, planPrice }: PricingDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setStep(2);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={dialogVariants}
            className="bg-white rounded-2xl w-full max-w-md p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">
                {step === 1 ? 'Complete Your Purchase' : 'Thank You!'}
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="text-lg font-medium mb-2">{planName}</p>
                  <p className="text-gray-600">{planPrice} per document</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      title="Full Name"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[--primary] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      title="Email"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[--primary] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Document Type</label>
                    <select
                      required
                      title="Document Type"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[--primary] focus:border-transparent"
                    >
                      <option value="">Select document type</option>
                      <option value="academic">Academic Paper</option>
                      <option value="business">Business Document</option>
                      <option value="technical">Technical Document</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Processing...
                    </>
                  ) : (
                    'Continue to Payment'
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-[--accent] rounded-full mx-auto flex items-center justify-center"
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                </div>
                <p className="text-gray-600 mb-6">
                  We&apos;ve received your request. Check your email for next steps.
                </p>
                <button onClick={onClose} className="btn-primary w-full">
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
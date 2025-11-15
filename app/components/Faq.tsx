'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface Faq {
  q: string;
  a: string;
}

interface FaqItemProps {
  faq: Faq;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left cursor-pointer"
      >
        <h3 className="font-semibold text-lg text-gray-800">{faq.q}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqData = [
    { q: "Is there a long-term contract?", a: "No. ABA partners sign short-term  agreements. Speech & Psych providers can cancel anytime." },
    { q: "Who owns the patient relationship?", a: "You do — always. We simply handle referrals and operations." },
    { q: "Is WellChild HIPAA-compliant?", a: "100%. We use secure, encrypted systems for all data and communication." },
    { q: "Can I join if I already have my own clients?", a: "Absolutely. WellChild supplements your caseload — you keep full independence." }
  ];

  return (
    <section className="bg-[#f4f4f2] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Common Questions</h2>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-lg">
          {faqData.map((faq, index) => (
            <motion.div variants={fadeInUp} key={index}>
              <FaqItem
                faq={faq}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
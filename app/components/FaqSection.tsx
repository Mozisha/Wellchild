// app/components/FaqSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// UPDATED: FAQ content has been revised and expanded
const faqData = [
  {
    question: 'What is WellChild Inc.',
    answer:
      'The WellChild Directory is a trusted online platform that help parents find qualified pediatric providers including speech therapists, psychologists, ABA therapists, occupational therapists, and developmental specialists all in one place. Our mission is to make it easier for families to access care for autism, ADHD, speech delays, and early childhood development.',
  },
  {
    question: 'Are the providers listed on WellChild verified and licensed?',
    answer:
      'Yes. Every provider featured in the WellChild Directory is verified for active licensure, credentials, and experience in pediatric care. We partner only with trusted clinicians who specialize in supporting children’s development.',
  },
  {
    question: 'Does WellChild accept insurance or private pay?',
    answer:
      'WellChild offers two simple options: Insurance Pathway (for families using their health insurance) and Concierge Pathway (for faster private-pay scheduling). You can select your preferred option when booking to see which providers match your coverage. For any service: Autism Evaluation, ADHD Evaluation, Speech Therapy or ABA Therapy.',
  },
  {
    question: 'How does WellChild help me find the right provider for my child?',
    answer:
      'Simply search by your child’s needs such as autism evaluation, ADHD evaluation, speech therapy, or ABA therapy and filter by insurance, location, or specialty. Our matching system connects you with licensed, vetted providers so you can book an appointment quickly and confidently.',
  },
  {
    question: 'What ages of children does WellChild support?',
    answer:
      'Our providers work with children from infancy through young adulthood (6 months-21 years). From early milestones and first words to teen social skills, speech therapy, ABA therapy and ADHD/Autism evaluations. Whether your child is a baby, preschooler, or teen, you’ll find specialists who understand their unique developmental stage.',
  },
  {
    question: 'How do I schedule an appointment through WellChild?',
    answer:
      'For autism and ADHD evaluations, speech therapy or ABA therapy, click “Book Now” or “Get Matched” to share your child’s details. Our team or the provider’s office will contact you to confirm insurance verification, availability and next steps, often within 24–48 hours. If private pay then will be booked instantly.',
  }
];

const FaqItem = ({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      {/* UPDATED: Added cursor-pointer */}
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left cursor-pointer"
      >
        <h3 className={`font-poppins text-lg font-semibold ${isOpen ? 'text-[#1E606A]' : 'text-gray-800'}`}>
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-[#1E606A]' : 'text-gray-500'}`} />
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
            <p className="font-lora text-gray-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F9FA] py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
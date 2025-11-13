'use client';

import React, { useState } from 'react';
// UPDATED: Import the 'Variants' type from framer-motion
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ChevronDown, Star, Users, Briefcase, FileText, BadgeCheck } from 'lucide-react';

// Animation Variants for reusability
// UPDATED: Explicitly typed with the 'Variants' type to resolve the error
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

// FAQ Item Component
const FaqItem = ({ faq, isOpen, onClick }: { faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }) => {
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


export default function ProvidersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqData = [
      { q: "Is there a long-term contract?", a: "No. ABA partners sign short-term RCM agreements. Speech & Psych providers can cancel anytime." },
      { q: "Who owns the patient relationship?", a: "You do — always. We simply handle referrals and operations." },
      { q: "Is WellChild HIPAA-compliant?", a: "100%. We use secure, encrypted systems for all data and communication." },
      { q: "Can I join if I already have my own clients?", a: "Absolutely. WellChild supplements your caseload — you keep full independence." }
  ];
    
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#F1F5FF] pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif text-[#103040] leading-tight">
                    Join Florida’s Leading Pediatric Network for Autism, ABA, and Developmental Care
                </motion.h1>
                <motion.p variants={fadeInUp} className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                    WellChild connects you with qualified families, handles your admin, and helps you grow — so you can focus on delivering quality care.
                </motion.p>
                <motion.div variants={fadeInUp} className="mt-10">
                    <Link href="/contact">
                        <button className="bg-[#51AFBA] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#459ca5] transition-transform duration-200 hover:scale-105 cursor-pointer">
                            Apply to Join the WellChild Network
                        </button>
                    </Link>
                </motion.div>
                <motion.div variants={fadeInUp} className="mt-12 flex justify-center items-center gap-x-6 gap-y-2 flex-wrap">
                    <div className="flex items-center gap-2 text-sm text-gray-600"><Check className="text-green-600" size={18}/>HIPAA-Compliant</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"><Check className="text-green-600" size={18}/>Founded by Licensed Clinicians</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"><Check className="text-green-600" size={18}/>Featured in Orlando Voyager</div>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* 2. WHY JOIN WELLCHILD */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Built by Clinicians, for Clinicians.</h2>
                    <p className="mt-6 text-lg text-gray-600 italic border-l-4 border-[#FFDE59] pl-6">
                        "As a Speech-Language Pathologist and mom, I know how time-consuming it is to manage clients, paperwork, and growth all at once. That’s why I built WellChild — to simplify how developmental providers connect with families and run their practices."
                    </p>
                    <p className="mt-6 text-lg text-gray-600">We help:</p>
                    <ul className="mt-4 space-y-3 text-lg">
                        <li className="flex items-start gap-3"><Check className="text-[#51AFBA] mt-1 flex-shrink-0"/><span><strong>ABA providers</strong> offload billing, scheduling, and insurance headaches.</span></li>
                        <li className="flex items-start gap-3"><Check className="text-[#51AFBA] mt-1 flex-shrink-0"/><span><strong>Speech and Psychology providers</strong> get qualified, pre-screened referrals.</span></li>
                    </ul>
                     <div className="mt-8">
                        <Link href="#how-it-works" className="font-bold text-[#51AFBA] hover:underline text-lg">
                            See How It Works 👉
                        </Link>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <Image src="/provider-collage.png" alt="Clinician with a child" width={600} height={600} className="rounded-2xl shadow-xl"/>
                </motion.div>
            </div>
        </div>
      </section>
      
      {/* 3. TIER 1: ABA PROVIDERS */}
      <section className="bg-[#f4f4f2] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="font-semibold text-[#1E606A]">FOR ABA PROVIDERS</p>
                <h2 className="mt-2 text-4xl md:text-5xl font-serif text-gray-800">Full RCM Partnership for ABA Providers</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">We manage your back office so you can focus 100% on therapy.</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3"><Check className="text-green-600"/> What We Handle</h3>
                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li className="flex items-start gap-3"><Users size={20} className="text-[#51AFBA] mt-1"/>Billing, claim submission & collections</li>
                        <li className="flex items-start gap-3"><Users size={20} className="text-[#51AFBA] mt-1"/>Scheduling & intake management</li>
                        <li className="flex items-start gap-3"><Users size={20} className="text-[#51AFBA] mt-1"/>Insurance credentialing & verification</li>
                        <li className="flex items-start gap-3"><Users size={20} className="text-[#51AFBA] mt-1"/>Parent coordination & reminders</li>
                    </ul>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">💡 Your Focus</h3>
                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li className="flex items-start gap-3"><Briefcase size={20} className="text-[#51AFBA] mt-1"/>Delivering high-quality clinical care</li>
                        <li className="flex items-start gap-3"><Briefcase size={20} className="text-[#51AFBA] mt-1"/>Supervising therapists & improving outcomes</li>
                        <li className="flex items-start gap-3"><Briefcase size={20} className="text-[#51AFBA] mt-1"/>Growing your impact</li>
                        <li className="flex items-start gap-3"><Briefcase size={20} className="text-[#51AFBA] mt-1"/>Client retention & quality assurance</li>
                    </ul>
                </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
                <p className="text-xl font-semibold text-gray-700 italic">"Your team, your patients — our systems."</p>
                <Link href="/contact">
                    <button className="mt-6 bg-[#FFDE59] text-[#33343B] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105">
                        🌟 Apply for RCM Partnership
                    </button>
                </Link>
                <p className="mt-4 text-sm text-red-600 font-semibold">Currently onboarding 5 new ABA partners across Florida this quarter.</p>
            </motion.div>
        </div>
      </section>

      {/* 4. TIER 2: SPEECH & PSYCH PROVIDERS */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="font-semibold text-[#1E606A]">FOR SPEECH & CLINICAL PSYCHOLOGY PROVIDERS</p>
                <h2 className="mt-2 text-4xl md:text-5xl font-serif text-gray-800">Referral Program for Speech & Clinical Psych Providers</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Focus on your patients — we’ll send the right ones your way.</p>
                <p className="mt-8 text-lg text-gray-700">We help you fill your schedule with high-quality, pre-screened referrals for:</p>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Speech-Language Evaluations & Therapy</span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">Autism, ADHD, and Psych Evaluations</span>
                </div>
                 <p className="mt-8 text-lg text-gray-700 font-bold">You’ll get:</p>
                <ul className="mt-4 space-y-3 text-lg inline-block text-left">
                    <li className="flex items-start gap-3"><Check className="text-green-600 mt-1"/>Verified, ready-to-book families</li>
                    <li className="flex items-start gap-3"><Check className="text-green-600 mt-1"/>Light admin help: intake forms, scheduling</li>
                    <li className="flex items-start gap-3"><Check className="text-green-600 mt-1"/>No contracts — pay only when we send you patients</li>
                </ul>
                 <div className="mt-10">
                    <Link href="/contact">
                        <button className="bg-[#FFDE59] text-[#33343B] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105">
                            💬 Join the Referral Network
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="bg-[#F1F5FF] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                  <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Get Started in 3 Simple Steps</h2>
              </motion.div>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div variants={fadeInUp} className="text-center p-6">
                      <div className="flex justify-center items-center h-20 w-20 mx-auto bg-white rounded-full shadow-lg border-4 border-[#FCC0C5]">
                          <FileText className="h-10 w-10 text-[#1E606A]"/>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-gray-800">1. Apply Online</h3>
                      <p className="mt-2 text-gray-600">Tell us your specialty, license, and service areas.</p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="text-center p-6">
                      <div className="flex justify-center items-center h-20 w-20 mx-auto bg-white rounded-full shadow-lg border-4 border-[#FFD483]">
                          <BadgeCheck className="h-10 w-10 text-[#1E606A]"/>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-gray-800">2. Verification & Onboarding</h3>
                      <p className="mt-2 text-gray-600">We confirm credentials and set up your profile.</p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="text-center p-6">
                      <div className="flex justify-center items-center h-20 w-20 mx-auto bg-white rounded-full shadow-lg border-4 border-[#4EB0B9]">
                          <Users className="h-10 w-10 text-[#1E606A]"/>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-gray-800">3. Start Receiving Families</h3>
                      <p className="mt-2 text-gray-600">Through our secure EHR and scheduling system.</p>
                  </motion.div>
              </motion.div>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
                   <Link href="/contact">
                        <button className="bg-[#51AFBA] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#459ca5] transition-transform duration-200 hover:scale-105">
                           Start the Application
                        </button>
                    </Link>
              </motion.div>
          </div>
      </section>

      {/* 6. PROVIDER TESTIMONIALS */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Providers Love Working With WellChild</h2>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                    <p className="text-lg text-gray-700 italic">"WellChild completely took billing off my plate — I get paid faster and spend more time with clients."</p>
                    <p className="mt-4 font-bold text-gray-800">— Dr. J. Lopez, BCBA</p>
                </motion.div>
                 <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                    <p className="text-lg text-gray-700 italic">"I started getting quality referrals within two weeks. Parents were already pre-screened and ready to start."</p>
                    <p className="mt-4 font-bold text-gray-800">— Maria G., Speech-Language Pathologist</p>
                </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
                <div className="flex items-center gap-3 bg-[#F1F5FF] px-4 py-2 rounded-full font-semibold text-gray-700"><Star className="text-yellow-500 fill-current"/>Serving 500+ Florida Families</div>
                <div className="flex items-center gap-3 bg-[#F1F5FF] px-4 py-2 rounded-full font-semibold text-gray-700"><Star className="text-yellow-500 fill-current"/>Average Provider Satisfaction: 4.9 / 5</div>
            </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
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

      {/* 8. FINAL CTA */}
      <section className="bg-[#1E606A] py-20 md:py-28 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif">
                      Let’s Simplify Pediatric Care — Together.
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
                      We’re currently onboarding new ABA RCM partners and referral-only Speech & Psych providers across Florida. Join today to start receiving pre-qualified families within weeks.
                  </motion.p>
                  <motion.div variants={fadeInUp} className="mt-10">
                      <Link href="/contact">
                          <button className="bg-[#FFDE59] text-[#33343B] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105">
                              🌟 Apply Now — Limited RCM Spots Available
                          </button>
                      </Link>
                  </motion.div>
              </motion.div>
          </div>
      </section>
    </main>
  );
}
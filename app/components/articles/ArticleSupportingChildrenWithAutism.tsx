// app/components/articles/ArticleSupportingChildrenWithAutism.tsx
import React from 'react';
import Link from 'next/link';

// A reusable sub-component for the section headings with emojis
const SectionHeader = ({ emoji, title }: { emoji: string; title: string }) => (
  <div className="mt-12 pt-6 border-t border-gray-200">
    <h2 className="text-3xl font-bold font-serif text-gray-800">
      <span className="mr-3">{emoji}</span>{title}
    </h2>
  </div>
);

export default function ArticleSupportingChildrenWithAutism() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-500">
        By Michelle McGuinness, M.A., CCC-SLP | WellChild Center for Development
      </p>
      <hr className="!my-8" />

      <SectionHeader emoji="💙" title="Understanding Autism — and Why Early Support Matters" />
      <p className="text-lg leading-relaxed text-gray-700">
        Autism, or Autism Spectrum Disorder (ASD), affects how a child communicates, socializes, and experiences the world. While autism looks different in every child, early support — especially <strong>autism evaluations</strong> and <strong>Applied Behavior Analysis (ABA) therapy</strong> — can make a lasting difference in helping children reach their full potential.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        At <strong>WellChild Center for Development</strong>, we guide families through the <strong>autism testing and diagnosis process</strong>, then connect them with trusted <strong>ABA therapy providers</strong> and other specialists across Florida.
      </p>

      <SectionHeader emoji="🧩" title="Why an Autism Evaluation is the First Step" />
      <p className="text-lg leading-relaxed text-gray-700">
        If you notice differences in communication, play, or behavior, an <strong>autism evaluation</strong> is the first step toward understanding your child’s needs. Our licensed psychologists and speech-language pathologists perform <strong>comprehensive evaluations</strong> that look at:
      </p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Communication and social skills</li>
        <li className="text-lg leading-relaxed text-gray-700">Play and imitation</li>
        <li className="text-lg leading-relaxed text-gray-700">Emotional regulation</li>
        <li className="text-lg leading-relaxed text-gray-700">Repetitive behaviors or sensory differences</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        A clear diagnosis opens the door to early supports like <strong>ABA therapy, speech therapy, and occupational therapy</strong> — often covered by insurance once eligibility is established.
      </p>

      <SectionHeader emoji="🌈" title="What ABA Therapy Is — and How It Helps" />
      <p className="text-lg leading-relaxed text-gray-700">
        <strong>Applied Behavior Analysis (ABA)</strong> is a research-backed therapy that helps children with autism <strong>learn meaningful skills and improve daily functioning.</strong> At its core, ABA focuses on breaking big goals into small, teachable steps. Through structured play, positive reinforcement, and data-based strategies, therapists help children:
      </p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Improve communication and language skills</li>
        <li className="text-lg leading-relaxed text-gray-700">Develop social interaction and play</li>
        <li className="text-lg leading-relaxed text-gray-700">Strengthen attention and independence</li>
        <li className="text-lg leading-relaxed text-gray-700">Reduce frustration and challenging behaviors</li>
        <li className="text-lg leading-relaxed text-gray-700">Build routines and coping tools</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        At <strong>WellChild</strong>, we collaborate with <strong>ABA therapy providers</strong> throughout Florida to ensure families can start services quickly — often within weeks of diagnosis, not months.
      </p>
      
      <SectionHeader emoji="👶" title="Early Signs That May Indicate a Need for an Autism Evaluation" />
      <p className="text-lg leading-relaxed text-gray-700">Parents should consider an <strong>autism evaluation</strong> if their child:</p>
       <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Avoids eye contact or rarely responds to their name</li>
        <li className="text-lg leading-relaxed text-gray-700">Has delayed speech or limited gestures</li>
        <li className="text-lg leading-relaxed text-gray-700">Repeats words, phrases, or movements</li>
        <li className="text-lg leading-relaxed text-gray-700">Prefers routines and struggles with transitions</li>
        <li className="text-lg leading-relaxed text-gray-700">Shows intense interests or sensory sensitivities</li>
        <li className="text-lg leading-relaxed text-gray-700">Has frequent meltdowns or difficulty self-soothing</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        If you’re unsure whether your child needs ABA therapy or another type of intervention, WellChild can guide you through the decision — starting with a developmental or psychological evaluation.
      </p>

      <SectionHeader emoji="💬" title="ABA Therapy in Action: Everyday Skills That Make a Difference" />
      <p className="text-lg leading-relaxed text-gray-700">
        ABA therapy isn’t just “behavior training” — it’s about <strong>teaching children how to learn, communicate, and connect.</strong> Therapy goals often include:
      </p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Following directions</li>
        <li className="text-lg leading-relaxed text-gray-700">Taking turns and sharing</li>
        <li className="text-lg leading-relaxed text-gray-700">Expressing needs and emotions</li>
        <li className="text-lg leading-relaxed text-gray-700">Using visual supports</li>
        <li className="text-lg leading-relaxed text-gray-700">Playing cooperatively</li>
        <li className="text-lg leading-relaxed text-gray-700">Building independence in routines (feeding, dressing, toileting)</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        At WellChild, we believe therapy should feel <strong>positive, natural, and family-centered,</strong> not rigid or clinical.
      </p>

      <SectionHeader emoji="🧠" title="Integrating ABA with Other Therapies" />
      <p className="text-lg leading-relaxed text-gray-700">
        The best results come from a <strong>multidisciplinary approach</strong> — that’s why WellChild connects families to:
      </p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700"><strong>Speech Therapy:</strong> for language, articulation, and feeding</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Occupational Therapy:</strong> for sensory integration and fine motor skills</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Psychological Services:</strong> for ADHD, anxiety, and co-occurring concerns</li>
      </ul>
       <p className="text-lg leading-relaxed text-gray-700">
        We work alongside <strong>ABA therapy teams</strong> to ensure consistent strategies across home, clinic, and school.
      </p>

      <SectionHeader emoji="🏡" title="What Parents Can Do at Home" />
       <p className="text-lg leading-relaxed text-gray-700">
        You don’t need to be a therapist to make a difference. Here are daily routines that reinforce ABA principles:
      </p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700"><strong>Use positive reinforcement:</strong> praise every success (“You did it!”)</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Give clear, short directions</strong> with visuals or gestures</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Provide structured choices</strong> (“Do you want blue cup or red cup?”)</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Model calm breathing</strong> or sensory breaks</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Build routines and use visual schedules</strong></li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        Small, consistent moments add up — especially when paired with professional ABA therapy support.
      </p>

      <SectionHeader emoji="📍" title="Why Families Choose WellChild" />
      <p className="text-lg leading-relaxed text-gray-700">
        At <strong>WellChild Center for Development</strong>, we streamline the path from concern to care:
      </p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">🧑‍⚕️ <strong>Autism and ADHD evaluations</strong> by licensed psychologists</li>
        <li className="text-lg leading-relaxed text-gray-700">🧩 <strong>Care coordination with ABA providers</strong> statewide</li>
        <li className="text-lg leading-relaxed text-gray-700">💬 <strong>Speech and language therapy</strong> to complement behavioral goals</li>
        <li className="text-lg leading-relaxed text-gray-700">🕓 <strong>Fast scheduling and virtual options</strong> across Florida</li>
        <li className="text-lg leading-relaxed text-gray-700">💰 <strong>Affordable and insurance-friendly plans</strong></li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        Whether you’re in <strong>Orlando, Miami, Tampa, or anywhere in Florida</strong>, we’re here to help you take the next step — from <strong>evaluation to treatment</strong> — with guidance you can trust.
      </p>
      <div className="mt-8 text-lg space-y-2">
        <p>📩 <strong>Email:</strong> <a href="mailto:info@wellchildinc.com" className="text-blue-600 hover:underline">info@wellchildinc.com</a></p>
        <p>🌐 <strong>Website:</strong> <Link href="/" className="text-blue-600 hover:underline">www.wellchildinc.com</Link></p>
        <p>📱 <strong>Social:</strong> @wellchildinc</p>
      </div>

    </div>
  );
}
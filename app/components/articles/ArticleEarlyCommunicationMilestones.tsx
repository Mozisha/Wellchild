// app/components/articles/ArticleEarlyCommunicationMilestones.tsx
import React from 'react';

// A reusable sub-component for blockquotes
const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-8 bg-gray-100 p-6 rounded-xl border-l-4 border-[#65B4B4] text-xl text-gray-700 not-italic">
    "{children}"
  </blockquote>
);

export default function ArticleEarlyCommunicationMilestones() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10 first:mt-0">🧠 Why Early Communication Matters</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        The first few years of life are a critical period for brain and language development. Babies are constantly learning how to communicate — first through eye contact, cooing, and gestures, and later with words and sentences.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        When parents understand early speech and communication milestones, they can encourage growth, track progress, and recognize when to seek extra support — including an autism evaluation if certain red flags appear. At WellChild Center for Development, our team of psychologists and speech-language pathologists helps families navigate these early years with confidence through autism, ADHD, and speech delay evaluations.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">👶 Early Speech and Communication Milestones (Birth to Age 3)</h2>
      <p className="text-lg leading-relaxed text-gray-700">Every child develops at their own pace, but most follow a predictable sequence of communication milestones. Here’s a quick overview:</p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700"><strong>0–6 months:</strong> Reacts to sounds, smiles when spoken to, coos and babbles.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>6–12 months:</strong> Responds to their name, uses gestures like pointing or waving, and says simple words like “mama” or “dada.”</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>12–24 months:</strong> Uses 5–50+ words, follows simple directions (“Get the ball”), and combines words (“More milk”).</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>2–3 years:</strong> Puts words into short sentences (“I want cookie”), asks questions, and is understood by parents most of the time.</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">When children fall behind on these milestones, it can indicate a speech delay — or, in some cases, early signs of autism spectrum disorder (ASD).</p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">🚩 Red Flags: When to Seek an Autism Evaluation</h2>
      <p className="text-lg leading-relaxed text-gray-700">It’s never too early to check in if you’re concerned about your child’s speech or social skills. You may want to request an autism evaluation or speech and language screening if your child:</p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Isn’t babbling or making sounds by 6–9 months</li>
        <li className="text-lg leading-relaxed text-gray-700">Has no words by 15 months</li>
        <li className="text-lg leading-relaxed text-gray-700">Doesn’t use two-word phrases by age 2</li>
        <li className="text-lg leading-relaxed text-gray-700">Avoids eye contact or doesn’t respond to their name</li>
        <li className="text-lg leading-relaxed text-gray-700">Rarely uses gestures (like waving or pointing)</li>
        <li className="text-lg leading-relaxed text-gray-700">Repeats words or phrases without meaning (echolalia)</li>
        <li className="text-lg leading-relaxed text-gray-700">Has difficulty interacting, sharing attention, or playing with others</li>
        <li className="text-lg leading-relaxed text-gray-700">Becomes upset by changes or has repetitive movements (hand flapping, spinning, lining up toys)</li>
      </ul>
      <Quote>
        These behaviors don’t always mean autism — but they do signal the need for a developmental or psychological evaluation. Early identification makes a big difference.
      </Quote>
      
      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">💬 What Parents Can Do at Home</h2>
      <p className="text-lg leading-relaxed text-gray-700">While you’re waiting for an evaluation or starting therapy, small daily interactions can make a big difference in your child’s language and connection skills:</p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700"><strong>Narrate your day:</strong> Talk about what you’re doing — “We’re putting on socks!”</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Use repetition:</strong> Repeat simple, meaningful words like “up,” “go,” or “more.”</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Pause and wait:</strong> Give your child time to respond, even with gestures.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Follow their lead:</strong> Talk about what your child is looking at or interested in.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Sing and read:</strong> Songs and picture books build rhythm, attention, and vocabulary.</li>
      </ul>
    </div>
  );
}
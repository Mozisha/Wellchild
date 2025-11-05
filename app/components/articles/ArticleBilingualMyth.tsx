// app/components/articles/ArticleBilingualMyth.tsx
import React from 'react';

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-8 bg-gray-100 p-6 rounded-xl border-l-4 border-[#65B4B4] text-xl text-gray-700 not-italic">
    "{children}"
  </blockquote>
);

export default function ArticleBilingualMyth() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-gray-700">
        The simple answer is NO. As a parent raising a bilingual child, you might have encountered concerns about your child's potential confusion from learning two languages simultaneously, but this is a widespread misunderstanding. Numerous studies have debunked this myth, affirming that bilingualism does not cause confusion. We strongly encourage you to continue exposing your child to multiple languages as it offers numerous benefits.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        It's natural for parents to worry if their bilingual child seems to have fewer words than their monolingual peers. However, it's crucial to understand that a bilingual child's language isn't two monolingual children in one body but a unique blend of both languages. This might lead to varied language milestones. For instance, while milestones might indicate a child should know 50 words by age two, a bilingual child might meet this benchmark when counting words across both languages.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        If concerns persist, seeking an evaluation from a certified bilingual speech-language pathologist who comprehends these nuances is recommended.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">Addressing Concerns about Speech and Language Delays</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Even if a child is showing signs of speech or language delays or has a diagnosis, bilingualism does not further complicate the situation. Research affirms that bilingualism doesn't cause confusion or delays. If a child experiences speech or language delays, it generally occurs in both languages. Bilingual children facing language impairments encounter challenges similar to those faced by monolingual children with the same impairment degree.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">Concerns About School Performance and Social Skills</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        If a child appears to mix languages or faces challenges expressing themselves in one language, it's a normal process. In fact, bilingual children often possess a larger vocabulary than their monolingual peers, providing them with more tools for communication.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        If your child is starting a school where the language is different than the one that they speak at home, there may be a 'silent period' when the child understands but doesn't immediately speak the new language. This transition period can last for weeks, and it's essential to support the child and inform teachers about this process.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">How Bilingual Parents Can Help Their Children</h2>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700"><strong>Repetition is key.</strong> Children need to hear new words multiple times before using them.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Provide verbal models</strong> to teach correct pronunciation and encourage repetition.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Offer verbal prompts</strong> to guide the child in remembering new words.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Use scaffolding techniques</strong> to enhance their language by expanding on what they say.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>Patience is essential.</strong> Recognize that language development is a unique process for each child.</li>
      </ul>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">Benefits of Bilingualism</h2>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Enhances brain function</li>
        <li className="text-lg leading-relaxed text-gray-700">Cultivates cultural awareness</li>
        <li className="text-lg leading-relaxed text-gray-700">Boosts academic performance</li>
        <li className="text-lg leading-relaxed text-gray-700">Improves job market competitiveness</li>
        <li className="text-lg leading-relaxed text-gray-700">Sustains mental acuity for longer periods</li>
        <li className="text-lg leading-relaxed text-gray-700">Fosters empathy and inclusion</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        Encouraging bilingualism in your child offers a multitude of advantages, and as parents, your support and understanding play a vital role in this incredible linguistic journey.
      </p>
    </div>
  );
}
// app/components/articles/ArticleEarlySignsOfAutism.tsx
import React from 'react';
import Link from 'next/link';

// A reusable sub-component for section headings with emojis
const SectionHeader = ({ emoji, title }: { emoji: string; title: string }) => (
  <div className="mt-12 pt-6 border-t border-gray-200">
    <h2 className="text-3xl font-bold font-serif text-gray-800">
      <span className="mr-3">{emoji}</span>{title}
    </h2>
  </div>
);

// Reusable component for nested lists for cleaner code
const NestedList = ({ title, items }: { title: string, items: string[] }) => (
  <li>
    <strong className="text-lg text-gray-800">{title}</strong>
    <ul className="list-disc space-y-2 mt-2 pl-5">
      {items.map((item, index) => (
        <li key={index} className="text-lg leading-relaxed text-gray-700">{item}</li>
      ))}
    </ul>
  </li>
);

export default function ArticleEarlySignsOfAutism() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-500">
        By Michelle McGuinness, M.A., CCC-SLP | WellChild Center for Development
      </p>
      <hr className="!my-8" />

      <SectionHeader emoji="🧠" title="Understanding Autism in Plain Language" />
      <p className="text-lg leading-relaxed text-gray-700">
        Autism, or Autism Spectrum Disorder (ASD), is a neurodevelopmental difference that affects social communication, play, and behavior patterns. Signs often appear within the first two years of life, though every child’s strengths and needs look different. At WellChild Center for Development, we help families recognize the early signs of autism and access diagnostic evaluations and developmental screenings so children can get the right support early on.
      </p>

      <SectionHeader emoji="👶" title="Early Signs of Autism by Age" />
      <p className="text-lg leading-relaxed text-gray-700">Every baby develops at their own pace — but when certain social or communication skills don’t appear on time, it can be a sign to check in.</p>
      <ul className="space-y-6 list-none">
        <NestedList title="0–6 Months" items={["Limited eye contact or smiles", "Doesn’t look at faces during feeding or cuddles", "Rarely coos or “talks back” to voices"]} />
        <NestedList title="6–12 Months" items={["Doesn’t consistently respond to their name", "Rarely shares smiles or joyful expressions", "Prefers objects over people", "Limited back-and-forth sounds or gestures"]} />
        <NestedList title="12–18 Months" items={["Few or no gestures (pointing, waving, nodding)", "Doesn’t point to show interest or request something", "Rarely imitates or shares enjoyment", "Loss of words or gestures once used (regression)"]} />
        <NestedList title="18–24 Months" items={["Little or no pretend play", "Repetitive movements (hand-flapping, spinning, lining up toys)", "Strong need for sameness; distress with small changes"]} />
        <NestedList title="2–3 Years" items={["Limited interest in peers or difficulty joining play", "Echolalia (repeating words or phrases) without flexible use", "Sensory differences — may seek or avoid sounds, lights, or textures", "Picky eating or unusual reactions to touch"]} />
      </ul>

      <SectionHeader emoji="🚩" title="When to Seek an Autism Evaluation" />
      <p className="text-lg leading-relaxed text-gray-700">According to the CDC and American Academy of Pediatrics, developmental screenings should occur at 9, 18, and 30 months, and autism-specific screenings at 18 and 24 months. Parents should request an autism evaluation if a child shows any of the following:</p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">No big smiles by 6 months</li>
        <li className="text-lg leading-relaxed text-gray-700">No babbling by 12 months</li>
        <li className="text-lg leading-relaxed text-gray-700">No gestures (pointing, waving) by 12 months</li>
        <li className="text-lg leading-relaxed text-gray-700">No single words by 16 months</li>
        <li className="text-lg leading-relaxed text-gray-700">No two-word phrases by 24 months</li>
        <li className="text-lg leading-relaxed text-gray-700">Any loss of language or social skills at any age</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">If you’re concerned, don’t wait for a formal diagnosis — you can begin Early Intervention or speech therapy based on observed needs.</p>
      
      <SectionHeader emoji="🌈" title="A Strengths-Based Perspective" />
      <p className="text-lg leading-relaxed text-gray-700">
        Autistic children often show remarkable strengths — focus, memory, pattern recognition, and deep interests that can become powerful learning tools. At WellChild, we encourage families to build on these strengths by using their child’s interests to teach communication, play, and regulation skills.
      </p>

      <SectionHeader emoji="🩺" title="How an Autism Evaluation Works" />
      <p className="text-lg leading-relaxed text-gray-700">At WellChild Center for Development, our licensed psychologists and speech-language pathologists perform comprehensive autism and ADHD evaluations through a mix of play-based observation, caregiver interviews, and standardized assessments. We assess:</p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Communication & Language — how your child expresses wants, needs, and ideas</li>
        <li className="text-lg leading-relaxed text-gray-700">Social Interaction — eye contact, play, and shared enjoyment</li>
        <li className="text-lg leading-relaxed text-gray-700">Behavior & Flexibility — routines, transitions, and emotional regulation</li>
        <li className="text-lg leading-relaxed text-gray-700">Sensory Differences — reactions to sound, touch, light, and textures</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">Results help families understand whether their child meets criteria for autism, ADHD, both, or another developmental profile — and, most importantly, what supports to start immediately.</p>

      <SectionHeader emoji="💬" title="How Parents Can Support Communication at Home" />
      <p className="text-lg leading-relaxed text-gray-700">You don’t need special equipment — everyday routines are full of opportunities to build connection:</p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Narrate your actions: “We’re putting on your shoes!”</li>
        <li className="text-lg leading-relaxed text-gray-700">Pause and wait: Give space for your child to respond or gesture.</li>
        <li className="text-lg leading-relaxed text-gray-700">Follow their lead: Talk about what your child is looking at or doing.</li>
        <li className="text-lg leading-relaxed text-gray-700">Use visuals and gestures: Pictures, pointing, and signs reduce frustration.</li>
        <li className="text-lg leading-relaxed text-gray-700">Celebrate all communication: Whether speech, sign, or AAC, connection comes first.</li>
      </ul>

      <SectionHeader emoji="⚡" title="10-Day Quick-Start Plan for Parents" />
       <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700"><strong>1–2️⃣</strong> Track behaviors and collect short videos of daily routines.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>3–4️⃣</strong> Add visual supports like choice boards or “First/Then” cards.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>5–6️⃣</strong> Create communication opportunities with toys or snacks just out of reach.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>7–8️⃣</strong> Visit your pediatrician and request an ASD screening (e.g., M-CHAT-R/F).</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>9–🔟</strong> Call Early Intervention (Birth–3) or your local school district (age 3+) for evaluation referrals.</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">Early action reduces stress and opens doors to therapy and community support faster.</p>

      <SectionHeader emoji="📍" title="Why Choose WellChild for an Autism Evaluation" />
      <p className="text-lg leading-relaxed text-gray-700">
        At WellChild Center for Development, we make the evaluation process approachable, evidence-based, and family-centered.
      </p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">🧑‍⚕️ Licensed clinical psychologists & speech-language pathologists</li>
        <li className="text-lg leading-relaxed text-gray-700">⏱️ Fast scheduling — virtual & in-person options across Florida</li>
        <li className="text-lg leading-relaxed text-gray-700">💰 Affordable pricing & interest-free payment plans</li>
        <li className="text-lg leading-relaxed text-gray-700">💬 Clear next steps for therapy and school referrals</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        Whether you’re in <strong>Orlando, Miami, Tampa, or anywhere in Florida</strong>, our team is here to guide your family through the autism screening and evaluation process with empathy and expertise.
      </p>
      <div className="mt-8 text-lg space-y-2">
        <p>📩 <strong>Email:</strong> <a href="mailto:info@wellchildinc.com" className="text-blue-600 hover:underline">info@wellchildinc.com</a></p>
        <p>🌐 <strong>Website:</strong> <Link href="/" className="text-blue-600 hover:underline">www.wellchildinc.com</Link></p>
        <p>📱 <strong>Social:</strong> @wellchildinc</p>
      </div>

    </div>
  );
}
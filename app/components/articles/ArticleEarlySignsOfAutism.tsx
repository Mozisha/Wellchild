// app/components/articles/ArticleEarlySignsOfAutism.tsx
import React from 'react';

// A reusable sub-component for nested lists to keep the code clean
const NestedListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="ml-5 text-lg leading-relaxed text-gray-700">{children}</li>
);

export default function ArticleEarlySignsOfAutism() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10 first:mt-0">🧠 Understanding Autism in Plain Language</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Autism, or Autism Spectrum Disorder (ASD), is a neurodevelopmental difference that affects social communication, play, and behavior patterns.
        Signs often appear within the first two years of life, though every child’s strengths and needs look different.
        At WellChild Center for Development, we help families recognize the early signs of autism and access diagnostic evaluations and developmental screenings so children can get the right support early on.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">👶 Early Signs of Autism by Age</h2>
      <p className="text-lg leading-relaxed text-gray-700">Every baby develops at their own pace — but when certain social or communication skills don’t appear on time, it can be a sign to check in.</p>
      <ul className="space-y-4 list-none">
        <li>
          <strong className="text-lg text-gray-800">0–6 Months:</strong>
          <ul className="list-disc space-y-2 mt-2">
            <NestedListItem>Limited eye contact or smiles</NestedListItem>
            <NestedListItem>Doesn’t look at faces during feeding or cuddles</NestedListItem>
            <NestedListItem>Rarely coos or “talks back” to voices</NestedListItem>
          </ul>
        </li>
        <li>
          <strong className="text-lg text-gray-800">6–12 Months:</strong>
          <ul className="list-disc space-y-2 mt-2">
            <NestedListItem>Doesn’t consistently respond to their name</NestedListItem>
            <NestedListItem>Rarely shares smiles or joyful expressions</NestedListItem>
            <NestedListItem>Prefers objects over people</NestedListItem>
            <NestedListItem>Limited back-and-forth sounds or gestures</NestedListItem>
          </ul>
        </li>
        <li>
          <strong className="text-lg text-gray-800">12–18 Months:</strong>
          <ul className="list-disc space-y-2 mt-2">
            <NestedListItem>Few or no gestures (pointing, waving, nodding)</NestedListItem>
            <NestedListItem>Doesn’t point to show interest or request something</NestedListItem>
            <NestedListItem>Rarely imitates or shares enjoyment</NestedListItem>
            <NestedListItem>Loss of words or gestures once used (regression)</NestedListItem>
          </ul>
        </li>
        <li>
          <strong className="text-lg text-gray-800">18–24 Months:</strong>
          <ul className="list-disc space-y-2 mt-2">
            <NestedListItem>Little or no pretend play</NestedListItem>
            <NestedListItem>Repetitive movements (hand-flapping, spinning, lining up toys)</NestedListItem>
            <NestedListItem>Strong need for sameness; distress with small changes</NestedListItem>
          </ul>
        </li>
        <li>
          <strong className="text-lg text-gray-800">2–3 Years:</strong>
          <ul className="list-disc space-y-2 mt-2">
            <NestedListItem>Limited interest in peers or difficulty joining play</NestedListItem>
            <NestedListItem>Echolalia (repeating words or phrases) without flexible use</NestedListItem>
            <NestedListItem>Sensory differences — may seek or avoid sounds, lights, or textures</NestedListItem>
            <NestedListItem>Picky eating or unusual reactions to touch</NestedListItem>
          </ul>
        </li>
      </ul>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">🚩 When to Seek an Autism Evaluation</h2>
      <p className="text-lg leading-relaxed text-gray-700">According to the CDC and American Academy of Pediatrics, developmental screenings should occur at 9, 18, and 30 months, and autism-specific screenings at 18 and 24 months. Parents should request an autism evaluation if a child shows any of the following:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">No big smiles by 6 months</li>
        <li className="text-lg leading-relaxed text-gray-700">No babbling by 12 months</li>
        <li className="text-lg leading-relaxed text-gray-700">No gestures (pointing, waving) by 12 months</li>
        <li className="text-lg leading-relaxed text-gray-700">No single words by 16 months</li>
        <li className="text-lg leading-relaxed text-gray-700">No two-word phrases by 24 months</li>
        <li className="text-lg leading-relaxed text-gray-700">Any loss of language or social skills at any age</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">If you’re concerned, don’t wait for a formal diagnosis — you can begin Early Intervention or speech therapy based on observed needs.</p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">🌈 A Strengths-Based Perspective</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Autistic children often show remarkable strengths — focus, memory, pattern recognition, and deep interests that can become powerful learning tools.
        At WellChild, we encourage families to build on these strengths by using their child’s interests to teach communication, play, and regulation skills.
      </p>
      
      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">🩺 How an Autism Evaluation Works</h2>
      <p className="text-lg leading-relaxed text-gray-700">At WellChild Center for Development, our licensed psychologists and speech-language pathologists perform comprehensive autism and ADHD evaluations through a mix of play-based observation, caregiver interviews, and standardized assessments. We assess:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Communication & Language — how your child expresses wants, needs, and ideas</li>
        <li className="text-lg leading-relaxed text-gray-700">Social Interaction — eye contact, play, and shared enjoyment</li>
        <li className="text-lg leading-relaxed text-gray-700">Behavior & Flexibility — routines, transitions, and emotional regulation</li>
        <li className="text-lg leading-relaxed text-gray-700">Sensory Differences — reactions to sound, touch, light, and textures</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">Results help families understand their child’s profile and what supports to start immediately.</p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">💬 How Parents Can Support Communication at Home</h2>
      <p className="text-lg leading-relaxed text-gray-700">You don’t need special equipment — everyday routines are full of opportunities to build connection:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Narrate your actions: “We’re putting on your shoes!”</li>
        <li className="text-lg leading-relaxed text-gray-700">Pause and wait: Give space for your child to respond or gesture.</li>
        <li className="text-lg leading-relaxed text-gray-700">Follow their lead: Talk about what your child is looking at or doing.</li>
        <li className="text-lg leading-relaxed text-gray-700">Use visuals and gestures: Pictures, pointing, and signs reduce frustration.</li>
        <li className="text-lg leading-relaxed text-gray-700">Celebrate all communication: Whether speech, sign, or AAC, connection comes first.</li>
      </ul>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">⚡ 10-Day Quick-Start Plan for Parents</h2>
       <ul className="list-disc space-y-2 pl-5">
        <li className="text-lg leading-relaxed text-gray-700"><strong>1–2️⃣</strong> Track behaviors and collect short videos of daily routines.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>3–4️⃣</strong> Add visual supports like choice boards or “First/Then” cards.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>5–6️⃣</strong> Create communication opportunities with toys or snacks just out of reach.</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>7–8️⃣</strong> Visit your pediatrician and request an ASD screening (e.g., M-CHAT-R/F).</li>
        <li className="text-lg leading-relaxed text-gray-700"><strong>9–🔟</strong> Call Early Intervention (Birth–3) or your local school district (age 3+) for evaluation referrals.</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">Early action reduces stress and opens doors to therapy and community support faster.</p>
    </div>
  );
}
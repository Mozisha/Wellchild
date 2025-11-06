// app/components/articles/ArticleExpressiveLanguageMilestones.tsx
import React from 'react';

// A reusable sub-component for each row in our milestones list for cleaner code
const MilestoneRow = ({ age, milestones }: { age: string; milestones: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 py-6 border-b border-gray-200 last:border-b-0">
    <div className="md:col-span-1">
      <h4 className="font-bold text-lg text-gray-800 tracking-wide">{age}</h4>
    </div>
    <div className="md:col-span-3">
      <ul className="list-disc space-y-3 pl-5">
        {milestones.map((item, index) => (
          <li key={index} className="text-lg leading-relaxed text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ArticleExpressiveLanguageMilestones() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-gray-700">
        According to ASHA and Brown's Developmental Stages, below are the expressive language milestones.
      </p>

      {/* Milestones Container */}
      <div className="mt-10">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-4 gap-x-8 pb-4 border-b-2 border-gray-300">
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">AGE</h3>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">MILESTONES</h3>
          </div>
        </div>
        
        {/* Data Rows */}
        <div>
          <MilestoneRow 
            age="BIRTH - 3 MONTHS"
            milestones={[
              "Makes cooing sounds.",
              "Cries change for different needs.",
              "Smiles at people."
            ]}
          />
          <MilestoneRow 
            age="4 - 6 MONTHS"
            milestones={[
              "Coos and babbles when playing alone or with you.",
              "Makes speech-like babbling sounds, like pa, ba, and mi.",
              "Giggles and laughs.",
              "Makes sounds when happy or upset."
            ]}
          />
          <MilestoneRow 
            age="7 - 12 MONTHS"
            milestones={[
              "Babbles long strings of sounds, like mimi upup babababa.",
              "Uses sounds and gestures to get and keep attention.",
              "Points to objects and shows them to others.",
              "Uses gestures like waving bye, reaching for “up,” and shaking his head no.",
              "Imitates different speech sounds.",
              "Says 1 or 2 words, like hi, dog, dada, mama, or uh-oh. This will happen around his first birthday, but sounds may not be clear."
            ]}
          />
          <MilestoneRow 
            age="1 – 2 YEARS"
            milestones={[
              "Uses one-, two-, and sometimes three-word utterances e.g., “more apple,” “no bed,” and “mommy book.”",
              "Uses intonation to ask yes/no questions.",
              "Uses a lot of new words.",
              "Uses p, b, m, h, and w in words.",
              "Starts to name pictures in books.",
              "Asks questions, like “What’s that?”, “Who’s that?”, and “Where’s kitty?”",
              "Puts 2 words together, like"
            ]}
          />
          <MilestoneRow 
            age="2 – 3 YEARS"
            milestones={[
              "Uses in, on and under.",
              "Talks about things that are not in the room.",
              "Uses k, g, f, t, d, and n in words.",
              "Uses two- or three- words to talk about and ask for things.",
              "Asks “Why?”",
              "Puts 3 words together to talk about things. May repeat some words and sounds.",
              "Can already be understood by other people."
            ]}
          />
          <MilestoneRow 
            age="3 – 4 YEARS"
            milestones={[
              "Increases in length of words due to use of auxiliaries (is, be etc.).",
              "Increases use of wh– questions.",
              "Uses interrogative reversals (e.g., “Can I go,” “Is it,” etc.).",
              "Answers simple who, what, and where questions.",
              "Says rhyming words, like hat–cat.",
              "Uses pronouns, like I, you, me, we, and they.",
              "Uses some plural words, like toys, birds, and buses.",
              "Uses some present progressive words like crying, jumping.",
              "Uses some possessive words like girl’s hat.",
              "Most people understand what your child says.",
              "Asks when and how questions.",
              "Puts 4 words together but may overgeneralize the past tense words, like “I goed to school.”",
              "Talks about what happened during the day. Uses about 4 sentences at a time."
            ]}
          />
           <MilestoneRow 
            age="4 – 5 YEARS"
            milestones={[
              "Uses locatives (e.g., up, down).",
              "Uses 'and' as main conjunction.",
              "Says all speech sounds in words. May make mistakes on sounds that are harder to say, like l, s, r, v, z, ch, sh, and th.",
              "Responds to “What did you say?”",
              "Talks without repeating sounds or words most of the time.",
              "Names letters and numbers.",
              "Uses sentences that have more than 1 action word, like jump, play, and get. May make some mistakes, like “Zach gots 2 video games, but I got one.”",
              "Tells a short story.",
              "Keeps a conversation going.",
              "Talks in different ways, depending on the listener and place. Your child may use short sentences with younger children. He may talk louder outside than inside."
            ]}
          />
        </div>
      </div>
    </div>
  );
}
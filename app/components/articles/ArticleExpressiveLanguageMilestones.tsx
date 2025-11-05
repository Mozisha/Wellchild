// app/components/articles/ArticleExpressiveLanguageMilestones.tsx
import React from 'react';

// A reusable sub-component for our main table
const MilestonesTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
  <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {headers.map((header, i) => (
            <th key={i} scope="col" className={`px-6 py-4 text-left text-sm font-bold text-gray-600 uppercase tracking-wider ${i === 0 ? 'w-1/4' : ''}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="px-6 py-4 text-lg text-gray-700 align-top">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function ArticleExpressiveLanguageMilestones() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-gray-700">
        According to ASHA and Brown's Developmental Stages, below are the expressive language milestones. These are general guidelines, and every child develops at their own unique pace.
      </p>

      <MilestonesTable 
        headers={["AGE", "MILESTONES"]}
        rows={[
          ["Birth - 3 Months", "Makes cooing sounds.\nCries change for different needs.\nSmiles at people."],
          ["4 - 6 Months", "Coos and babbles when playing alone or with you.\nMakes speech-like babbling sounds, like pa, ba, and mi.\nGiggles and laughs.\nMakes sounds when happy or upset."],
          ["7 - 12 Months", "Babbles long strings of sounds, like mimi upup babababa.\nUses sounds and gestures to get and keep attention.\nPoints to objects and shows them to others.\nSays 1 or 2 words, like hi, dog, dada, mama, or uh-oh. This will happen around the first birthday, but sounds may not be clear."],
          ["1 – 2 Years", "Uses a lot of new words.\nUses p, b, m, h, and w in words.\nStarts to name pictures in books.\nAsks questions, like “What’s that?”, “Who’s that?”, and “Where’s kitty?”\nPuts 2 words together, like “more apple,” “no bed,” and “mommy book.”"],
          ["2 – 3 Years", "Talks about things that are not in the room.\nUses k, g, f, t, d, and n in words.\nUses words like in, on, and under.\nAsks “Why?”\nPuts 3 words together to talk about things. May repeat some words and sounds."],
          ["3 – 4 Years", "Answers simple who, what, and where questions.\nSays rhyming words, like hat–cat.\nUses pronouns, like I, you, me, we, and they.\nUses some plural words, like toys, birds, and buses.\nPuts 4 words together. May make mistakes like “I goed to school.”\nTalks about what happened during the day. Uses about 4 sentences at a time."],
          ["4 – 5 Years", "Says all speech sounds in words, though may make mistakes on harder sounds like l, s, r, v, z, ch, sh, and th.\nResponds to “What did you say?”\nNames letters and numbers.\nTells a short story.\nKeeps a conversation going.\nTalks in different ways, depending on the listener and place."]
        ]}
      />
    </div>
  );
}
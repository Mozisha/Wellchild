// app/components/articles/ArticleArticulationDifferences.tsx
import React from 'react';

// A reusable sub-component for our tables
const ComparisonTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
  <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {headers.map((header, i) => (
            <th key={i} scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="px-6 py-4 text-lg text-gray-700">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function ArticleArticulationDifferences() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10 first:mt-0">THE IMPORTANCE OF KNOWING THE DIFFERENCE</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Understanding the distinctions between the rules and patterns of both languages is instrumental for parents and professionals in differentiating between a natural language variation and a potential language disorder in bilingual children. This knowledge is key to preventing misdiagnosis, ensuring that a bilingual child isn't inaccurately labeled as having an articulation disorder when, in reality, they're exhibiting language differences that stem from the transfer of speech rules from their primary language to their second language. This transfer is a common occurrence and should be recognized as a language difference rather than a language disorder.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">VOWELS</h2>
      <ComparisonTable 
        headers={["SPANISH", "ENGLISH"]}
        rows={[
          ["There are only five vowels in Spanish.", "There are 30+ vowels found in English."],
          ["Diphthongs (combining two vowels) and triphthongs (three) are common.", "Diphthongs and triphthongs are NOT common in English."],
          ["Speakers will substitute more tenser vowels (add more muscular effort) over unstressed vowels.", "English has more unstressed/lax vowels."]
        ]}
      />

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">CONSONANTS</h2>
      <ComparisonTable 
        headers={["SPANISH", "ENGLISH"]}
        rows={[
          ["'ch' and 'sh' can be used interchangeably without changing word meaning. For example, chimenea may be pronounced 'chimenea' or 'shimenea'.", "'ch' and 'sh' are two different phonemes in English."],
          ["Both 'v' and 'b' are typically pronounced 'b' (depending on dialect). For example, vaca sounds like 'baca'.", "'v' and 'b' are two different phonemes in English."],
          ["Both 's' and 'z' are typically pronounced 's' (depending on dialect). For example, zapato sounds like 'sapato'.", "'s' and 'z' are two different phonemes in English."],
          ["'rr' carries a different meaning than 'r'. For example, perro means 'dog' but pero means 'but'.", "English does not have different meanings for 'rr' vs. 'r'."]
        ]}
      />
      <p className="text-lg leading-relaxed text-gray-700">
        <strong>Why it matters:</strong> Understanding the origin of a Spanish-speaking student is crucial because regional variations impact articulation. For instance, in some Caribbean communities, the final /s/ might be omitted (e.g., 'los amigos' might be pronounced as 'lo amigo'). This can influence both their articulation and language. When transitioning to English, students might unknowingly carry over this final /s/ deletion, which could misrepresent their proficiency as a speech disorder.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">SYLLABLES & PITCH</h2>
      <ComparisonTable 
        headers={["FEATURE", "SPANISH", "ENGLISH"]}
        rows={[
          ["Syllables", "Each syllable has the same duration. Spanish is a syllabic language.", "Accented syllables have a longer duration than unaccented ones."],
          ["Pitch", "In Spanish, pitch does not vary.", "In English, pitch varies significantly."]
        ]}
      />

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">DIACRITIC / ACCENT MARKERS</h2>
       <ComparisonTable 
        headers={["SPANISH", "ENGLISH"]}
        rows={[
          ["Placement of an accent on a word may change the meaning. For example: Camino = 'I walk.' vs. Caminó = 'He/She walked.'", "This is not common in English."]
        ]}
      />
    </div>
  );
}
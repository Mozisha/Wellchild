// app/components/articles/ArticleArticulationDifferences.tsx
import React from 'react';

// A reusable sub-component for the two-column comparison sections
const ComparisonSection = ({ title, spanishPoints, englishPoints }: { title: string, spanishPoints: React.ReactNode[], englishPoints: React.ReactNode[] }) => (
  <div className="mt-12">
    <h3 className="text-center text-xl font-bold text-gray-500 uppercase tracking-widest mb-6">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
      {/* Spanish Column */}
      <div className="md:border-r md:pr-8">
        <h4 className="text-center text-lg font-semibold text-gray-700 mb-4">SPANISH</h4>
        <ul className="list-disc space-y-4 pl-5">
          {spanishPoints.map((point, i) => <li key={i} className="text-lg leading-relaxed text-gray-700">{point}</li>)}
        </ul>
      </div>
      {/* English Column */}
      <div className="md:pl-8">
        <h4 className="text-center text-lg font-semibold text-gray-700 mb-4">ENGLISH</h4>
        <ul className="list-disc space-y-4 pl-5">
          {englishPoints.map((point, i) => <li key={i} className="text-lg leading-relaxed text-gray-700">{point}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

export default function ArticleArticulationDifferences() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10 first:mt-0">THE IMPORTANCE OF KNOWING THE DIFFERENCE</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        <strong>WHY IT MATTERS:</strong> Understanding the distinctions between the rules and patterns of both languages is instrumental for parents and professionals in differentiating between a natural language variation and a potential language disorder in bilingual children. This knowledge is key to preventing misdiagnosis, ensuring that a bilingual child isn't inaccurately labeled as having an articulation disorder when, in reality, they're exhibiting language differences that stem from the transfer of speech rules from their primary language to their second language. This transfer is a common occurrence and should be recognized as a language difference rather than a language disorder.
      </p>

      <ComparisonSection 
        title="VOWELS"
        spanishPoints={[
          "There are only five vowels in Spanish.",
          "Spanish diphthongs (combining two vowels) and triphthongs (combining three vowels) are common in Spanish.",
          "Spanish speakers will substitute more tenser vowels (add more muscular effort to the vowel) over unstressed vowels."
        ]}
        englishPoints={[
          "There are 30+ vowels found in English.",
          "Diphthongs (combining two vowels) and triphthongs (combining three vowels) are NOT common in English.",
          "English has more unstressed/lax vowels."
        ]}
      />

      <ComparisonSection 
        title="CONSONANTS"
        spanishPoints={[
          "Interchangeably without changing word meaning. For example, chimenea may be pronounced 'chimenea' or 'shimenea'.",
          "Both 'v' and 'b' may be found in written words but are typically pronounced 'b' (depending on dialect). For example, vaca sounds like 'baca'.",
          "Both 's' and 'z' may be found in written words but are typically pronounced 's' (depending on dialect). For example, zapato sounds like 'sopa'.",
          "'rr' in Spanish will carry a different meaning than a word that only has one 'r'. For example, perro means 'dog' but pero means 'but'."
        ]}
        englishPoints={[
          "'ch' and 'sh' are two different phonemes in English.",
          "'v' and 'b' are two different phonemes in English.",
          "'s' and 'z' are two different phonemes in English.",
          "English does not have different meanings for 'rr' vs. 'r'."
        ]}
      />
      <p className="text-lg leading-relaxed text-gray-700 mt-6">
        <strong>WHY IT MATTERS:</strong> Understanding the origin of a Spanish-speaking student is crucial because the specific regional variations and substitutions in their dialect significantly impact their articulation and language patterns. Variations occur across different countries, for instance, in some Caribbean communities (such as the Dominican Republic, Puerto Rico, and Cuba), the final /s/ in words might be omitted. For instance, 'los amigos' might be pronounced as 'lo amigo'. This alteration can influence both their articulation and language. When transitioning to English, students might unknowingly carry over this final /s/ deletion, which could misrepresent their proficiency as a speech disorder.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        Moreover, Spanish speakers with a Castilian dialect from Spain might replace the /s/ sound with the 'th' sound. For instance, the word 'cena' might sound like 'thena' in certain dialects. Understanding these dialectical distinctions is vital in comprehending and addressing language and articulation variations among Spanish-speaking students.
      </p>

      <ComparisonSection 
        title="SYLLABLES"
        spanishPoints={[
          "Each syllable has the same duration, no matter where the stress in the word may fall.",
          "Spanish is a syllabic language.",
          "Syllables may be created within and between words."
        ]}
        englishPoints={[
          "English has an accentual rhythm of speech in which the accented syllables have a longer duration than the unaccented syllables."
        ]}
      />

      <ComparisonSection 
        title="PITCH"
        spanishPoints={["In Spanish, pitch does not vary."]}
        englishPoints={["In English, pitch varies."]}
      />

      <ComparisonSection 
        title="DIACRITIC MARKERS/ ACCENT MARKERS"
        spanishPoints={[
          "In Spanish, placement of an accent on a word may change the meaning.",
          <span key="example">For example:<br/>Camino = (1st person present tense) 'I walk'.<br/>Caminó = (3rd person past tense) 'You (formal)' or 'He/She walked'.</span>
        ]}
        englishPoints={["This is not common in English."]}
      />
    </div>
  );
}
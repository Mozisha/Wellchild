// app/components/articles/ArticleGetYourChildTalking.tsx
import React from 'react';

// A reusable sub-component for each tip to maintain structure
const TipSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <li className="text-lg leading-relaxed text-gray-700">
    <strong className="text-gray-800">{title}:</strong>
    <div className="mt-2 space-y-2">{children}</div>
  </li>
);

export default function ArticleGetYourChildTalking() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10 first:mt-0">PARENTING TIPS FOR TODDLERS AND CHILDREN</h2>
      
      <h3 className="text-2xl font-bold font-serif text-gray-800 pt-4">0-24 MONTHS:</h3>
      <ul className="space-y-6 list-none">
        <TipSection title="Narrate everything you do">
          <p>Talk back to your child and say what they say.</p>
          <p>Pretend to have a conversation. Talk to your child as you give them a bath, feed them, and get them dressed. Talk about what you are doing and where you are going. Tell them about who or what you will see.</p>
          <p>Incorporate it in play and pretend to be a reporter or a TV host.</p>
        </TipSection>
        
        <TipSection title="Back and forth">
          <p>Play simple games that involve back and forth interactions.</p>
          <p>Say sounds like “ma, da, and ba” and try to get your baby to say it back to you or add sounds to your sentences, for example “The cow says moo and the dog says woof, woof.”</p>
        </TipSection>

        <TipSection title="Lots of praise">
          <p>Clap, smile, and celebrate every communication effort.</p>
          <p>Respond when your child laughs or makes faces. Make the same faces back to them.</p>
          <p>Teach your child to do what you do, like clapping your hands, stomping your feet, and playing peek-a-boo.</p>
        </TipSection>

        <TipSection title="Gestures">
          <p>Point out everything, including objects, colors, and shapes.</p>
          <p>Use other gestures like waving, the stop gesture, all done gesture, give me gesture, follow me gesture, be quiet gesture etc.</p>
        </TipSection>

        <TipSection title="Add on">
           <p>Add on to what your baby says. When your baby says, “Mama,” say, “Here is Mama. Mama loves you. Where is baby? Here is baby.”</p>
        </TipSection>
      </ul>
      
      <h3 className="text-2xl font-bold font-serif text-gray-800 pt-4">24-36 MONTHS:</h3>
       <ul className="space-y-6 list-none">
        <TipSection title="Pick a topic">
          <p>Talk about fun places you visited or recent activities. Speak clearly to your child. Model good speech.</p>
          <p>Repeat what your child says to show that you understand. Add on to what she says. Use words like, “Want juice? I have juice. I have apple juice. Do you want apple juice?”</p>
        </TipSection>

        <TipSection title="Ask Questions in conversations">
          <p>Help your child understand and ask questions. Play the yes–no game. Ask questions that need simple answers to help with comprehension skills. Ask questions that include a choice.</p>
        </TipSection>
      </ul>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">TIPS FOR ANY AGE:</h2>
      <ul className="list-disc space-y-4 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Speaking slowly and enunciate every word.</li>
        <li className="text-lg leading-relaxed text-gray-700">Repeat everything, it is useful for children to hear the words over and over again.</li>
        <li className="text-lg leading-relaxed text-gray-700">Listen and respond. Even if your child is babbling, respond with a smile, or a “yes”.</li>
        <li className="text-lg leading-relaxed text-gray-700">Pause after speaking. This gives your child a chance to respond.</li>
        <li className="text-lg leading-relaxed text-gray-700">Keep helping your child learn new words. Use the environment to say a new word, and tell them what it means, or use it in a way that helps them understand.</li>
        <li className="text-lg leading-relaxed text-gray-700">Use music, sing simple songs and say nursery rhymes. This helps your child learn the rhythm of speech and learn new words.</li>
        <li className="text-lg leading-relaxed text-gray-700">Name body parts and talk about what you do with them. “This is my nose. I can smell flowers, brownies, and soap.”</li>
      </ul>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">READ TO THEM:</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Read to your child. You don’t have to read every word but talk about the pictures. Choose books that are sturdy and have large colorful pictures. Ask your child, “What’s this?” and try to get him to point to or name objects.
      </p>
    </div>
  );
}
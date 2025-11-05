// app/components/articles/ArticleChoosingToys.tsx
import React from 'react';

// A reusable sub-component for individual toy examples
const ToyExample = ({ title, link, targets, howToPlay }: { title: string, link: string, targets: string, howToPlay: string }) => (
  <div className="mt-6 border-l-4 border-gray-200 pl-4">
    {/* UPDATED: Title is now styled clearly as a clickable link */}
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-xl font-bold font-serif text-[#51AFBA] hover:underline transition-colors cursor-pointer"
    >
      {title}
    </a>
    <p className="text-lg leading-relaxed text-gray-700 mt-2">
      <strong>Targets:</strong> {targets}
    </p>
    <p className="text-lg leading-relaxed text-gray-700 mt-2">
      <strong>How to Play:</strong> {howToPlay}
    </p>
  </div>
);

export default function ArticleChoosingToys() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-gray-700">
        Toys are one of the best ways to increase your toddler's physical, cognitive, speech and language, and social and emotional development. When purchasing a toy, you should always pay attention to the age appropriateness and skill level of your child as well as your child’s interests.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10 first:mt-0">Best Toys for Language Development</h2>
      <p className="text-lg leading-relaxed text-gray-700">Look for toys that include these features:</p>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Has Cause and Effect</li>
        <li className="text-lg leading-relaxed text-gray-700">Builds basic vocabulary</li>
        <li className="text-lg leading-relaxed text-gray-700">Increases attention and memory</li>
        <li className="text-lg leading-relaxed text-gray-700">Teaches basic categories: clothing, food, animals, shapes, etc.</li>
        <li className="text-lg leading-relaxed text-gray-700">Encourages turn-taking</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        Traditional toys such as blocks, vehicles, baby dolls, and play food are often the best because they allow for more open-ended communicative opportunities. See below for some examples of our favorite toys we use in speech therapy!
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10">Examples of Great Toys for Speech</h2>

      <ToyExample 
        title="GILOBABY Play Kitchen Accessories"
        link="https://amzn.to/3zGrw0u"
        targets="Pretend play skills, turn-taking, sequencing, vocabulary, and carry-over to real kitchen experience."
        howToPlay="Model a 3-step kitchen sequence and then have them do it themselves and say it back to you. For example: Say 'First we cook, then we eat, and last we wash!' then have them do this routine in play. You can continuously use 'First, then, last' and add as much vocabulary as needed."
      />

      <ToyExample 
        title="Melissa & Doug Farm Animals Jumbo Knob Wooden Puzzle"
        link="https://amzn.to/4eOw5Ve"
        targets="Fine motor skills, function, categories, vocabulary, and wh-questions."
        howToPlay="As your child is putting the animal in the corresponding place, make the animal sounds together. For example: Say 'The cow says mooo, can we say mooo?' then ask 'What does the cow say?' You can also teach categories by letting your child know 'A cow is a farm animal'."
      />
      
      <ToyExample 
        title="Melissa & Doug Wooden Building Blocks Set"
        link="https://amzn.to/3Y7V0h4"
        targets="Turn-taking, colors, shapes."
        howToPlay="Have your child request the blocks using simple phrases like 'blue block' or 'I want block.' Expand their utterances depending on the child’s level."
      />

      <ToyExample 
        title="Farm Toy Vehicle with Animals Playset"
        link="https://amzn.to/4eq3FRD"
        targets="Sorting, counting, vocabulary, sounds, articulation, and function."
        howToPlay="Make animal sounds with your child. Model different language concepts while playing, such as color, shape, animal, size, and actions. Expand utterances depending on the child’s level."
      />
      
      <ToyExample 
        title="Mr. Potato Head"
        link="https://amzn.to/4exRVgg"
        targets="Body Parts, fine motor skills."
        howToPlay="A classic. Have the child request the different body parts and then point to it on their own body or yours!"
      />
    </div>
  );
}
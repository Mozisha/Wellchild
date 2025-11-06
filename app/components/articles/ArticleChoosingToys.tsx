// app/components/articles/ArticleChoosingToys.tsx
import React from 'react';

// A reusable sub-component for individual toy examples
const ToyExample = ({ title, link, targets, howToPlay }: { title: string, link: string, targets: string, howToPlay: React.ReactNode }) => (
  <div className="mt-8 border-l-4 border-gray-200 pl-4">
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
    <div className="text-lg leading-relaxed text-gray-700 mt-2">
      <strong>How to Play:</strong> {howToPlay}
    </div>
  </div>
);

export default function ArticleChoosingToys() {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-gray-700">
        Toys are one of the best ways to increase your toddler's physical, cognitive, speech and language, and social and emotional development. When purchasing a toy, you should always pay attention to the age appropriateness and skill level of your child as well as your child’s interests.
      </p>

      <h2 className="text-3xl font-bold font-serif text-gray-800 mt-10 first:mt-0">BEST TOYS FOR LANGUAGE DEVELOPMENT MAY INCLUDE:</h2>
      <ul className="list-disc space-y-3 pl-5">
        <li className="text-lg leading-relaxed text-gray-700">Has Cause and Effect</li>
        <li className="text-lg leading-relaxed text-gray-700">Builds basic vocabulary</li>
        <li className="text-lg leading-relaxed text-gray-700">Increases attention and memory</li>
        <li className="text-lg leading-relaxed text-gray-700">Teaches basic categories: clothing, food, animals, shapes, toys, and nature.</li>
        <li className="text-lg leading-relaxed text-gray-700">Turn taking</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700">
        Traditional toys such as blocks, vehicles, baby dolls, food etc. are the best because they allow for more open ended communicative opportunities.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        See below for some examples of some of our favorite toys we use in speech therapy and how you can incorporate them to increase language!
      </p>

      <div className="mt-10">
        <ToyExample 
          title="GILOBABY Play Kitchen Accessories, Play Food Sets for Kids Kitchen Playset with Pots and Pans Set"
          link="https://amzn.to/3zGrw0u"
          targets="pretend play skills, turn taking, sequencing, vocabulary and has carry-over to real kitchen experience."
          howToPlay={
            <span>
              Model for your child a 3 step kitchen sequence and then have them do it themselves and say it back to you.
              For example: Say “First we cook, then we eat and last we wash!” then have her do this routine in play and then ask her “What did we just do?” You can help with the sentences by modeling and cueing her for the right words.
              You can continuously use “First, then, last” and add as much or as little vocabulary to that phrase as needed depending on your child’s need.
            </span>
          }
        />

        <ToyExample 
          title="Melissa & Doug Farm Animals Jumbo Knob Wooden Puzzle"
          link="https://amzn.to/4eOw5Ve"
          targets="Fine motor skills, function, categories, vocabulary, wh-questions."
          howToPlay={
            <span>
              As your child is putting the animal in the corresponding place, together you can produce the animals sounds. For example: Say “the cow says mooo, can we say mooo” then ask “what does the cow say?” You can also teach categories by letting your child know “A cow is a farm animal” repeat the animal categories throughout play and then ask your child at the end “
            </span>
          }
        />
        
        <ToyExample 
          title="Melissa & Doug Wooden Building Blocks Set"
          link="https://amzn.to/3Y7V0h4"
          targets="Turn taking, color, shapes."
          howToPlay={
            <span>
              Make your child request the blocks using adjective + noun or adjective + verb. Expand utterances depending on the child’s level.
            </span>
          }
        />

        <ToyExample 
          title="Farm Toy Vehicle with Animals Figurines and Fence Playset"
          link="https://amzn.to/4eq3FRD"
          targets="Sorting, counting, vocabulary, sounds, articulation, vocabulary, function."
          howToPlay={
            <span>
              Make animal sounds with your child, model language varieties while playing such as color, shape, animal, size, actions etc. Expand utterances depending on the child’s level.
            </span>
          }
        />
        
        <ToyExample 
          title="Mr. Potato Head"
          link="https://amzn.to/4exRVgg"
          targets="Body Parts, fine motor."
          howToPlay={
            <span>
              A classic. Make the child request the different body parts then point to it in their own body or yours!
            </span>
          }
        />
      </div>
    </div>
  );
}
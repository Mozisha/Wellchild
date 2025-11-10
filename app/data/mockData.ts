import { Provider } from '../lib/types';

export const speechTherapyConcerns = [
  "Child is difficult to understand or often asked to repeat",
  "Speech seems delayed compared to peers",
  "Limited vocabulary or short sentences",
  "Difficulty understanding directions or expressing thoughts clearly",
  "Trouble combining words or forming sentences",
  "Difficulty socializing or engaging in conversations",
  "Repeats sounds or gets 'stuck' when speaking (stuttering)",
  "Shows frustration or avoids talking",
  "Trouble chewing or swallowing safely",
  "Picky eating or sensitivity to food textures",
  "Drooling or weak oral muscles",
  "Not using words or gestures by expected age",
  "Limited babbling or difficulty imitating sounds/actions"
];

// UPDATED: This now features the real therapists from your homepage
export const mockProviders: Provider[] = [
  {
    id: 'michelle-mcguinness',
    name: 'Michelle McGuinness, M.A., CCC SLP',
    title: 'Speech-Language Pathologist',
    imageUrl: '/speech-therapists/michelle-McGuinness.jpeg',
    specialties: ['Specializes in Articulation Therapy and Language Delays'],
    about: 'Michelle is passionate about helping children communicate effectively. She uses evidence-based practices to support articulation, language, and social communication skills in a playful, engaging environment.',
    qualifications: ['M.A. in Speech-Language Pathology'],
    certifications: ['CCC-SLP Certified', 'Telehealth Certified', 'Early Intervention Specialist'],
    experienceYears: 7,
  },
  {
    id: 'natalie-zorrilla',
    name: 'Natalie Zorrilla, M.A., CCC SLP',
    title: 'Pediatric Speech Therapist',
    imageUrl: '/speech-therapists/natalie-zorrilla.jpg',
    specialties: ['Expert in Early Intervention and Bilingual Services (English/Spanish)'],
    about: "Natalie specializes in working with toddlers and young children to build foundational communication skills. Her bilingual background makes her a valuable resource for diverse families.",
    qualifications: ['M.A. in Communication Sciences'],
    certifications: ['CCC-SLP Certified', 'Bilingual Extension Certified', 'Stuttering Specialist'],
    experienceYears: 5,
  },
  {
    id: 'rebecca-bequer',
    name: 'Rebecca Bequer, M.A., CCC SLP',
    title: 'Speech-Language Pathologist',
    imageUrl: '/speech-therapists/rebecca-bequer.png',
    specialties: ['Focuses on Feeding Therapy and oral-motor development'],
    about: "Rebecca has extensive experience helping children with feeding and swallowing challenges. She works closely with families to make mealtimes positive and successful.",
    qualifications: ['M.A. in Speech-Language Pathology'],
    certifications: ['CCC-SLP Certified', 'Certified Feeding Therapist', 'PROMPT Trained'],
    experienceYears: 9,
  },
  // You can add other providers here for different scenarios
];
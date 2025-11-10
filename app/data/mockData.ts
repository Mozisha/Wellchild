import { Provider } from "../lib/types";

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

export const mockProviders: Provider[] = [
  {
    id: 'provider-1',
    name: 'Dr. Michael Chen',
    title: 'Speech-Language Pathologist',
    imageUrl: '/clinical-psychologists/karin-adolff.png', // Placeholder image
    specialties: ['Specializes in speech delays and articulation in children ages 2-10'],
    about: 'Dr. Chen is passionate about helping children find their voice. He specializes in early intervention and uses play-based therapy techniques to make sessions engaging and effective.',
    qualifications: ['MA Speech-Language Pathology, UCLA'],
    certifications: ['CCC-SLP Certified', 'Early Intervention Specialist', 'Apraxia Specialist'],
    experienceYears: 5,
  },
  {
    id: 'provider-2',
    name: 'Dr. Jessica Rodriguez',
    title: 'Speech-Language Pathologist',
    imageUrl: '/clinical-psychologists/melissa-santiago.jpeg', // Placeholder image
    specialties: ['Expertise in childhood stuttering and fluency disorders'],
    about: 'Dr. Rodriguez provides a supportive and patient environment for children to build confidence in their speech. Her techniques are evidence-based and family-centered.',
    qualifications: ['PhD in Communication Disorders, NYU'],
    certifications: ['Board Certified Specialist in Fluency', 'Telehealth Certified'],
    experienceYears: 8,
  },
  {
    id: 'provider-3',
    name: 'Dr. Emily Carter',
    title: 'Child Psychologist',
    imageUrl: '/clinical-psychologists/sharon-pedrosa.png', // Placeholder image
    specialties: ['Specializes in Autism & ADHD evaluations for young children'],
    about: 'Dr. Carter is known for her warm, play-based approach to diagnostic evaluations, ensuring children feel comfortable and understood throughout the process.',
    qualifications: ['Psy.D in Clinical Psychology, Stanford'],
    certifications: ['Licensed Psychologist', 'ADOS-2 Certified'],
    experienceYears: 12,
  },
];
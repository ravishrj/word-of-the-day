import { WordData } from '../types';

const wordsDatabase: WordData[] = [
  {
    word: 'Serendipity',
    definition: 'The occurrence of events by chance in a happy or beneficial way.',
    example: 'Finding that rare book at the flea market was pure serendipity.'
  },
  {
    word: 'Ephemeral',
    definition: 'Lasting for a very short time.',
    example: 'The ephemeral beauty of cherry blossoms reminds us to appreciate the present moment.'
  },
  {
    word: 'Ubiquitous',
    definition: 'Present, appearing, or found everywhere.',
    example: 'Smartphones have become ubiquitous in modern society.'
  },
  {
    word: 'Eloquent',
    definition: 'Fluent or persuasive in speaking or writing.',
    example: 'Her eloquent speech moved the audience to tears.'
  },
  {
    word: 'Resilience',
    definition: 'The capacity to recover quickly from difficulties.',
    example: 'The community showed remarkable resilience after the natural disaster.'
  },
  {
    word: 'Pernicious',
    definition: 'Having a harmful effect, especially in a gradual or subtle way.',
    example: 'The pernicious influence of social media on self-esteem is well-documented.'
  },
  {
    word: 'Magnanimous',
    definition: 'Generous or forgiving, especially toward a rival or less powerful person.',
    example: 'The winner was magnanimous in victory, praising his opponent.'
  },
  {
    word: 'Quintessential',
    definition: 'Representing the most perfect or typical example of a quality or class.',
    example: 'The little black dress is the quintessential wardrobe staple.'
  },
  {
    word: 'Fastidious',
    definition: 'Very attentive to and concerned about accuracy and detail.',
    example: 'The fastidious editor checked every comma and semicolon.'
  },
  {
    word: 'Garrulous',
    definition: 'Excessively talkative, especially on trivial matters.',
    example: 'The garrulous taxi driver kept talking throughout the entire ride.'
  },
  {
    word: 'Iconoclast',
    definition: 'A person who attacks cherished beliefs or institutions.',
    example: 'The artist was an iconoclast who challenged traditional painting techniques.'
  },
  {
    word: 'Lugubrious',
    definition: 'Looking or sounding sad and dismal.',
    example: 'The lugubrious music matched his melancholy mood.'
  },
  {
    word: 'Mellifluous',
    definition: 'Sweet or musical; pleasant to hear.',
    example: 'Her mellifluous voice was perfect for audiobook narration.'
  },
  {
    word: 'Nebulous',
    definition: 'Unclear, vague, or ill-defined.',
    example: 'The companys nebulous policies confused both employees and customers.'
  },
  {
    word: 'Obfuscate',
    definition: 'To deliberately make something unclear or difficult to understand.',
    example: 'The politician tried to obfuscate the truth with confusing statistics.'
  },
  {
    word: 'Panacea',
    definition: 'A solution or remedy for all difficulties or diseases.',
    example: 'There is no panacea for the complex problems facing our healthcare system.'
  },
  {
    word: 'Quixotic',
    definition: 'Extremely idealistic; unrealistic and impractical.',
    example: 'His quixotic quest to end world hunger was admirable but unrealistic.'
  },
  {
    word: 'Recalcitrant',
    definition: 'Stubbornly refusing to obey authority or discipline.',
    example: 'The recalcitrant student refused to follow the classroom rules.'
  },
  {
    word: 'Sycophant',
    definition: 'A person who acts obsequiously toward someone important to gain advantage.',
    example: 'The CEO surrounded himself with sycophants who never challenged his ideas.'
  },
  {
    word: 'Trepidation',
    definition: 'A feeling of fear or agitation about something that may happen.',
    example: 'She felt some trepidation about starting her new job.'
  },
  {
    word: 'Ubiquitous',
    definition: 'Present, appearing, or found everywhere.',
    example: 'Mobile phones have become ubiquitous in modern society.'
  },
  {
    word: 'Verisimilitude',
    definition: 'The appearance of being true or real.',
    example: 'The movie "s attention to detail gave it a sense of verisimilitude.'
  },
  {
    word: 'Wanderlust',
    definition: 'A strong desire to travel.',
    example: 'Her wanderlust led her to visit over 30 countries before turning 30.'
  },
  {
    word: 'Xenial',
    definition: 'Relating to hospitality between host and guest.',
    example: 'The xenial traditions of the culture emphasized welcoming strangers.'
  },
  {
    word: 'Zeitgeist',
    definition: 'The defining spirit or mood of a particular period of history.',
    example: 'The music captured the zeitgeist of the 1960s perfectly.'
  }
];

export const getRandomWord = async (): Promise<WordData> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const randomIndex = Math.floor(Math.random() * wordsDatabase.length);
  return wordsDatabase[randomIndex];
};
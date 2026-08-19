import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ExtraQuestion = {
  content: string;
  correctAnswer: string;
  options: string[];
  topic: string;
};

const EXTRA_BY_STAGE: Record<number, ExtraQuestion[]> = {
  1: [
    { content: "What time does school start?", correctAnswer: "Eight thirty", options: ["Eight thirty", "Seven thirty", "Nine o'clock", "Eight o'clock"], topic: "Detail" },
    { content: "What does Anna do in her free time?", correctAnswer: "Read books", options: ["Read books", "Play sports", "Watch movies", "Draw pictures"], topic: "Detail" },
    { content: "Who does Anna watch TV with in the evening?", correctAnswer: "Her parents", options: ["Her parents", "Her brother", "Her friends", "Alone"], topic: "Detail" },
    { content: "Why does Anna like her school?", correctAnswer: "Because she has many friends there", options: ["Because she has many friends there", "Because it is close to home", "Because the teachers are strict", "Because there is no homework"], topic: "Inference" },
    { content: "What does Anna do right after school?", correctAnswer: "Goes home and does her homework", options: ["Goes home and does her homework", "Plays with her brother", "Goes to the market", "Visits her grandmother"], topic: "Detail" },
    { content: "How does Anna get to school?", correctAnswer: "She walks", options: ["She walks", "She takes the bus", "Her father drives her", "She rides a bicycle"], topic: "Detail" },
    { content: "What is the passage mostly describing?", correctAnswer: "A typical day in Anna's life", options: ["A typical day in Anna's life", "Anna's favorite subject", "A special holiday", "Anna's birthday party"], topic: "Main Idea" },
  ],
  2: [
    { content: "What does the market sell, according to the passage?", correctAnswer: "Fresh fruit, vegetables, and flowers", options: ["Fresh fruit, vegetables, and flowers", "Clothes and shoes", "Books and toys", "Furniture"], topic: "Detail" },
    { content: "What does Tom's mother always buy?", correctAnswer: "Apples, tomatoes, and bread", options: ["Apples, tomatoes, and bread", "Fish and rice", "Flowers only", "Cheese and eggs"], topic: "Detail" },
    { content: "What do they sometimes buy from a farm stand?", correctAnswer: "Cheese", options: ["Cheese", "Meat", "Fish", "Honey"], topic: "Detail" },
    { content: "What does Tom do to help his mother?", correctAnswer: "Carry the shopping bags home", options: ["Carry the shopping bags home", "Pay for the food", "Choose the vegetables", "Drive the car"], topic: "Detail" },
    { content: "When does Tom go to the market?", correctAnswer: "Every Saturday", options: ["Every Saturday", "Every Sunday", "Every day", "Once a month"], topic: "Detail" },
    { content: "What can be inferred about Tom's feelings toward the market trip?", correctAnswer: "He enjoys it very much", options: ["He enjoys it very much", "He finds it boring", "He dislikes carrying bags", "He prefers staying home"], topic: "Inference" },
    { content: "What is the main topic of this passage?", correctAnswer: "A weekly trip to the market with his mother", options: ["A weekly trip to the market with his mother", "How to grow vegetables", "A recipe for bread", "A trip to a farm"], topic: "Main Idea" },
  ],
  3: [
    { content: "What did Maria hurt when she fell?", correctAnswer: "Her knees", options: ["Her knees", "Her arm", "Her head", "Her back"], topic: "Detail" },
    { content: "How long did it take Maria to learn to ride without help?", correctAnswer: "Two weeks", options: ["Two weeks", "One week", "One month", "A few days"], topic: "Detail" },
    { content: "Where does Maria ride her bicycle now?", correctAnswer: "To the park", options: ["To the park", "To school", "To the market", "To her grandmother's house"], topic: "Detail" },
    { content: "How did Maria feel after learning to ride?", correctAnswer: "Proud of herself", options: ["Proud of herself", "Disappointed", "Scared", "Tired"], topic: "Detail" },
    { content: "Who does Maria ride her bicycle with now?", correctAnswer: "Her friends", options: ["Her friends", "Her father", "Alone", "Her teacher"], topic: "Detail" },
    { content: "What can be concluded from this passage about learning new skills?", correctAnswer: "Practice makes difficult things possible", options: ["Practice makes difficult things possible", "Learning is always easy", "Parents should not help", "Bicycles are dangerous for children"], topic: "Inference" },
    { content: "What is the main idea of this passage?", correctAnswer: "Maria's experience learning to ride a bicycle", options: ["Maria's experience learning to ride a bicycle", "A description of a park", "Maria's family history", "The history of bicycles"], topic: "Main Idea" },
  ],
  4: [
    { content: "Where did the class eat lunch?", correctAnswer: "Near the lake", options: ["Near the lake", "At a restaurant", "In the classroom", "Near the reptile house"], topic: "Detail" },
    { content: "What did the class eat for lunch?", correctAnswer: "Sandwiches", options: ["Sandwiches", "Pizza", "Salad", "Fruit"], topic: "Detail" },
    { content: "What did they see in the reptile house?", correctAnswer: "Snakes and lizards", options: ["Snakes and lizards", "Birds and fish", "Spiders", "Turtles only"], topic: "Detail" },
    { content: "How did the class feel about the trip by the end?", correctAnswer: "They thought it was wonderful", options: ["They thought it was wonderful", "They were disappointed", "They were tired and bored", "They wanted to leave early"], topic: "Detail" },
    { content: "Who visited the zoo?", correctAnswer: "Mr. Johnson's class", options: ["Mr. Johnson's class", "A group of tourists", "A family", "Zoo employees"], topic: "Detail" },
    { content: "Why did the teacher talk about the snake cages?", correctAnswer: "To reassure the students who were afraid", options: ["To reassure the students who were afraid", "To teach a science lesson", "To warn about danger", "To end the visit early"], topic: "Inference" },
    { content: "What is this passage mainly about?", correctAnswer: "A class trip to the zoo", options: ["A class trip to the zoo", "How to take care of reptiles", "A biology lesson", "Types of animals in the wild"], topic: "Main Idea" },
  ],
  5: [
    { content: "What did Sofia's colleagues do to help her?", correctAnswer: "They were patient and gave her feedback", options: ["They were patient and gave her feedback", "They ignored her mistakes", "They complained to the manager", "They did her work for her"], topic: "Detail" },
    { content: "What happened during Sofia's first week?", correctAnswer: "She made a few mistakes", options: ["She made a few mistakes", "She was promoted", "She quit the job", "She trained new employees"], topic: "Detail" },
    { content: "What did the colleagues show Sofia?", correctAnswer: "How to use the company's software", options: ["How to use the company's software", "How to drive to work", "How to cook", "How to manage a team"], topic: "Detail" },
    { content: "What did Sofia gain by the end of the month, besides confidence?", correctAnswer: "Several friends at work", options: ["Several friends at work", "A promotion", "A pay raise", "A new manager"], topic: "Detail" },
    { content: "How did Sofia feel on her first day?", correctAnswer: "Excited and nervous", options: ["Excited and nervous", "Bored", "Angry", "Confident"], topic: "Detail" },
    { content: "What can be inferred about the work environment at Sofia's company?", correctAnswer: "It is supportive and welcoming", options: ["It is supportive and welcoming", "It is very competitive and cold", "It is disorganized", "It has strict rules against mistakes"], topic: "Inference" },
    { content: "What is the main topic of this passage?", correctAnswer: "Sofia's experience starting a new job", options: ["Sofia's experience starting a new job", "How to write for social media", "Marketing strategies", "Sofia's education"], topic: "Main Idea" },
  ],
  6: [
    { content: "What does reading fiction increase, according to the passage?", correctAnswer: "Empathy", options: ["Empathy", "Memory only", "Physical strength", "Income"], topic: "Detail" },
    { content: "How much time do experts recommend reading each day?", correctAnswer: "Fifteen or twenty minutes", options: ["Fifteen or twenty minutes", "One hour", "Five minutes", "All day"], topic: "Detail" },
    { content: "What happens when you lose yourself in a good story?", correctAnswer: "It can be relaxing", options: ["It can be relaxing", "It causes headaches", "It reduces vocabulary", "It increases stress"], topic: "Detail" },
    { content: "According to the passage, readers learn to understand characters' thoughts from different what?", correctAnswer: "Perspectives", options: ["Perspectives", "Languages", "Time periods", "Countries"], topic: "Detail" },
    { content: "The word 'exposes' in the passage is closest in meaning to:", correctAnswer: "introduces someone to something", options: ["introduces someone to something", "hides something from someone", "removes something completely", "damages something"], topic: "Vocabulary in Context" },
    { content: "What is the author's purpose in writing this passage?", correctAnswer: "To explain the benefits of reading", options: ["To explain the benefits of reading", "To criticize modern entertainment", "To review a specific novel", "To describe how to write fiction"], topic: "Author's Purpose" },
    { content: "What can be inferred about people who don't read often?", correctAnswer: "They may have smaller vocabularies", options: ["They may have smaller vocabularies", "They are less intelligent overall", "They cannot enjoy stories", "They read too much television"], topic: "Inference" },
  ],
  7: [
    { content: "What do employees often appreciate about working from home?", correctAnswer: "The flexibility of not commuting", options: ["The flexibility of not commuting", "A higher salary", "More vacation days", "Free office equipment"], topic: "Detail" },
    { content: "Why do remote workers sometimes feel isolated?", correctAnswer: "They miss casual conversations and social interactions", options: ["They miss casual conversations and social interactions", "They have too much work", "They cannot use the internet", "They dislike their colleagues"], topic: "Detail" },
    { content: "Why do some employees work longer hours at home?", correctAnswer: "There is no clear boundary between office and home", options: ["There is no clear boundary between office and home", "They are paid by the hour", "Managers require it", "They have no other activities"], topic: "Detail" },
    { content: "What are companies now trying to offer as a balance?", correctAnswer: "Hybrid arrangements", options: ["Hybrid arrangements", "Longer vacations", "Higher salaries", "Free transportation"], topic: "Detail" },
    { content: "The word 'boundary' in the passage is closest in meaning to:", correctAnswer: "a clear separation between two things", options: ["a clear separation between two things", "a type of software", "a financial cost", "a work schedule"], topic: "Vocabulary in Context" },
    { content: "What can be inferred about companies' opinions on remote work?", correctAnswer: "They are divided and still adjusting", options: ["They are divided and still adjusting", "They all fully support it", "They all want to ban it", "They have no opinion on it"], topic: "Inference" },
    { content: "What is the main idea of this passage?", correctAnswer: "Working from home has both benefits and challenges", options: ["Working from home has both benefits and challenges", "All companies should ban remote work", "Remote work always increases productivity", "Offices will disappear completely"], topic: "Main Idea" },
  ],
  8: [
    { content: "What has chronic sleep deprivation been linked to, besides cognitive impairment?", correctAnswer: "Weakened immune function and cardiovascular disease risk", options: ["Weakened immune function and cardiovascular disease risk", "Improved memory", "Increased height", "Better eyesight"], topic: "Detail" },
    { content: "What role does sleep play in emotional regulation, according to the passage?", correctAnswer: "It helps manage stress and irritability", options: ["It helps manage stress and irritability", "It has no effect on emotions", "It only affects physical health", "It increases anger"], topic: "Detail" },
    { content: "What do people who don't get enough sleep often report?", correctAnswer: "Increased irritability and difficulty managing stress", options: ["Increased irritability and difficulty managing stress", "Better focus", "Higher energy levels", "Improved mood"], topic: "Detail" },
    { content: "What do researchers warn about regarding long-term sleep deprivation?", correctAnswer: "Consequences on public health", options: ["Consequences on public health", "No long-term effects", "Only minor tiredness", "Increased productivity"], topic: "Detail" },
    { content: "The word 'chronic' in the passage is closest in meaning to:", correctAnswer: "long-lasting or persistent", options: ["long-lasting or persistent", "sudden and brief", "mild and rare", "completely harmless"], topic: "Vocabulary in Context" },
    { content: "What is the author's main concern in this passage?", correctAnswer: "People are not prioritizing sleep despite its importance", options: ["People are not prioritizing sleep despite its importance", "People sleep too much", "Sleep research is unreliable", "Technology improves sleep quality"], topic: "Author's Purpose" },
    { content: "What can be inferred about modern society's attitude toward sleep?", correctAnswer: "It is often undervalued compared to productivity", options: ["It is often undervalued compared to productivity", "It is highly valued by everyone", "It is no longer necessary", "It is only important for children"], topic: "Inference" },
  ],
  9: [
    { content: "What forms can urban farms take, according to the passage?", correctAnswer: "Rooftop gardens, vertical farms, or community plots", options: ["Rooftop gardens, vertical farms, or community plots", "Only large open fields", "Underground tunnels", "Greenhouses only"], topic: "Detail" },
    { content: "What educational opportunity does urban farming provide?", correctAnswer: "Teaching children where their food comes from", options: ["Teaching children where their food comes from", "Teaching adults how to cook", "Providing job training in construction", "Teaching foreign languages"], topic: "Detail" },
    { content: "What technical challenge does urban farming face?", correctAnswer: "Growing crops in non-traditional environments", options: ["Growing crops in non-traditional environments", "A lack of interested farmers", "Too much available land", "Excessive rainfall"], topic: "Detail" },
    { content: "How do urban planners generally view farming initiatives, according to the passage?", correctAnswer: "As essential to sustainable city development", options: ["As essential to sustainable city development", "As unnecessary and costly", "As harmful to the environment", "As only useful in rural areas"], topic: "Detail" },
    { content: "The word 'scarcer' in the passage is closest in meaning to:", correctAnswer: "less available", options: ["less available", "more expensive", "more polluted", "easier to find"], topic: "Vocabulary in Context" },
    { content: "What social function do community gardens serve, according to the passage?", correctAnswer: "They bring neighbors together", options: ["They bring neighbors together", "They reduce city taxes", "They replace public transportation", "They eliminate the need for shops"], topic: "Detail" },
    { content: "What can be inferred about the future of urban farming?", correctAnswer: "It will likely play an important role despite challenges", options: ["It will likely play an important role despite challenges", "It will disappear completely", "It has already failed everywhere", "It is only a temporary trend"], topic: "Inference" },
  ],
  10: [
    { content: "What do critics worry retraining programs struggle to do?", correctAnswer: "Keep pace with technological demands", options: ["Keep pace with technological demands", "Attract enough students", "Cost too much money", "Focus on the wrong skills entirely"], topic: "Detail" },
    { content: "What policy measures do economists advocate for, according to the passage?", correctAnswer: "Investment in lifelong learning and social safety nets", options: ["Investment in lifelong learning and social safety nets", "Banning artificial intelligence", "Reducing all taxes", "Eliminating retraining programs"], topic: "Detail" },
    { content: "What sectors are particularly at risk of job displacement, according to the passage?", correctAnswer: "Manual or clerical labor", options: ["Manual or clerical labor", "Creative arts only", "Government positions only", "Scientific research"], topic: "Detail" },
    { content: "What do proponents say AI will allow workers to focus on?", correctAnswer: "Creative, strategic, and interpersonal aspects of their jobs", options: ["Creative, strategic, and interpersonal aspects of their jobs", "Only repetitive manual tasks", "Reducing their working hours to zero", "Avoiding all forms of technology"], topic: "Detail" },
    { content: "The word 'compounded' in the passage is closest in meaning to:", correctAnswer: "made worse or intensified", options: ["made worse or intensified", "resolved completely", "made irrelevant", "simplified"], topic: "Vocabulary in Context" },
    { content: "What is the author's purpose in presenting both proponents' and critics' views?", correctAnswer: "To give a balanced overview of the debate", options: ["To give a balanced overview of the debate", "To argue that AI should be banned", "To promote a specific company", "To prove that critics are wrong"], topic: "Author's Purpose" },
    { content: "What can be inferred about the overall tone of this passage?", correctAnswer: "Balanced and analytical", options: ["Balanced and analytical", "Strongly against AI", "Purely promotional of AI", "Humorous and lighthearted"], topic: "Inference" },
  ],
};

async function main() {
  let totalAdded = 0;

  for (const [stageStr, extraQuestions] of Object.entries(EXTRA_BY_STAGE)) {
    const stage = Number(stageStr);

    const passage = await prisma.readingPassage.findFirst({
      where: { module: "english", mode: "reading", stage },
      select: { id: true, title: true },
    });

    if (!passage) {
      console.warn(`⚠ Aucun texte trouvé pour l'étape ${stage}, ignoré.`);
      continue;
    }

    for (const q of extraQuestions) {
      await prisma.question.create({
        data: {
          module: "english",
          section: "reading",
          topic: q.topic,
          stage,
          level: "B1",
          difficulty: Math.min(1 + Math.floor((stage - 1) / 3), 3),
          type: "MCQ",
          content: q.content,
          correctAnswer: q.correctAnswer,
          passageId: passage.id,
          options: {
            create: q.options.map((opt) => ({
              content: opt,
              isCorrect: opt === q.correctAnswer,
            })),
          },
        },
      });
      totalAdded++;
    }

    console.log(`  Étape ${stage} (${passage.title}) : +${extraQuestions.length} questions`);
  }

  console.log(`\n✓ ${totalAdded} questions ajoutées au total (10 par étape désormais).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
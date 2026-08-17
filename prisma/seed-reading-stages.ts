import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const passages = [
  {
    stage: 1,
    title: "A Simple Morning",
    content: `Every day, Anna wakes up at seven o'clock. She has breakfast with her family. Then she walks to school with her brother. School starts at eight thirty. Anna likes her school because she has many friends there.

After school, Anna goes home and does her homework. She likes to read books in her free time. In the evening, she watches TV with her parents before going to bed.`,
    questions: [
      { content: "What time does Anna wake up?", correctAnswer: "Seven o'clock", options: ["Seven o'clock", "Eight o'clock", "Six o'clock", "Nine o'clock"], topic: "Detail" },
      { content: "Who does Anna walk to school with?", correctAnswer: "Her brother", options: ["Her brother", "Her sister", "Her mother", "Her friend"], topic: "Detail" },
      { content: "What is the passage mainly about?", correctAnswer: "Anna's daily routine", options: ["Anna's daily routine", "Anna's school subjects", "Anna's holidays", "Anna's homework"], topic: "Main Idea" },
    ],
  },
  {
    stage: 2,
    title: "The Weekend Market",
    content: `Every Saturday, Tom goes to the local market with his mother. The market sells fresh fruit, vegetables, and flowers. Tom loves the smell of fresh bread from the bakery stand.

His mother always buys apples, tomatoes, and bread. Sometimes they also buy cheese from a small farm stand. Tom enjoys helping his mother carry the shopping bags home. It is one of his favorite activities of the week.`,
    questions: [
      { content: "When does Tom go to the market?", correctAnswer: "Every Saturday", options: ["Every Saturday", "Every Sunday", "Every Friday", "Every day"], topic: "Detail" },
      { content: "What does Tom love the smell of?", correctAnswer: "Fresh bread", options: ["Fresh bread", "Flowers", "Cheese", "Fruit"], topic: "Detail" },
      { content: "Why does Tom enjoy going to the market?", correctAnswer: "He likes helping his mother and the atmosphere", options: ["He likes helping his mother and the atmosphere", "He wants to buy toys", "He meets his friends there", "He doesn't like it"], topic: "Inference" },
    ],
  },
  {
    stage: 3,
    title: "Learning to Ride a Bicycle",
    content: `When Maria was eight years old, she decided she wanted to learn how to ride a bicycle. At first, it was difficult. She fell down several times and hurt her knees. Her father held the back of the bicycle to help her balance.

After two weeks of practice, Maria could finally ride without any help. She felt very proud of herself. Now, she rides her bicycle to the park every weekend with her friends. Learning something new is not always easy, but practice makes it possible.`,
    questions: [
      { content: "How old was Maria when she learned to ride a bicycle?", correctAnswer: "Eight years old", options: ["Eight years old", "Six years old", "Ten years old", "Twelve years old"], topic: "Detail" },
      { content: "Who helped Maria learn to ride?", correctAnswer: "Her father", options: ["Her father", "Her mother", "Her friend", "Her teacher"], topic: "Detail" },
      { content: "What is the main lesson of this passage?", correctAnswer: "Practice helps you achieve difficult goals", options: ["Practice helps you achieve difficult goals", "Bicycles are dangerous", "Children should not ride bicycles", "Parents should not help their children"], topic: "Main Idea" },
    ],
  },
  {
    stage: 4,
    title: "A Trip to the Zoo",
    content: `Last month, Mr. Johnson's class visited the city zoo. The students were excited to see many different animals, including lions, elephants, and monkeys. Their favorite part of the trip was watching the penguins swim in their pool.

During lunch, the class ate sandwiches near the lake. Afterward, they visited the reptile house, where they saw snakes and lizards. Some students were a little afraid of the snakes, but their teacher explained that the snakes could not leave their glass cages. By the end of the day, everyone agreed that the zoo trip was a wonderful experience.`,
    questions: [
      { content: "What was the students' favorite part of the trip?", correctAnswer: "Watching the penguins swim", options: ["Watching the penguins swim", "Seeing the lions", "Eating lunch", "Visiting the reptile house"], topic: "Detail" },
      { content: "Why were some students afraid?", correctAnswer: "Because of the snakes", options: ["Because of the snakes", "Because of the elephants", "Because they got lost", "Because it was raining"], topic: "Detail" },
      { content: "What can be inferred about the teacher?", correctAnswer: "She wanted to reassure the students", options: ["She wanted to reassure the students", "She was also afraid of snakes", "She didn't like the zoo", "She wanted to leave early"], topic: "Inference" },
    ],
  },
  {
    stage: 5,
    title: "Starting a New Job",
    content: `When Sofia started her new job at a marketing company, she felt both excited and nervous. On her first day, her manager introduced her to the team and explained her main responsibilities. Sofia would be helping to write content for the company's social media accounts.

During her first week, Sofia made a few mistakes, but her colleagues were patient and helpful. They showed her how to use the company's software and gave her useful feedback on her writing. By the end of the month, Sofia felt much more confident in her role and had already made several friends at work.`,
    questions: [
      { content: "What is Sofia's main responsibility at her new job?", correctAnswer: "Writing content for social media", options: ["Writing content for social media", "Managing the team", "Selling products", "Designing the office"], topic: "Detail" },
      { content: "How did Sofia feel by the end of the month?", correctAnswer: "More confident", options: ["More confident", "Still very nervous", "Ready to quit", "Bored"], topic: "Detail" },
      { content: "What helped Sofia adjust to her new job?", correctAnswer: "Her colleagues' patience and support", options: ["Her colleagues' patience and support", "Working alone without help", "Changing departments", "Taking a vacation"], topic: "Inference" },
    ],
  },
  {
    stage: 6,
    title: "The Benefits of Reading",
    content: `Reading regularly offers many benefits beyond simple entertainment. Studies have shown that people who read often tend to have larger vocabularies and better writing skills. This is because reading exposes people to new words and different sentence structures they might not encounter in everyday conversation.

In addition to improving language skills, reading can also reduce stress. Losing yourself in a good story allows your mind to focus on something other than daily worries, which can be relaxing. Furthermore, reading fiction has been linked to increased empathy, as readers learn to understand characters' thoughts and emotions from different perspectives. For all these reasons, many experts recommend setting aside time to read every day, even if it is just for fifteen or twenty minutes.`,
    questions: [
      { content: "According to the passage, why do readers often have larger vocabularies?", correctAnswer: "They are exposed to new words and sentence structures", options: ["They are exposed to new words and sentence structures", "They take vocabulary classes", "They memorize dictionaries", "They watch more television"], topic: "Detail" },
      { content: "How can reading reduce stress?", correctAnswer: "By allowing the mind to focus on something other than worries", options: ["By allowing the mind to focus on something other than worries", "By making people tired", "By requiring physical exercise", "By eliminating all daily tasks"], topic: "Detail" },
      { content: "What is the main purpose of this passage?", correctAnswer: "To explain the benefits of reading", options: ["To explain the benefits of reading", "To criticize people who don't read", "To describe a specific book", "To compare reading and writing"], topic: "Main Idea" },
    ],
  },
  {
    stage: 7,
    title: "Working from Home",
    content: `Over the past several years, more companies have allowed their employees to work from home, at least part of the time. This shift has brought both advantages and challenges. On one hand, employees often appreciate the flexibility of not having to commute, which saves time and reduces stress. Many also report feeling more productive when they can work in a quiet, comfortable environment.

On the other hand, working from home can make it difficult to separate professional and personal life. Some employees find themselves working longer hours because there is no clear boundary between the office and home. Additionally, remote work can lead to feelings of isolation, since employees miss the casual conversations and social interactions that typically happen in an office. As a result, many companies are now trying to find a balance, offering hybrid arrangements that combine days at home with days in the office.`,
    questions: [
      { content: "What advantage of working from home is mentioned in the passage?", correctAnswer: "No need to commute", options: ["No need to commute", "Higher salary", "More vacation days", "Free lunch"], topic: "Detail" },
      { content: "What challenge does working from home create?", correctAnswer: "Difficulty separating work and personal life", options: ["Difficulty separating work and personal life", "Lack of internet access", "Too much social interaction", "Higher transportation costs"], topic: "Detail" },
      { content: "What solution does the passage mention?", correctAnswer: "Hybrid arrangements combining home and office days", options: ["Hybrid arrangements combining home and office days", "Banning remote work completely", "Reducing employee salaries", "Closing all offices"], topic: "Inference" },
    ],
  },
  {
    stage: 8,
    title: "The Science of Sleep",
    content: `Sleep is often undervalued in modern society, where busy schedules and constant connectivity encourage people to sacrifice rest in favor of productivity. However, scientific research consistently demonstrates that insufficient sleep has significant consequences for both physical and mental health. During sleep, the brain consolidates memories, processes information from the day, and clears out toxins that accumulate during waking hours.

Chronic sleep deprivation has been linked to a range of health issues, including weakened immune function, increased risk of cardiovascular disease, and impaired cognitive performance. Furthermore, sleep plays a critical role in emotional regulation; people who do not get enough sleep often report increased irritability and difficulty managing stress. Despite this evidence, many people continue to prioritize work or entertainment over adequate rest, a habit that researchers warn could have long-term consequences on public health.`,
    questions: [
      { content: "What does the brain do during sleep, according to the passage?", correctAnswer: "Consolidates memories and clears out toxins", options: ["Consolidates memories and clears out toxins", "Stops all activity completely", "Only processes visual information", "Increases muscle mass"], topic: "Detail" },
      { content: "The word 'undervalued' in the passage is closest in meaning to:", correctAnswer: "not appreciated enough", options: ["not appreciated enough", "too expensive", "poorly understood scientifically", "completely ignored by science"], topic: "Vocabulary in Context" },
      { content: "What is the author's main concern in this passage?", correctAnswer: "People are not prioritizing sleep despite its importance", options: ["People are not prioritizing sleep despite its importance", "People sleep too much nowadays", "Sleep research is inconclusive", "Technology has no effect on sleep"], topic: "Main Idea" },
    ],
  },
  {
    stage: 9,
    title: "The Rise of Urban Farming",
    content: `As cities continue to grow and available land becomes scarcer, urban farming has emerged as an innovative solution to several interconnected challenges. Urban farms, which can take the form of rooftop gardens, vertical farms, or community plots, allow city residents to grow their own food while reducing the environmental impact typically associated with transporting produce over long distances.

Beyond the environmental benefits, urban farming initiatives often serve important social functions. Community gardens, for instance, bring together neighbors who might otherwise have little interaction, fostering a stronger sense of local identity. Additionally, these projects can provide educational opportunities, particularly for children who may have limited exposure to where their food actually comes from. Nevertheless, urban farming faces notable obstacles, including limited space, the high cost of land in cities, and the technical challenges of growing crops in non-traditional environments. Despite these difficulties, many urban planners view farming initiatives as an essential component of sustainable city development going forward.`,
    questions: [
      { content: "According to the passage, what environmental benefit does urban farming provide?", correctAnswer: "Reduces the need to transport produce long distances", options: ["Reduces the need to transport produce long distances", "Eliminates the need for any farming", "Increases the amount of available land", "Removes the need for water"], topic: "Detail" },
      { content: "What social function do community gardens serve?", correctAnswer: "Bringing neighbors together and fostering community", options: ["Bringing neighbors together and fostering community", "Reducing city population", "Increasing property taxes", "Replacing public schools"], topic: "Detail" },
      { content: "What obstacle to urban farming is mentioned in the passage?", correctAnswer: "The high cost of land in cities", options: ["The high cost of land in cities", "A lack of interest from residents", "Government bans on farming", "Insufficient sunlight in all cities"], topic: "Inference" },
    ],
  },
  {
    stage: 10,
    title: "Artificial Intelligence and the Future of Work",
    content: `The rapid advancement of artificial intelligence has sparked considerable debate regarding its long-term implications for the labor market. Proponents argue that AI technologies will primarily automate repetitive and routine tasks, thereby freeing human workers to focus on more creative, strategic, and interpersonal aspects of their jobs. According to this perspective, rather than eliminating employment altogether, AI is more likely to transform the nature of existing roles and give rise to entirely new professions that did not previously exist.

Critics, however, contend that the pace of technological change may outstrip society's ability to adapt, potentially leading to significant job displacement in certain sectors, particularly those involving manual or clerical labor. This concern is compounded by the fact that retraining programs and educational systems often struggle to keep pace with rapidly evolving technological demands. Consequently, many economists advocate for proactive policy measures, such as investment in lifelong learning initiatives and social safety nets, to mitigate the potential negative consequences of this transition while still allowing society to benefit from the productivity gains that AI can offer.`,
    questions: [
      { content: "What do proponents of AI argue, according to the passage?", correctAnswer: "AI will automate routine tasks and create new professions", options: ["AI will automate routine tasks and create new professions", "AI will completely eliminate all jobs", "AI has no effect on the labor market", "AI will only affect creative professions"], topic: "Detail" },
      { content: "The word 'compounded' in the passage is closest in meaning to:", correctAnswer: "made worse or intensified", options: ["made worse or intensified", "resolved completely", "made irrelevant", "simplified"], topic: "Vocabulary in Context" },
      { content: "What do critics of AI's impact on employment worry about?", correctAnswer: "Job displacement outpacing society's ability to adapt", options: ["Job displacement outpacing society's ability to adapt", "AI being too expensive to implement", "AI creating too many new jobs", "AI having no impact on any industry"], topic: "Inference" },
    ],
  },
];

async function main() {
  for (const p of passages) {
    await prisma.readingPassage.create({
      data: {
        module: "english",
        mode: "reading",
        stage: p.stage,
        level: "B1",
        title: p.title,
        content: p.content,
        questions: {
          create: p.questions.map((q) => ({
            module: "english",
            section: "reading",
            topic: q.topic,
            stage: p.stage,
            level: "B1",
            difficulty: Math.min(1 + Math.floor((p.stage - 1) / 3), 3),
            type: "MCQ",
            content: q.content,
            correctAnswer: q.correctAnswer,
            options: {
              create: q.options.map((opt) => ({
                content: opt,
                isCorrect: opt === q.correctAnswer,
              })),
            },
          })),
        },
      },
    });
  }

  console.log(`Seeded ${passages.length} graduated reading passages (stages 1-10).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
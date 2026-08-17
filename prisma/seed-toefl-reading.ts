import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const passages = [
  {
    title: "The Origins of Agriculture",
    content: `Approximately 10,000 years ago, human societies underwent one of the most significant transformations in history: the shift from hunting and gathering to settled agriculture. This transition, often called the Neolithic Revolution, did not happen simultaneously everywhere. Instead, it emerged independently in several regions of the world, including the Fertile Crescent in the Middle East, parts of China, and Mesoamerica.

Archaeologists have proposed several theories to explain why this shift occurred. One influential theory suggests that climate change at the end of the last Ice Age created conditions favorable for the growth of wild grains, encouraging people to settle near these abundant food sources rather than migrate in search of game. Another theory emphasizes population pressure: as hunter-gatherer populations grew, the available wild food became insufficient, pushing communities toward cultivating crops deliberately.

The consequences of agriculture were profound. Settled farming allowed populations to grow far beyond what hunting and gathering could support, since a single plot of cultivated land could feed many more people than the same area of wild terrain. This population growth, in turn, enabled the development of specialized labor, since not everyone needed to produce food directly. Some individuals could become artisans, religious leaders, or administrators, laying the groundwork for complex societies and eventually cities.

However, agriculture also introduced new challenges. Early farming populations were often less healthy than their hunter-gatherer ancestors, as diets became less varied and more dependent on a small number of staple crops. Living in permanent settlements also increased exposure to diseases, particularly those transmitted by domesticated animals. Despite these drawbacks, agriculture spread rapidly once established, fundamentally reshaping human societies and setting the stage for the rise of civilizations.`,
    questions: [
      {
        content: "What is the main idea of the passage?",
        correctAnswer: "Agriculture emerged independently in multiple regions and transformed human societies despite some negative consequences.",
        options: [
          "Agriculture emerged independently in multiple regions and transformed human societies despite some negative consequences.",
          "Climate change was the only cause of the shift to agriculture.",
          "Hunter-gatherer societies were healthier than agricultural societies in every way.",
          "Agriculture began in the Fertile Crescent and later spread to all other regions.",
        ],
        topic: "Main Idea",
      },
      {
        content: "According to the passage, what is one theory explaining the shift to agriculture?",
        correctAnswer: "Climate change created favorable conditions for wild grains.",
        options: [
          "Climate change created favorable conditions for wild grains.",
          "Religious leaders demanded that people farm.",
          "Domesticated animals became more common.",
          "Cities had already been established before farming began.",
        ],
        topic: "Detail",
      },
      {
        content: "The word 'staple' in the passage is closest in meaning to:",
        correctAnswer: "basic and regularly eaten",
        options: ["basic and regularly eaten", "expensive and rare", "poisonous", "imported from other regions"],
        topic: "Vocabulary in Context",
      },
      {
        content: "It can be inferred from the passage that specialized labor developed because:",
        correctAnswer: "Not everyone needed to focus on producing food anymore.",
        options: [
          "Not everyone needed to focus on producing food anymore.",
          "Farming was made illegal for most people.",
          "Hunter-gatherers refused to settle in one place.",
          "Climate change destroyed most crops.",
        ],
        topic: "Inference",
      },
      {
        content: "Why does the author mention that early farmers were 'often less healthy' than hunter-gatherers?",
        correctAnswer: "To show that agriculture had drawbacks despite its benefits.",
        options: [
          "To show that agriculture had drawbacks despite its benefits.",
          "To argue that agriculture should never have been adopted.",
          "To prove that hunter-gatherers lived longer than farmers.",
          "To explain why cities were built far from farmland.",
        ],
        topic: "Author's Purpose",
      },
    ],
  },
  {
    title: "Coral Reef Ecosystems",
    content: `Coral reefs, often called the "rainforests of the sea," are among the most biologically diverse ecosystems on Earth. Despite covering less than one percent of the ocean floor, reefs are home to approximately twenty-five percent of all known marine species. This remarkable diversity is made possible by the unique relationship between coral polyps and microscopic algae called zooxanthellae, which live within the coral's tissues.

Coral polyps are small, soft-bodied organisms related to sea anemones and jellyfish. Individually, they are relatively simple creatures, but colonies of thousands of polyps secrete calcium carbonate to build the hard, branching structures recognized as coral reefs. The zooxanthellae living inside the polyps perform photosynthesis, converting sunlight into energy that the coral can use. In exchange, the coral provides the algae with protection and access to sunlight. This mutualistic relationship is essential: without the algae, most coral species cannot obtain enough energy to survive and build their skeletons.

Unfortunately, this symbiotic relationship is highly sensitive to environmental changes, particularly rising ocean temperatures. When water becomes too warm, the coral expels its zooxanthellae in a stress response known as coral bleaching. Without the algae, the coral loses both its color and its primary energy source. If the stressful conditions persist for an extended period, the coral will eventually die, taking with it the complex habitat that countless other species depend on for shelter and food.

Scientists warn that as global ocean temperatures continue to rise, bleaching events are becoming more frequent and severe. Some reef systems, such as parts of the Great Barrier Reef, have experienced repeated bleaching events in recent years, leaving little time for recovery between episodes. Conservationists are exploring various strategies to protect reefs, including breeding heat-resistant coral strains and establishing marine protected areas, though many acknowledge that addressing climate change itself remains the most critical long-term solution.`,
    questions: [
      {
        content: "What is the primary purpose of this passage?",
        correctAnswer: "To explain how coral reefs function and why they are threatened by warming oceans.",
        options: [
          "To explain how coral reefs function and why they are threatened by warming oceans.",
          "To describe the process of photosynthesis in plants.",
          "To argue that marine protected areas are ineffective.",
          "To compare coral reefs with rainforests in detail.",
        ],
        topic: "Main Idea",
      },
      {
        content: "According to the passage, what percentage of marine species live in coral reefs?",
        correctAnswer: "Approximately 25%",
        options: ["Approximately 25%", "Approximately 1%", "Approximately 50%", "Approximately 75%"],
        topic: "Detail",
      },
      {
        content: "The word 'mutualistic' in the passage is closest in meaning to:",
        correctAnswer: "mutually beneficial",
        options: ["mutually beneficial", "one-sided and harmful", "temporary and rare", "competitive"],
        topic: "Vocabulary in Context",
      },
      {
        content: "What can be inferred about coral that has undergone bleaching?",
        correctAnswer: "It is at serious risk of dying if warm conditions continue.",
        options: [
          "It is at serious risk of dying if warm conditions continue.",
          "It immediately recovers its color within a few hours.",
          "It becomes more colorful than before.",
          "It no longer needs zooxanthellae to survive.",
        ],
        topic: "Inference",
      },
      {
        content: "Why does the author mention the Great Barrier Reef?",
        correctAnswer: "As a real-world example of repeated bleaching events.",
        options: [
          "As a real-world example of repeated bleaching events.",
          "To show that all reefs are recovering successfully.",
          "To explain how coral polyps reproduce.",
          "To argue that reefs are not affected by temperature.",
        ],
        topic: "Author's Purpose",
      },
    ],
  },
  {
    title: "The Rise of Remote Work",
    content: `In the years following 2020, remote work transitioned from a niche arrangement to a mainstream feature of the modern workplace. While flexible work arrangements existed prior to this period, their rapid and widespread adoption fundamentally altered assumptions about where and how productive work could occur. This shift has prompted researchers across economics, sociology, and organizational psychology to examine its long-term implications.

One of the most consistently observed effects of remote work is its impact on commuting patterns. With employees no longer required to travel daily to a central office, many have relocated away from expensive urban centers toward suburban or rural areas offering lower costs of living. This migration has, in some cases, placed downward pressure on urban real estate markets while simultaneously increasing demand—and prices—in previously overlooked regions.

Productivity research on remote work has produced mixed findings. Some studies indicate that employees working from home report higher job satisfaction and, in certain roles, comparable or even improved output, attributing this to reduced commuting stress and greater autonomy over their schedules. Other research, however, points to challenges such as diminished collaboration, difficulty separating work from personal life, and reduced opportunities for informal mentorship that typically occur in physical office settings.

Organizations have responded to these mixed findings in varied ways. Some companies have embraced fully remote or hybrid models permanently, viewing flexibility as a competitive advantage in attracting talent. Others have mandated a return to the office, citing concerns about company culture and long-term innovation. As of now, no clear consensus has emerged, and it is likely that different industries and roles will continue to adopt distinct approaches based on their specific operational needs.`,
    questions: [
      {
        content: "What is the main topic of this passage?",
        correctAnswer: "The rise of remote work and its varied effects on society and organizations.",
        options: [
          "The rise of remote work and its varied effects on society and organizations.",
          "The history of office buildings in urban centers.",
          "A single company's decision to end remote work.",
          "The invention of new communication technology.",
        ],
        topic: "Main Idea",
      },
      {
        content: "According to the passage, what effect has remote work had on real estate?",
        correctAnswer: "It has decreased demand in cities while increasing it in suburban or rural areas.",
        options: [
          "It has decreased demand in cities while increasing it in suburban or rural areas.",
          "It has had no measurable effect on real estate prices.",
          "It has caused all real estate prices to fall everywhere.",
          "It has only affected commercial real estate, not housing.",
        ],
        topic: "Detail",
      },
      {
        content: "The word 'autonomy' in the passage is closest in meaning to:",
        correctAnswer: "independence and control",
        options: ["independence and control", "financial reward", "physical exhaustion", "strict supervision"],
        topic: "Vocabulary in Context",
      },
      {
        content: "It can be inferred from the passage that:",
        correctAnswer: "Companies disagree on the best approach to remote work.",
        options: [
          "Companies disagree on the best approach to remote work.",
          "All companies have banned remote work permanently.",
          "Remote work has been proven to reduce productivity in every case.",
          "Remote work existed only after 2020.",
        ],
        topic: "Inference",
      },
      {
        content: "Why does the author mention 'informal mentorship' in the third paragraph?",
        correctAnswer: "As an example of something that may be lost with remote work.",
        options: [
          "As an example of something that may be lost with remote work.",
          "To argue that mentorship is not important in the workplace.",
          "To explain how remote work improves communication.",
          "To describe a specific company's mentorship program.",
        ],
        topic: "Author's Purpose",
      },
    ],
  },
];

async function main() {
  for (const p of passages) {
    await prisma.readingPassage.create({
      data: {
        module: "toefl",
        level: "toefl",
        title: p.title,
        content: p.content,
        questions: {
          create: p.questions.map((q) => ({
            module: "toefl",
            section: "reading",
            topic: q.topic,
            level: "toefl",
            difficulty: 3,
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

  console.log(`Seeded ${passages.length} TOEFL reading passages with questions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
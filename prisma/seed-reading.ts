import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const passages = [
  {
    title: "A Day at the Farmers Market",
    content: `Every Saturday morning, Clara walks to the farmers market near her house. She likes to arrive early, before the crowds, so she can talk to the sellers and choose the freshest vegetables. Her favorite stall sells tomatoes, peppers, and herbs grown without chemicals.

Last week, Clara met a farmer named Tom who has been selling at the market for over ten years. He told her that he wakes up at four in the morning to harvest his vegetables so they are fresh when he arrives at the market at seven. Clara was surprised — she had never thought about how much work happens before the market even opens.

Now, every time she buys vegetables, she thinks about the farmers who worked hard to grow them.`,
    questions: [
      {
        content: "What time does Clara usually arrive at the market?",
        correctAnswer: "Early, before the crowds",
        options: ["Early, before the crowds", "At noon", "Late in the evening", "Right when it closes"],
      },
      {
        content: "What time does Tom wake up to harvest his vegetables?",
        correctAnswer: "4 a.m.",
        options: ["4 a.m.", "6 a.m.", "7 a.m.", "9 a.m."],
      },
      {
        content: "How long has Tom been selling at the market?",
        correctAnswer: "Over ten years",
        options: ["Over ten years", "Two years", "Six months", "Twenty years"],
      },
      {
        content: "What surprised Clara about Tom's routine?",
        correctAnswer: "How much work happens before the market opens",
        options: [
          "How much work happens before the market opens",
          "How expensive the vegetables are",
          "How far he travels to the market",
          "How many workers he employs",
        ],
      },
    ],
  },
  {
    title: "Learning to Cook",
    content: `When Marco moved into his first apartment, he realized he had never really learned to cook. His mother had always prepared meals at home, and he had never needed to think about it. Now, living alone, he ate frozen pizza almost every night.

After a few months, Marco decided this had to change. He watched cooking videos online and bought a simple cookbook for beginners. He started with easy recipes: scrambled eggs, pasta with tomato sauce, and grilled chicken. At first, he made many mistakes — he burned the eggs twice and forgot to add salt to the pasta water.

Slowly, Marco improved. Six months later, he could cook a full meal for his friends without following a recipe. He even started inviting people over for dinner, something he never imagined doing before.`,
    questions: [
      {
        content: "Why didn't Marco know how to cook before moving out?",
        correctAnswer: "His mother always prepared meals at home",
        options: [
          "His mother always prepared meals at home",
          "He didn't like food",
          "He was too busy with work",
          "He didn't have a kitchen",
        ],
      },
      {
        content: "What did Marco eat almost every night at first?",
        correctAnswer: "Frozen pizza",
        options: ["Frozen pizza", "Salad", "Rice and beans", "Sandwiches"],
      },
      {
        content: "What mistake did Marco make with the eggs?",
        correctAnswer: "He burned them",
        options: ["He burned them", "He forgot to cook them", "He added too much salt", "He broke them"],
      },
      {
        content: "What could Marco do six months later?",
        correctAnswer: "Cook a full meal without a recipe",
        options: [
          "Cook a full meal without a recipe",
          "Open his own restaurant",
          "Teach cooking classes",
          "Cook only breakfast foods",
        ],
      },
    ],
  },
  {
    title: "The Lost Phone",
    content: `Sarah was on her way home from work when she realized her phone was missing. She checked her bag, her pockets, and even went back to the coffee shop where she had stopped earlier, but there was no sign of it. She started to panic — all her photos, contacts, and messages were on that phone.

She asked the barista at the coffee shop if anyone had found a phone, but no one had. Feeling worried, Sarah decided to use a friend's laptop to track her phone's location using an app she had installed months ago. The app showed the phone was still near the coffee shop, just a few streets away.

Sarah walked to the location and found her phone on a bench, exactly where she had left it while tying her shoe. She felt relieved and promised herself to be more careful next time.`,
    questions: [
      {
        content: "Where did Sarah first go to look for her phone?",
        correctAnswer: "The coffee shop",
        options: ["The coffee shop", "Her office", "A friend's house", "The police station"],
      },
      {
        content: "How did Sarah eventually locate her phone?",
        correctAnswer: "Using a tracking app on a friend's laptop",
        options: [
          "Using a tracking app on a friend's laptop",
          "Calling her own number",
          "Asking a police officer",
          "Retracing her steps on foot only",
        ],
      },
      {
        content: "Where did Sarah find her phone?",
        correctAnswer: "On a bench",
        options: ["On a bench", "In her bag", "At the coffee shop counter", "In her car"],
      },
      {
        content: "How was the phone lost in the first place?",
        correctAnswer: "She left it while tying her shoe",
        options: [
          "She left it while tying her shoe",
          "It was stolen",
          "It fell out of her bag",
          "She left it at the office",
        ],
      },
    ],
  },
];

async function main() {
  for (const p of passages) {
    await prisma.readingPassage.create({
      data: {
        module: "english",
        level: "B1",
        title: p.title,
        content: p.content,
        questions: {
          create: p.questions.map((q) => ({
            module: "english",
            section: "reading",
            topic: "Reading Comprehension",
            level: "B1",
            difficulty: 1,
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

  console.log(`Seeded ${passages.length} reading passages with questions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
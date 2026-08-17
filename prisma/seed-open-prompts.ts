import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const writingPrompts = [
  {
    title: "Technology and Education",
    prompt:
      "Some people believe that technology has made learning easier and more effective, while others think it has made students more distracted and less focused. Discuss both views and give your own opinion. Write at least 250 words.",
  },
  {
    title: "Living in a Big City vs. a Small Town",
    prompt:
      "Some people prefer to live in a big city, while others prefer a small town. Which do you think is better, and why? Support your answer with specific reasons and examples. Write at least 250 words.",
  },
  {
    title: "The Importance of Learning a Foreign Language",
    prompt:
      "Do you agree or disagree with the following statement: Everyone should learn at least one foreign language. Use specific reasons and examples to support your answer. Write at least 250 words.",
  },
];

const speakingPrompts = [
  {
    title: "Describe a Skill You Want to Learn",
    prompt:
      "Describe a skill you would like to learn in the future. Explain why this skill is important to you and how you plan to learn it. You will have 45 seconds to prepare and 60 seconds to speak.",
  },
  {
    title: "A Memorable Trip",
    prompt:
      "Talk about a trip you took that you remember well. Describe where you went, who you went with, and why it was memorable. You will have 45 seconds to prepare and 60 seconds to speak.",
  },
  {
    title: "Advantages of Working in a Team",
    prompt:
      "Some people prefer working alone, while others prefer working in a team. Which do you prefer, and why? Give specific reasons to support your answer. You will have 45 seconds to prepare and 60 seconds to speak.",
  },
];

async function main() {
  for (const p of writingPrompts) {
    await prisma.openPrompt.create({
      data: { module: "toefl", mode: "writing", level: "toefl", title: p.title, prompt: p.prompt },
    });
  }
  for (const p of speakingPrompts) {
    await prisma.openPrompt.create({
      data: { module: "toefl", mode: "speaking", level: "toefl", title: p.title, prompt: p.prompt },
    });
  }
  console.log(`Seeded ${writingPrompts.length} writing + ${speakingPrompts.length} speaking prompts.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
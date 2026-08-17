import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Topic → stage, dans l'ordre pédagogique voulu
const GRAMMAR_STAGE_MAP: Record<string, number> = {
  "Articles": 1,
  "Prepositions": 2,
  "Quantifiers": 2,
  "Present Simple": 3,
  "Present Continuous": 4,
  "Past Simple": 5,
  "Comparatives & Superlatives": 6,
  "Question Tags": 6,
  "Present Perfect": 7,
  "Relative Clauses": 7,
  "Past Continuous": 8,
  "Future (will / going to)": 8,
  "Gerunds vs Infinitives": 8,
  "Modal Verbs": 9,
  "Passive Voice": 9,
  "Reported Speech": 9,
  "First Conditional": 10,
  "Second Conditional": 10,
  "So / Neither Agreement": 10,
};

const VOCAB_STAGE_MAP_BASE: Record<string, [number, number]> = {
  "Synonyms": [1, 2],
  "Antonyms": [3, 3],
  "Collocations": [4, 5],
  "Phrasal Verbs": [6, 7],
  "Word Formation": [8, 8],
  "Commonly Confused Words": [9, 10],
};

async function assignGrammar() {
  let updated = 0;
  for (const [topic, stage] of Object.entries(GRAMMAR_STAGE_MAP)) {
    const result = await prisma.question.updateMany({
      where: { module: "english", section: "grammar", topic },
      data: { stage },
    });
    updated += result.count;
    console.log(`  Grammar / ${topic} → stage ${stage} (${result.count} questions)`);
  }
  return updated;
}

async function assignVocabulary() {
  let updated = 0;
  for (const [topic, [stageMin, stageMax]] of Object.entries(VOCAB_STAGE_MAP_BASE)) {
    const questions = await prisma.question.findMany({
      where: { module: "english", section: "vocabulary", topic },
      select: { id: true },
    });

    // Répartit les questions du topic entre les étapes de sa plage (stageMin à stageMax)
    const stageCount = stageMax - stageMin + 1;
    const chunkSize = Math.ceil(questions.length / stageCount);

    for (let i = 0; i < questions.length; i++) {
      const stage = stageMin + Math.floor(i / chunkSize);
      await prisma.question.update({
        where: { id: questions[i].id },
        data: { stage: Math.min(stage, stageMax) },
      });
      updated++;
    }
    console.log(`  Vocabulary / ${topic} → stages ${stageMin}-${stageMax} (${questions.length} questions)`);
  }
  return updated;
}

async function main() {
  console.log("Répartition Grammar :");
  const grammarCount = await assignGrammar();

  console.log("\nRépartition Vocabulary :");
  const vocabCount = await assignVocabulary();

  // Vérification : y a-t-il des questions sans stage assigné ?
  const unassigned = await prisma.question.count({
    where: {
      module: "english",
      section: { in: ["grammar", "vocabulary"] },
      stage: null,
    },
  });

  console.log(`\nTotal assigné : ${grammarCount + vocabCount} questions`);
  if (unassigned > 0) {
    console.warn(`⚠ ${unassigned} questions B1 sans stage (topic non mappé) — à vérifier manuellement.`);
    const orphans = await prisma.question.findMany({
      where: { module: "english", section: { in: ["grammar", "vocabulary"] }, stage: null },
      select: { id: true, section: true, topic: true, content: true },
      take: 10,
    });
    console.log(orphans);
  } else {
    console.log("✓ Toutes les questions B1 grammar/vocabulary ont un stage assigné.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
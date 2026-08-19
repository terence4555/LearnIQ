import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type SeedQuestion = {
  module: string; section: string; topic: string; level: string;
  difficulty: number; type: "MCQ"; content: string; correctAnswer: string;
  explanation: string; options: string[];
};

const questions: SeedQuestion[] = [
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The ___ of the new bridge will take two years. (construct)",
    "correctAnswer": "construction",
    "explanation": "Topic: Word Formation",
    "options": [
      "construction",
      "constructs",
      "constructing",
      "constructive"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She showed great ___ during the interview. (confident)",
    "correctAnswer": "confidence",
    "explanation": "Topic: Word Formation",
    "options": [
      "confidences",
      "confidence",
      "confidently",
      "confident"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "His ___ was clear to everyone in the room. (happy)",
    "correctAnswer": "happiness",
    "explanation": "Topic: Word Formation",
    "options": [
      "happily",
      "happiness",
      "happier",
      "happiness's"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The company needs more ___ staff. (create)",
    "correctAnswer": "creative",
    "explanation": "Topic: Word Formation",
    "options": [
      "creator",
      "creatively",
      "creative",
      "creation"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Her ___ to the team was very valuable. (contribute)",
    "correctAnswer": "contribution",
    "explanation": "Topic: Word Formation",
    "options": [
      "contribution",
      "contributor",
      "contributive",
      "contributing"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This is a ___ decision that will affect everyone. (importance)",
    "correctAnswer": "important",
    "explanation": "Topic: Word Formation",
    "options": [
      "importantly",
      "importance's",
      "importing",
      "important"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The ___ of the experiment surprised the scientists. (succeed)",
    "correctAnswer": "success",
    "explanation": "Topic: Word Formation",
    "options": [
      "succeeding",
      "success",
      "successfully",
      "successful"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "His speech was full of ___ remarks. (encourage)",
    "correctAnswer": "encouraging",
    "explanation": "Topic: Word Formation",
    "options": [
      "encouraging",
      "encouragement",
      "encouraged",
      "encourager"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The manager praised her ___ approach to problems. (practical)",
    "correctAnswer": "practical",
    "explanation": "Topic: Word Formation",
    "options": [
      "practice",
      "practically",
      "practical",
      "practicality"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They reached an ___ agreement after long talks. (finally)",
    "correctAnswer": "final",
    "explanation": "Topic: Word Formation",
    "options": [
      "finally",
      "final",
      "finality",
      "finalize"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The ___ of the movie was excellent. (direct)",
    "correctAnswer": "direction",
    "explanation": "Topic: Word Formation",
    "options": [
      "directly",
      "directive",
      "direction",
      "director"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She has a strong ___ for languages. (able)",
    "correctAnswer": "ability",
    "explanation": "Topic: Word Formation",
    "options": [
      "ably",
      "enable",
      "capable",
      "ability"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "His ___ behavior surprised his colleagues. (responsible)",
    "correctAnswer": "responsible",
    "explanation": "Topic: Word Formation",
    "options": [
      "responsibility",
      "responsibly",
      "responsible",
      "irresponsible"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The ___ between the two theories is significant. (differ)",
    "correctAnswer": "difference",
    "explanation": "Topic: Word Formation",
    "options": [
      "differently",
      "difference",
      "different",
      "differing"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Her ___ in the project was essential. (involve)",
    "correctAnswer": "involvement",
    "explanation": "Topic: Word Formation",
    "options": [
      "involves",
      "involvement",
      "involving",
      "involved"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ my keys somewhere in the house yesterday.",
    "correctAnswer": "lost",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "missed",
      "left",
      "lost",
      "forgot"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Please ___ the door when you leave.",
    "correctAnswer": "close",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "end",
      "finish",
      "close",
      "shut down"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ her opinion after hearing the facts.",
    "correctAnswer": "changed",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "traded",
      "exchanged",
      "switched off",
      "changed"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ to the gym every morning before work.",
    "correctAnswer": "goes",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "moves",
      "walks",
      "goes",
      "runs to"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Can you ___ me understand this exercise?",
    "correctAnswer": "help",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "help",
      "assist to",
      "support to",
      "aid to"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ a new house last year.",
    "correctAnswer": "bought",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "bought",
      "ordered",
      "shopped",
      "purchased for"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I need to ___ this form before Friday.",
    "correctAnswer": "submit",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "submit",
      "deliver in",
      "send in to",
      "pass in"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ the exam without any problems.",
    "correctAnswer": "passed",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "won",
      "passed",
      "succeeded",
      "achieved"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ his promise to help us.",
    "correctAnswer": "kept",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "took",
      "held",
      "maintained to",
      "kept"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ the meeting until next week.",
    "correctAnswer": "postponed",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "pushed",
      "moved on",
      "delayed to",
      "postponed"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ agree with your point of view.",
    "correctAnswer": "completely",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "completely",
      "entire",
      "fully with",
      "totally to"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ to the new job quickly.",
    "correctAnswer": "adapted",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "adjusted to",
      "changed to",
      "fit",
      "adapted"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The teacher ___ the difficult concept clearly.",
    "correctAnswer": "explained",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "explained",
      "said",
      "described to",
      "told about"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ his mistake and apologized.",
    "correctAnswer": "admitted",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "accepted to",
      "confirmed to",
      "admitted",
      "agreed to"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ the project successfully.",
    "correctAnswer": "completed",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "closed",
      "finalized to",
      "completed",
      "ended to"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ you to arrive early tomorrow.",
    "correctAnswer": "advise",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "recommend to",
      "advise",
      "suggest to",
      "propose to"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ her research before writing the report.",
    "correctAnswer": "conducted",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "did to",
      "performed to",
      "made to",
      "conducted"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ a great effort to finish on time.",
    "correctAnswer": "made",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "did",
      "took",
      "made",
      "gave"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The company ___ new employees every year.",
    "correctAnswer": "hires",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "hires",
      "takes",
      "employs to",
      "recruits to"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ the difference between these two options.",
    "correctAnswer": "notice",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "perceive to",
      "recognize to",
      "notice",
      "realize to"
    ]
  }
];

async function main() {
  console.log(`Seeding ${questions.length} additional vocabulary questions...`);
  for (const q of questions) {
    await prisma.question.create({
      data: {
        module: q.module, section: q.section, topic: q.topic, level: q.level,
        difficulty: q.difficulty, type: q.type, content: q.content,
        correctAnswer: q.correctAnswer, explanation: q.explanation,
        options: { create: q.options.map((opt) => ({ content: opt, isCorrect: opt === q.correctAnswer })) },
      },
    });
  }
  console.log(`Seeded ${questions.length} additional vocabulary questions successfully.`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
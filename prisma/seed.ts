import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type SeedQuestion = {
  module: string;
  section: string;
  topic: string;
  level: string;
  difficulty: number;
  type: "MCQ";
  content: string;
  correctAnswer: string;
  explanation: string;
  options: string[];
};

const questions: SeedQuestion[] = [
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My parents ___ the report often.",
    "correctAnswer": "study",
    "explanation": "Topic: Present Simple",
    "options": [
      "studies",
      "studied",
      "study",
      "studying"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ breakfast often.",
    "correctAnswer": "studies",
    "explanation": "Topic: Present Simple",
    "options": [
      "studied",
      "study",
      "studying",
      "studies"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ a new book every morning.",
    "correctAnswer": "play",
    "explanation": "Topic: Present Simple",
    "options": [
      "played",
      "play",
      "playing",
      "plays"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The students ___ the news often.",
    "correctAnswer": "visit",
    "explanation": "Topic: Present Simple",
    "options": [
      "visiting",
      "visits",
      "visit",
      "visited"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ an email twice a week.",
    "correctAnswer": "listens",
    "explanation": "Topic: Present Simple",
    "options": [
      "listening",
      "listen",
      "listened",
      "listens"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ the dishes every morning.",
    "correctAnswer": "listen",
    "explanation": "Topic: Present Simple",
    "options": [
      "listens",
      "listened",
      "listen",
      "listening"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ a letter twice a week.",
    "correctAnswer": "study",
    "explanation": "Topic: Present Simple",
    "options": [
      "study",
      "studies",
      "studied",
      "studying"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ the piano every day.",
    "correctAnswer": "take",
    "explanation": "Topic: Present Simple",
    "options": [
      "taking",
      "takes",
      "take",
      "took"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My parents ___ a song twice a week.",
    "correctAnswer": "do",
    "explanation": "Topic: Present Simple",
    "options": [
      "does",
      "do",
      "did",
      "doing"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The teacher ___ the report often.",
    "correctAnswer": "watches",
    "explanation": "Topic: Present Simple",
    "options": [
      "watching",
      "watches",
      "watched",
      "watch"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ the car on weekends.",
    "correctAnswer": "studies",
    "explanation": "Topic: Present Simple",
    "options": [
      "studies",
      "study",
      "studying",
      "studied"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ a letter every morning.",
    "correctAnswer": "eats",
    "explanation": "Topic: Present Simple",
    "options": [
      "eat",
      "eats",
      "ate",
      "eating"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the dishes usually.",
    "correctAnswer": "finishes",
    "explanation": "Topic: Present Simple",
    "options": [
      "finishing",
      "finished",
      "finishes",
      "finish"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ a song often.",
    "correctAnswer": "listen",
    "explanation": "Topic: Present Simple",
    "options": [
      "listen",
      "listened",
      "listening",
      "listens"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ the garden every day.",
    "correctAnswer": "walk",
    "explanation": "Topic: Present Simple",
    "options": [
      "walk",
      "walked",
      "walks",
      "walking"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ a song usually.",
    "correctAnswer": "visit",
    "explanation": "Topic: Present Simple",
    "options": [
      "visited",
      "visits",
      "visit",
      "visiting"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ some photos every morning.",
    "correctAnswer": "finish",
    "explanation": "Topic: Present Simple",
    "options": [
      "finishes",
      "finished",
      "finish",
      "finishing"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The teacher ___ the piano on weekends.",
    "correctAnswer": "breaks",
    "explanation": "Topic: Present Simple",
    "options": [
      "breaks",
      "break",
      "breaking",
      "broke"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ the dishes right now.",
    "correctAnswer": "are studying",
    "explanation": "Topic: Present Continuous",
    "options": [
      "study",
      "studies",
      "are studying",
      "studied"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ breakfast right now.",
    "correctAnswer": "are watching",
    "explanation": "Topic: Present Continuous",
    "options": [
      "are watching",
      "watched",
      "watches",
      "watch"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the car right now.",
    "correctAnswer": "is working",
    "explanation": "Topic: Present Continuous",
    "options": [
      "is working",
      "work",
      "works",
      "worked"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The students ___ the piano right now.",
    "correctAnswer": "are cleaning",
    "explanation": "Topic: Present Continuous",
    "options": [
      "clean",
      "cleaned",
      "cleans",
      "are cleaning"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My parents ___ an email right now.",
    "correctAnswer": "are listening",
    "explanation": "Topic: Present Continuous",
    "options": [
      "are listening",
      "listen",
      "listened",
      "listens"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ the car right now.",
    "correctAnswer": "are cleaning",
    "explanation": "Topic: Present Continuous",
    "options": [
      "cleans",
      "are cleaning",
      "cleaned",
      "clean"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The teacher ___ the piano right now.",
    "correctAnswer": "is cleaning",
    "explanation": "Topic: Present Continuous",
    "options": [
      "cleaned",
      "is cleaning",
      "cleans",
      "clean"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My parents ___ the garden right now.",
    "correctAnswer": "are cleaning",
    "explanation": "Topic: Present Continuous",
    "options": [
      "cleans",
      "cleaned",
      "are cleaning",
      "clean"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ an email right now.",
    "correctAnswer": "is listening",
    "explanation": "Topic: Present Continuous",
    "options": [
      "listened",
      "listen",
      "listens",
      "is listening"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My brother ___ a new book right now.",
    "correctAnswer": "is playing",
    "explanation": "Topic: Present Continuous",
    "options": [
      "played",
      "is playing",
      "play",
      "plays"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ a song right now.",
    "correctAnswer": "am studying",
    "explanation": "Topic: Present Continuous",
    "options": [
      "studies",
      "study",
      "studied",
      "am studying"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ an email right now.",
    "correctAnswer": "are listening",
    "explanation": "Topic: Present Continuous",
    "options": [
      "listens",
      "listened",
      "are listening",
      "listen"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The students ___ her homework right now.",
    "correctAnswer": "are watching",
    "explanation": "Topic: Present Continuous",
    "options": [
      "watch",
      "watches",
      "are watching",
      "watched"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The teacher ___ the car right now.",
    "correctAnswer": "is cleaning",
    "explanation": "Topic: Present Continuous",
    "options": [
      "is cleaning",
      "cleaned",
      "clean",
      "cleans"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ the guitar right now.",
    "correctAnswer": "are studying",
    "explanation": "Topic: Present Continuous",
    "options": [
      "studies",
      "studied",
      "study",
      "are studying"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the guitar right now.",
    "correctAnswer": "is listening",
    "explanation": "Topic: Present Continuous",
    "options": [
      "listened",
      "listens",
      "is listening",
      "listen"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The teacher ___ the report last night.",
    "correctAnswer": "finished",
    "explanation": "Topic: Past Simple",
    "options": [
      "finishes",
      "finish",
      "finishing",
      "finished"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ the guitar last week.",
    "correctAnswer": "read",
    "explanation": "Topic: Past Simple",
    "options": [
      "read",
      "reads",
      "reading"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ the dishes last month.",
    "correctAnswer": "broke",
    "explanation": "Topic: Past Simple",
    "options": [
      "breaks",
      "break",
      "broke",
      "breaking"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ a new book yesterday.",
    "correctAnswer": "visited",
    "explanation": "Topic: Past Simple",
    "options": [
      "visited",
      "visits",
      "visit",
      "visiting"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ the garden last month.",
    "correctAnswer": "took",
    "explanation": "Topic: Past Simple",
    "options": [
      "take",
      "taking",
      "takes",
      "took"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ the news last week.",
    "correctAnswer": "saw",
    "explanation": "Topic: Past Simple",
    "options": [
      "see",
      "sees",
      "seeing",
      "saw"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ some photos last night.",
    "correctAnswer": "broke",
    "explanation": "Topic: Past Simple",
    "options": [
      "breaks",
      "break",
      "broke",
      "breaking"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My brother ___ the garden yesterday.",
    "correctAnswer": "walked",
    "explanation": "Topic: Past Simple",
    "options": [
      "walk",
      "walked",
      "walks",
      "walking"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ the piano yesterday.",
    "correctAnswer": "finished",
    "explanation": "Topic: Past Simple",
    "options": [
      "finish",
      "finishes",
      "finishing",
      "finished"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ some photos last night.",
    "correctAnswer": "bought",
    "explanation": "Topic: Past Simple",
    "options": [
      "buy",
      "buys",
      "bought",
      "buying"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ the car last week.",
    "correctAnswer": "played",
    "explanation": "Topic: Past Simple",
    "options": [
      "played",
      "plays",
      "play",
      "playing"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The teacher ___ breakfast last month.",
    "correctAnswer": "broke",
    "explanation": "Topic: Past Simple",
    "options": [
      "break",
      "breaks",
      "broke",
      "breaking"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "It ___ the report last summer.",
    "correctAnswer": "visited",
    "explanation": "Topic: Past Simple",
    "options": [
      "visiting",
      "visit",
      "visits",
      "visited"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ a movie two days ago.",
    "correctAnswer": "worked",
    "explanation": "Topic: Past Simple",
    "options": [
      "working",
      "works",
      "worked",
      "work"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ a movie yesterday.",
    "correctAnswer": "watched",
    "explanation": "Topic: Past Simple",
    "options": [
      "watches",
      "watched",
      "watching",
      "watch"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ a movie last summer.",
    "correctAnswer": "walked",
    "explanation": "Topic: Past Simple",
    "options": [
      "walk",
      "walking",
      "walks",
      "walked"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ a movie last summer.",
    "correctAnswer": "sent",
    "explanation": "Topic: Past Simple",
    "options": [
      "sending",
      "sent",
      "send",
      "sends"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Simple",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My parents ___ the guitar last week.",
    "correctAnswer": "went",
    "explanation": "Topic: Past Simple",
    "options": [
      "goes",
      "go",
      "went",
      "going"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My brother ___ a song already.",
    "correctAnswer": "has bought",
    "explanation": "Topic: Present Perfect",
    "options": [
      "buy",
      "have bought",
      "bought",
      "has bought"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ the guitar since 2020.",
    "correctAnswer": "have spoken",
    "explanation": "Topic: Present Perfect",
    "options": [
      "has spoken",
      "spoke",
      "have spoken",
      "speak"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ a letter yet?",
    "correctAnswer": "have written",
    "explanation": "Topic: Present Perfect",
    "options": [
      "have written",
      "write",
      "has written",
      "wrote"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the piano already.",
    "correctAnswer": "has finished",
    "explanation": "Topic: Present Perfect",
    "options": [
      "finished",
      "has finished",
      "have finished",
      "finish"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ a new book already.",
    "correctAnswer": "has taken",
    "explanation": "Topic: Present Perfect",
    "options": [
      "has taken",
      "take",
      "have taken",
      "took"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the news yet?",
    "correctAnswer": "has written",
    "explanation": "Topic: Present Perfect",
    "options": [
      "has written",
      "have written",
      "write",
      "wrote"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The students ___ her homework already.",
    "correctAnswer": "have broken",
    "explanation": "Topic: Present Perfect",
    "options": [
      "has broken",
      "broke",
      "break",
      "have broken"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "It ___ the report yet?",
    "correctAnswer": "has gone",
    "explanation": "Topic: Present Perfect",
    "options": [
      "has gone",
      "have gone",
      "go",
      "went"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ some photos since 2020.",
    "correctAnswer": "has sent",
    "explanation": "Topic: Present Perfect",
    "options": [
      "sent",
      "has sent",
      "send",
      "have sent"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ a song just.",
    "correctAnswer": "have eaten",
    "explanation": "Topic: Present Perfect",
    "options": [
      "eat",
      "has eaten",
      "ate",
      "have eaten"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ the report yet?",
    "correctAnswer": "have seen",
    "explanation": "Topic: Present Perfect",
    "options": [
      "has seen",
      "saw",
      "have seen",
      "see"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ the guitar already.",
    "correctAnswer": "has finished",
    "explanation": "Topic: Present Perfect",
    "options": [
      "has finished",
      "finished",
      "have finished",
      "finish"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the dishes just.",
    "correctAnswer": "has sent",
    "explanation": "Topic: Present Perfect",
    "options": [
      "send",
      "have sent",
      "has sent",
      "sent"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ the news yet?",
    "correctAnswer": "have seen",
    "explanation": "Topic: Present Perfect",
    "options": [
      "saw",
      "have seen",
      "see",
      "has seen"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "It ___ an email already.",
    "correctAnswer": "has seen",
    "explanation": "Topic: Present Perfect",
    "options": [
      "see",
      "saw",
      "has seen",
      "have seen"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ the garden for two years.",
    "correctAnswer": "has written",
    "explanation": "Topic: Present Perfect",
    "options": [
      "have written",
      "has written",
      "wrote",
      "write"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ breakfast just.",
    "correctAnswer": "has gone",
    "explanation": "Topic: Present Perfect",
    "options": [
      "has gone",
      "go",
      "went",
      "have gone"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Present Perfect",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ a letter since 2020.",
    "correctAnswer": "have taken",
    "explanation": "Topic: Present Perfect",
    "options": [
      "have taken",
      "took",
      "take",
      "has taken"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ the dishes when it started to rain.",
    "correctAnswer": "was working",
    "explanation": "Topic: Past Continuous",
    "options": [
      "worked",
      "were working",
      "was working",
      "work"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the news when it started to rain.",
    "correctAnswer": "was visiting",
    "explanation": "Topic: Past Continuous",
    "options": [
      "were visiting",
      "was visiting",
      "visited",
      "visit"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They ___ her homework when I arrived.",
    "correctAnswer": "were calling",
    "explanation": "Topic: Past Continuous",
    "options": [
      "was calling",
      "called",
      "call",
      "were calling"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ breakfast when she called.",
    "correctAnswer": "was listening",
    "explanation": "Topic: Past Continuous",
    "options": [
      "was listening",
      "listen",
      "were listening",
      "listened"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ a letter when she called.",
    "correctAnswer": "were cooking",
    "explanation": "Topic: Past Continuous",
    "options": [
      "was cooking",
      "cooked",
      "cook",
      "were cooking"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The students ___ a letter when the power went out.",
    "correctAnswer": "were cleaning",
    "explanation": "Topic: Past Continuous",
    "options": [
      "were cleaning",
      "cleaned",
      "clean",
      "was cleaning"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The students ___ the car when I arrived.",
    "correctAnswer": "were watching",
    "explanation": "Topic: Past Continuous",
    "options": [
      "watched",
      "were watching",
      "watch",
      "was watching"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the car when it started to rain.",
    "correctAnswer": "was calling",
    "explanation": "Topic: Past Continuous",
    "options": [
      "were calling",
      "call",
      "called",
      "was calling"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ a movie when she called.",
    "correctAnswer": "was visiting",
    "explanation": "Topic: Past Continuous",
    "options": [
      "was visiting",
      "were visiting",
      "visited",
      "visit"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My brother ___ some photos when she called.",
    "correctAnswer": "was studying",
    "explanation": "Topic: Past Continuous",
    "options": [
      "were studying",
      "was studying",
      "study",
      "studied"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "It ___ a letter when she called.",
    "correctAnswer": "was listening",
    "explanation": "Topic: Past Continuous",
    "options": [
      "listen",
      "listened",
      "were listening",
      "was listening"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ the report when I arrived.",
    "correctAnswer": "was studying",
    "explanation": "Topic: Past Continuous",
    "options": [
      "study",
      "studied",
      "were studying",
      "was studying"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This car ___ the car when the power went out.",
    "correctAnswer": "was working",
    "explanation": "Topic: Past Continuous",
    "options": [
      "was working",
      "were working",
      "work",
      "worked"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Past Continuous",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "My brother ___ the dishes when I arrived.",
    "correctAnswer": "was visiting",
    "explanation": "Topic: Past Continuous",
    "options": [
      "visit",
      "visited",
      "were visiting",
      "was visiting"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I think I ___ call her later.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "will",
      "am go to",
      "going to",
      "am going to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Look at those clouds! It ___ rain.",
    "correctAnswer": "is going to",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "is going",
      "was going to",
      "is going to",
      "will"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I think I ___ call her later.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "will",
      "am going to",
      "going to",
      "am go to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I promise I ___ help you tomorrow.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "will",
      "am going to",
      "going to",
      "will to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I think I ___ call her later.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "will",
      "going to",
      "am going to",
      "am go to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I think I ___ call her later.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "will",
      "am going to",
      "am go to",
      "going to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I think I ___ call her later.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "am go to",
      "will",
      "am going to",
      "going to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ visit Paris next summer, we already booked the flights.",
    "correctAnswer": "are going to",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "are going to",
      "are go to",
      "going to",
      "will"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ visit Paris next summer, we already booked the flights.",
    "correctAnswer": "are going to",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "will",
      "are go to",
      "going to",
      "are going to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I think I ___ call her later.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "am going to",
      "will",
      "going to",
      "am go to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I think I ___ call her later.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "am go to",
      "going to",
      "am going to",
      "will"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ visit Paris next summer, we already booked the flights.",
    "correctAnswer": "are going to",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "are go to",
      "are going to",
      "will",
      "going to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I think I ___ call her later.",
    "correctAnswer": "will",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "going to",
      "will",
      "am going to",
      "am go to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ start a new job next Monday, it's all planned.",
    "correctAnswer": "is going to",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "is go to",
      "is going to",
      "will",
      "going to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Future (will / going to)",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ visit Paris next summer, we already booked the flights.",
    "correctAnswer": "are going to",
    "explanation": "Topic: Future (will / going to)",
    "options": [
      "are going to",
      "going to",
      "will",
      "are go to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will celebrate.",
    "correctAnswer": "forgets",
    "explanation": "Topic: First Conditional",
    "options": [
      "will forget",
      "forgets",
      "would forget",
      "forget"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, they will be happy.",
    "correctAnswer": "misses",
    "explanation": "Topic: First Conditional",
    "options": [
      "will miss",
      "miss",
      "misses",
      "would miss"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will celebrate.",
    "correctAnswer": "misses",
    "explanation": "Topic: First Conditional",
    "options": [
      "miss",
      "misses",
      "will miss",
      "would miss"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, you will pass the exam.",
    "correctAnswer": "arrives",
    "explanation": "Topic: First Conditional",
    "options": [
      "will arrive",
      "would arrive",
      "arrive",
      "arrives"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will celebrate.",
    "correctAnswer": "rains",
    "explanation": "Topic: First Conditional",
    "options": [
      "will rain",
      "rain",
      "rains",
      "would rain"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will stay home.",
    "correctAnswer": "studies",
    "explanation": "Topic: First Conditional",
    "options": [
      "studies",
      "would study",
      "study",
      "will study"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, they will be happy.",
    "correctAnswer": "studies",
    "explanation": "Topic: First Conditional",
    "options": [
      "studies",
      "would study",
      "study",
      "will study"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, they will be happy.",
    "correctAnswer": "misses",
    "explanation": "Topic: First Conditional",
    "options": [
      "would miss",
      "miss",
      "misses",
      "will miss"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will celebrate.",
    "correctAnswer": "rains",
    "explanation": "Topic: First Conditional",
    "options": [
      "will rain",
      "would rain",
      "rain",
      "rains"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will stay home.",
    "correctAnswer": "wins",
    "explanation": "Topic: First Conditional",
    "options": [
      "win",
      "will win",
      "would win",
      "wins"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will stay home.",
    "correctAnswer": "studies",
    "explanation": "Topic: First Conditional",
    "options": [
      "would study",
      "will study",
      "studies",
      "study"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will celebrate.",
    "correctAnswer": "arrives",
    "explanation": "Topic: First Conditional",
    "options": [
      "arrive",
      "would arrive",
      "will arrive",
      "arrives"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, we will celebrate.",
    "correctAnswer": "arrives",
    "explanation": "Topic: First Conditional",
    "options": [
      "would arrive",
      "arrives",
      "arrive",
      "will arrive"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "First Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If it ___ tomorrow, he will be in trouble.",
    "correctAnswer": "forgets",
    "explanation": "Topic: First Conditional",
    "options": [
      "will forget",
      "forget",
      "would forget",
      "forgets"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If I ___ rich, I would travel the world.",
    "correctAnswer": "were",
    "explanation": "Topic: Second Conditional",
    "options": [
      "will be",
      "am",
      "was",
      "were"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If we ___ a car, we would drive there.",
    "correctAnswer": "had",
    "explanation": "Topic: Second Conditional",
    "options": [
      "will have",
      "has",
      "had",
      "have"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If I ___ rich, I would travel the world.",
    "correctAnswer": "were",
    "explanation": "Topic: Second Conditional",
    "options": [
      "was",
      "were",
      "will be",
      "am"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If he ___ the truth, he would tell us.",
    "correctAnswer": "knew",
    "explanation": "Topic: Second Conditional",
    "options": [
      "will know",
      "know",
      "knows",
      "knew"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If they ___ here, they would help us.",
    "correctAnswer": "were",
    "explanation": "Topic: Second Conditional",
    "options": [
      "will be",
      "are",
      "was",
      "were"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If I ___ rich, I would travel the world.",
    "correctAnswer": "were",
    "explanation": "Topic: Second Conditional",
    "options": [
      "am",
      "were",
      "was",
      "will be"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If we ___ a car, we would drive there.",
    "correctAnswer": "had",
    "explanation": "Topic: Second Conditional",
    "options": [
      "had",
      "have",
      "will have",
      "has"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If she ___ more time, she would learn French.",
    "correctAnswer": "had",
    "explanation": "Topic: Second Conditional",
    "options": [
      "have",
      "has",
      "had",
      "will have"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If he ___ the truth, he would tell us.",
    "correctAnswer": "knew",
    "explanation": "Topic: Second Conditional",
    "options": [
      "knew",
      "know",
      "knows",
      "will know"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If he ___ the truth, he would tell us.",
    "correctAnswer": "knew",
    "explanation": "Topic: Second Conditional",
    "options": [
      "will know",
      "knew",
      "knows",
      "know"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If I ___ rich, I would travel the world.",
    "correctAnswer": "were",
    "explanation": "Topic: Second Conditional",
    "options": [
      "will be",
      "were",
      "was",
      "am"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If we ___ a car, we would drive there.",
    "correctAnswer": "had",
    "explanation": "Topic: Second Conditional",
    "options": [
      "has",
      "had",
      "have",
      "will have"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If we ___ a car, we would drive there.",
    "correctAnswer": "had",
    "explanation": "Topic: Second Conditional",
    "options": [
      "will have",
      "have",
      "had",
      "has"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Second Conditional",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "If she ___ more time, she would learn French.",
    "correctAnswer": "had",
    "explanation": "Topic: Second Conditional",
    "options": [
      "had",
      "will have",
      "has",
      "have"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ see a doctor if the pain continues.",
    "correctAnswer": "should",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "must to",
      "should",
      "would",
      "can"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ worry, everything will be fine.",
    "correctAnswer": "don't have to",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "can't",
      "shouldn't to",
      "don't have to",
      "mustn't"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Students ___ wear a uniform at this school.",
    "correctAnswer": "must",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "would",
      "must",
      "can",
      "should to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Students ___ wear a uniform at this school.",
    "correctAnswer": "must",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "must",
      "can",
      "would",
      "should to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ finish this by Friday, it's the deadline.",
    "correctAnswer": "have to",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "can",
      "should to",
      "would",
      "have to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ speak three languages fluently.",
    "correctAnswer": "can",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "must",
      "can",
      "should",
      "has to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ see a doctor if the pain continues.",
    "correctAnswer": "should",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "should",
      "would",
      "must to",
      "can"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We ___ finish this by Friday, it's the deadline.",
    "correctAnswer": "have to",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "have to",
      "would",
      "should to",
      "can"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ see a doctor if the pain continues.",
    "correctAnswer": "should",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "would",
      "should",
      "must to",
      "can"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ smoke in here, it's not allowed.",
    "correctAnswer": "mustn't",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "shouldn't",
      "mustn't",
      "can't to",
      "don't have to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Students ___ wear a uniform at this school.",
    "correctAnswer": "must",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "should to",
      "would",
      "must",
      "can"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Students ___ wear a uniform at this school.",
    "correctAnswer": "must",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "must",
      "would",
      "can",
      "should to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ smoke in here, it's not allowed.",
    "correctAnswer": "mustn't",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "shouldn't",
      "mustn't",
      "can't to",
      "don't have to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ see a doctor if the pain continues.",
    "correctAnswer": "should",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "can",
      "should",
      "would",
      "must to"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Students ___ wear a uniform at this school.",
    "correctAnswer": "must",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "would",
      "must",
      "should to",
      "can"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Modal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "You ___ smoke in here, it's not allowed.",
    "correctAnswer": "mustn't",
    "explanation": "Topic: Modal Verbs",
    "options": [
      "don't have to",
      "mustn't",
      "can't to",
      "shouldn't"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This is the ___ hotel in the city.",
    "correctAnswer": "most difficult",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "difficultest more",
      "difficult",
      "more difficult",
      "most difficult"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "more difficult",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "difficult",
      "difficulter more",
      "more difficult",
      "most difficult"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "better",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "good",
      "best",
      "better",
      "gooder more"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "more interesting",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "interesting",
      "most interesting",
      "interestinger more",
      "more interesting"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "easier",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "easy",
      "easiest",
      "easyer more",
      "easier"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "happier",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "happier",
      "happyer more",
      "happiest",
      "happy"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "more difficult",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "more difficult",
      "difficult",
      "difficulter more",
      "most difficult"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "better",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "good",
      "gooder more",
      "best",
      "better"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "more expensive",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "expensive",
      "more expensive",
      "expensiveer more",
      "most expensive"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This is the ___ hotel in the city.",
    "correctAnswer": "fastest",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "fast",
      "faster",
      "fastest more",
      "fastest"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "more interesting",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "most interesting",
      "more interesting",
      "interesting",
      "interestinger more"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This is the ___ hotel in the city.",
    "correctAnswer": "most expensive",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "most expensive",
      "expensive",
      "expensiveest more",
      "more expensive"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "smaller",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "small",
      "smaller",
      "smaller more",
      "smallest"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This is the ___ hotel in the city.",
    "correctAnswer": "most interesting",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "interestingest more",
      "most interesting",
      "more interesting",
      "interesting"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "better",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "good",
      "best",
      "gooder more",
      "better"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Comparatives & Superlatives",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This book is ___ than that one.",
    "correctAnswer": "better",
    "explanation": "Topic: Comparatives & Superlatives",
    "options": [
      "gooder more",
      "better",
      "good",
      "best"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The report ___ every month.",
    "correctAnswer": "is written",
    "explanation": "Topic: Passive Voice",
    "options": [
      "is written",
      "writes",
      "written",
      "was written"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The cake ___ by my mother.",
    "correctAnswer": "was made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "was make",
      "was made",
      "made",
      "is made"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "These cars ___ in Germany.",
    "correctAnswer": "are made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "made",
      "were made",
      "make",
      "are made"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "These cars ___ in Germany.",
    "correctAnswer": "are made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "make",
      "made",
      "are made",
      "were made"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This bridge ___ in 1990.",
    "correctAnswer": "was built",
    "explanation": "Topic: Passive Voice",
    "options": [
      "is built",
      "built",
      "was build",
      "was built"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "These cars ___ in Germany.",
    "correctAnswer": "are made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "were made",
      "make",
      "made",
      "are made"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "These cars ___ in Germany.",
    "correctAnswer": "are made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "were made",
      "are made",
      "make",
      "made"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "These cars ___ in Germany.",
    "correctAnswer": "are made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "are made",
      "make",
      "were made",
      "made"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The letter ___ yesterday.",
    "correctAnswer": "was sent",
    "explanation": "Topic: Passive Voice",
    "options": [
      "was sent",
      "was send",
      "sent",
      "is sent"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The cake ___ by my mother.",
    "correctAnswer": "was made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "made",
      "was made",
      "is made",
      "was make"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This bridge ___ in 1990.",
    "correctAnswer": "was built",
    "explanation": "Topic: Passive Voice",
    "options": [
      "was built",
      "is built",
      "built",
      "was build"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The cake ___ by my mother.",
    "correctAnswer": "was made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "made",
      "was made",
      "was make",
      "is made"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The report ___ every month.",
    "correctAnswer": "is written",
    "explanation": "Topic: Passive Voice",
    "options": [
      "written",
      "was written",
      "writes",
      "is written"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The cake ___ by my mother.",
    "correctAnswer": "was made",
    "explanation": "Topic: Passive Voice",
    "options": [
      "was make",
      "is made",
      "made",
      "was made"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I'll see you ___ the weekend.",
    "correctAnswer": "at",
    "explanation": "Topic: Prepositions",
    "options": [
      "on",
      "at",
      "in",
      "for"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We arrived ___ 9 a.m.",
    "correctAnswer": "at",
    "explanation": "Topic: Prepositions",
    "options": [
      "at",
      "on",
      "by",
      "in"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I'll see you ___ the weekend.",
    "correctAnswer": "at",
    "explanation": "Topic: Prepositions",
    "options": [
      "in",
      "on",
      "at",
      "for"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She was born ___ 1998.",
    "correctAnswer": "in",
    "explanation": "Topic: Prepositions",
    "options": [
      "in",
      "at",
      "since",
      "on"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I'll see you ___ the weekend.",
    "correctAnswer": "at",
    "explanation": "Topic: Prepositions",
    "options": [
      "in",
      "on",
      "at",
      "for"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I'll see you ___ the weekend.",
    "correctAnswer": "at",
    "explanation": "Topic: Prepositions",
    "options": [
      "for",
      "at",
      "on",
      "in"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She was born ___ 1998.",
    "correctAnswer": "in",
    "explanation": "Topic: Prepositions",
    "options": [
      "since",
      "on",
      "at",
      "in"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The meeting is ___ Monday morning.",
    "correctAnswer": "on",
    "explanation": "Topic: Prepositions",
    "options": [
      "in",
      "for",
      "on",
      "at"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The meeting is ___ Monday morning.",
    "correctAnswer": "on",
    "explanation": "Topic: Prepositions",
    "options": [
      "on",
      "in",
      "for",
      "at"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He has lived here ___ five years.",
    "correctAnswer": "for",
    "explanation": "Topic: Prepositions",
    "options": [
      "for",
      "from",
      "since",
      "during"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The book is ___ the table.",
    "correctAnswer": "on",
    "explanation": "Topic: Prepositions",
    "options": [
      "at",
      "on",
      "under",
      "in"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The book is ___ the table.",
    "correctAnswer": "on",
    "explanation": "Topic: Prepositions",
    "options": [
      "under",
      "on",
      "at",
      "in"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The meeting is ___ Monday morning.",
    "correctAnswer": "on",
    "explanation": "Topic: Prepositions",
    "options": [
      "on",
      "for",
      "at",
      "in"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He has lived here ___ five years.",
    "correctAnswer": "for",
    "explanation": "Topic: Prepositions",
    "options": [
      "from",
      "since",
      "for",
      "during"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I'll see you ___ the weekend.",
    "correctAnswer": "at",
    "explanation": "Topic: Prepositions",
    "options": [
      "at",
      "in",
      "for",
      "on"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Prepositions",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We arrived ___ 9 a.m.",
    "correctAnswer": "at",
    "explanation": "Topic: Prepositions",
    "options": [
      "at",
      "on",
      "in",
      "by"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He plays ___ guitar every evening.",
    "correctAnswer": "the",
    "explanation": "Topic: Articles",
    "options": [
      "the",
      "a",
      "-",
      "an"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ moon orbits the Earth.",
    "correctAnswer": "The",
    "explanation": "Topic: Articles",
    "options": [
      "A",
      "-",
      "The",
      "An"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ best student in class.",
    "correctAnswer": "the",
    "explanation": "Topic: Articles",
    "options": [
      "an",
      "a",
      "the",
      "-"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ engineer.",
    "correctAnswer": "an",
    "explanation": "Topic: Articles",
    "options": [
      "an",
      "a",
      "-",
      "the"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "We need ___ new car.",
    "correctAnswer": "a",
    "explanation": "Topic: Articles",
    "options": [
      "the",
      "a",
      "an",
      "-"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ moon orbits the Earth.",
    "correctAnswer": "The",
    "explanation": "Topic: Articles",
    "options": [
      "An",
      "A",
      "-",
      "The"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ engineer.",
    "correctAnswer": "an",
    "explanation": "Topic: Articles",
    "options": [
      "the",
      "a",
      "an",
      "-"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ engineer.",
    "correctAnswer": "an",
    "explanation": "Topic: Articles",
    "options": [
      "the",
      "an",
      "-",
      "a"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ engineer.",
    "correctAnswer": "an",
    "explanation": "Topic: Articles",
    "options": [
      "an",
      "the",
      "a",
      "-"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ best student in class.",
    "correctAnswer": "the",
    "explanation": "Topic: Articles",
    "options": [
      "a",
      "the",
      "an",
      "-"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He plays ___ guitar every evening.",
    "correctAnswer": "the",
    "explanation": "Topic: Articles",
    "options": [
      "the",
      "an",
      "a",
      "-"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ best student in class.",
    "correctAnswer": "the",
    "explanation": "Topic: Articles",
    "options": [
      "a",
      "-",
      "an",
      "the"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I saw ___ elephant at the zoo.",
    "correctAnswer": "an",
    "explanation": "Topic: Articles",
    "options": [
      "a",
      "-",
      "an",
      "the"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ moon orbits the Earth.",
    "correctAnswer": "The",
    "explanation": "Topic: Articles",
    "options": [
      "A",
      "-",
      "An",
      "The"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ moon orbits the Earth.",
    "correctAnswer": "The",
    "explanation": "Topic: Articles",
    "options": [
      "The",
      "-",
      "An",
      "A"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Articles",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ engineer.",
    "correctAnswer": "an",
    "explanation": "Topic: Articles",
    "options": [
      "the",
      "-",
      "a",
      "an"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'happy'.",
    "correctAnswer": "glad",
    "explanation": "Topic: Synonyms",
    "options": [
      "sad",
      "angry",
      "glad",
      "tired"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'big'.",
    "correctAnswer": "large",
    "explanation": "Topic: Synonyms",
    "options": [
      "tiny",
      "short",
      "small",
      "large"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'fast'.",
    "correctAnswer": "quick",
    "explanation": "Topic: Synonyms",
    "options": [
      "lazy",
      "quick",
      "slow",
      "heavy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'beautiful'.",
    "correctAnswer": "pretty",
    "explanation": "Topic: Synonyms",
    "options": [
      "ugly",
      "cheap",
      "pretty",
      "boring"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'difficult'.",
    "correctAnswer": "hard",
    "explanation": "Topic: Synonyms",
    "options": [
      "soft",
      "hard",
      "simple",
      "easy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'begin'.",
    "correctAnswer": "start",
    "explanation": "Topic: Synonyms",
    "options": [
      "finish",
      "end",
      "start",
      "stop"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'buy'.",
    "correctAnswer": "purchase",
    "explanation": "Topic: Synonyms",
    "options": [
      "give",
      "sell",
      "borrow",
      "purchase"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'smart'.",
    "correctAnswer": "intelligent",
    "explanation": "Topic: Synonyms",
    "options": [
      "stupid",
      "intelligent",
      "weak",
      "lazy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'angry'.",
    "correctAnswer": "furious",
    "explanation": "Topic: Synonyms",
    "options": [
      "happy",
      "relaxed",
      "furious",
      "calm"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'rich'.",
    "correctAnswer": "wealthy",
    "explanation": "Topic: Synonyms",
    "options": [
      "generous",
      "poor",
      "cheap",
      "wealthy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'old'.",
    "correctAnswer": "ancient",
    "explanation": "Topic: Synonyms",
    "options": [
      "modern",
      "ancient",
      "young",
      "new"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'brave'.",
    "correctAnswer": "courageous",
    "explanation": "Topic: Synonyms",
    "options": [
      "cowardly",
      "shy",
      "weak",
      "courageous"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'funny'.",
    "correctAnswer": "hilarious",
    "explanation": "Topic: Synonyms",
    "options": [
      "serious",
      "sad",
      "hilarious",
      "boring"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'important'.",
    "correctAnswer": "significant",
    "explanation": "Topic: Synonyms",
    "options": [
      "small",
      "trivial",
      "significant",
      "cheap"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'polite'.",
    "correctAnswer": "courteous",
    "explanation": "Topic: Synonyms",
    "options": [
      "shy",
      "rude",
      "loud",
      "courteous"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'strong'.",
    "correctAnswer": "powerful",
    "explanation": "Topic: Synonyms",
    "options": [
      "powerful",
      "soft",
      "small",
      "weak"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'clean'.",
    "correctAnswer": "tidy",
    "explanation": "Topic: Synonyms",
    "options": [
      "tidy",
      "dirty",
      "messy",
      "old"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'cheap'.",
    "correctAnswer": "inexpensive",
    "explanation": "Topic: Synonyms",
    "options": [
      "expensive",
      "inexpensive",
      "rich",
      "costly"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'kind'.",
    "correctAnswer": "generous",
    "explanation": "Topic: Synonyms",
    "options": [
      "cruel",
      "generous",
      "selfish",
      "rude"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'tired'.",
    "correctAnswer": "exhausted",
    "explanation": "Topic: Synonyms",
    "options": [
      "energetic",
      "active",
      "awake",
      "exhausted"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'quiet'.",
    "correctAnswer": "silent",
    "explanation": "Topic: Synonyms",
    "options": [
      "silent",
      "busy",
      "loud",
      "noisy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'increase'.",
    "correctAnswer": "rise",
    "explanation": "Topic: Synonyms",
    "options": [
      "fall",
      "rise",
      "decrease",
      "stay"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'finish'.",
    "correctAnswer": "complete",
    "explanation": "Topic: Synonyms",
    "options": [
      "start",
      "begin",
      "continue",
      "complete"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'ancient'.",
    "correctAnswer": "old",
    "explanation": "Topic: Synonyms",
    "options": [
      "recent",
      "old",
      "modern",
      "new"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'huge'.",
    "correctAnswer": "enormous",
    "explanation": "Topic: Synonyms",
    "options": [
      "little",
      "enormous",
      "small",
      "tiny"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'early'.",
    "correctAnswer": "prompt",
    "explanation": "Topic: Synonyms",
    "options": [
      "late",
      "delayed",
      "slow",
      "prompt"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'wide'.",
    "correctAnswer": "broad",
    "explanation": "Topic: Synonyms",
    "options": [
      "broad",
      "thin",
      "narrow",
      "small"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'brief'.",
    "correctAnswer": "short",
    "explanation": "Topic: Synonyms",
    "options": [
      "short",
      "lengthy",
      "extended",
      "long"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'delicious'.",
    "correctAnswer": "tasty",
    "explanation": "Topic: Synonyms",
    "options": [
      "bitter",
      "bland",
      "disgusting",
      "tasty"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'dangerous'.",
    "correctAnswer": "risky",
    "explanation": "Topic: Synonyms",
    "options": [
      "secure",
      "risky",
      "calm",
      "safe"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'careful'.",
    "correctAnswer": "cautious",
    "explanation": "Topic: Synonyms",
    "options": [
      "careless",
      "reckless",
      "lazy",
      "cautious"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'honest'.",
    "correctAnswer": "truthful",
    "explanation": "Topic: Synonyms",
    "options": [
      "truthful",
      "shy",
      "rude",
      "dishonest"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'common'.",
    "correctAnswer": "usual",
    "explanation": "Topic: Synonyms",
    "options": [
      "rare",
      "unique",
      "usual",
      "strange"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'expensive'.",
    "correctAnswer": "costly",
    "explanation": "Topic: Synonyms",
    "options": [
      "affordable",
      "cheap",
      "costly",
      "free"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'weak'.",
    "correctAnswer": "feeble",
    "explanation": "Topic: Synonyms",
    "options": [
      "powerful",
      "tough",
      "feeble",
      "strong"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'gentle'.",
    "correctAnswer": "mild",
    "explanation": "Topic: Synonyms",
    "options": [
      "rough",
      "harsh",
      "mild",
      "loud"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'clever'.",
    "correctAnswer": "bright",
    "explanation": "Topic: Synonyms",
    "options": [
      "bright",
      "dull",
      "slow",
      "foolish"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'generous'.",
    "correctAnswer": "giving",
    "explanation": "Topic: Synonyms",
    "options": [
      "mean",
      "selfish",
      "stingy",
      "giving"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'loud'.",
    "correctAnswer": "noisy",
    "explanation": "Topic: Synonyms",
    "options": [
      "noisy",
      "silent",
      "calm",
      "quiet"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'fresh'.",
    "correctAnswer": "new",
    "explanation": "Topic: Synonyms",
    "options": [
      "new",
      "rotten",
      "stale",
      "old"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'calm'.",
    "correctAnswer": "peaceful",
    "explanation": "Topic: Synonyms",
    "options": [
      "peaceful",
      "worried",
      "nervous",
      "anxious"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'wide'.",
    "correctAnswer": "spacious",
    "explanation": "Topic: Synonyms",
    "options": [
      "narrow",
      "small",
      "spacious",
      "tight"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'tough'.",
    "correctAnswer": "hard",
    "explanation": "Topic: Synonyms",
    "options": [
      "tender",
      "gentle",
      "hard",
      "soft"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'boring'.",
    "correctAnswer": "dull",
    "explanation": "Topic: Synonyms",
    "options": [
      "thrilling",
      "exciting",
      "dull",
      "interesting"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'polite'.",
    "correctAnswer": "respectful",
    "explanation": "Topic: Synonyms",
    "options": [
      "respectful",
      "arrogant",
      "impolite",
      "rude"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'slow'.",
    "correctAnswer": "sluggish",
    "explanation": "Topic: Synonyms",
    "options": [
      "fast",
      "rapid",
      "quick",
      "sluggish"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'light'.",
    "correctAnswer": "bright",
    "explanation": "Topic: Synonyms",
    "options": [
      "bright",
      "dim",
      "dark",
      "dull"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'loud'.",
    "correctAnswer": "deafening",
    "explanation": "Topic: Synonyms",
    "options": [
      "faint",
      "deafening",
      "quiet",
      "soft"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'proud'.",
    "correctAnswer": "pleased",
    "explanation": "Topic: Synonyms",
    "options": [
      "pleased",
      "embarrassed",
      "humble",
      "ashamed"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Synonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the synonym of 'worried'.",
    "correctAnswer": "anxious",
    "explanation": "Topic: Synonyms",
    "options": [
      "anxious",
      "confident",
      "calm",
      "relaxed"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'happy'.",
    "correctAnswer": "sad",
    "explanation": "Topic: Antonyms",
    "options": [
      "glad",
      "tired",
      "angry",
      "sad"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'big'.",
    "correctAnswer": "small",
    "explanation": "Topic: Antonyms",
    "options": [
      "tiny",
      "short",
      "large",
      "small"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'fast'.",
    "correctAnswer": "slow",
    "explanation": "Topic: Antonyms",
    "options": [
      "heavy",
      "slow",
      "quick",
      "lazy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'beautiful'.",
    "correctAnswer": "ugly",
    "explanation": "Topic: Antonyms",
    "options": [
      "cheap",
      "pretty",
      "boring",
      "ugly"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'difficult'.",
    "correctAnswer": "easy",
    "explanation": "Topic: Antonyms",
    "options": [
      "simple",
      "soft",
      "hard",
      "easy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'begin'.",
    "correctAnswer": "end",
    "explanation": "Topic: Antonyms",
    "options": [
      "finish",
      "start",
      "stop",
      "end"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'buy'.",
    "correctAnswer": "sell",
    "explanation": "Topic: Antonyms",
    "options": [
      "borrow",
      "give",
      "purchase",
      "sell"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'smart'.",
    "correctAnswer": "stupid",
    "explanation": "Topic: Antonyms",
    "options": [
      "stupid",
      "intelligent",
      "weak",
      "lazy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'angry'.",
    "correctAnswer": "calm",
    "explanation": "Topic: Antonyms",
    "options": [
      "calm",
      "happy",
      "furious",
      "relaxed"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'rich'.",
    "correctAnswer": "poor",
    "explanation": "Topic: Antonyms",
    "options": [
      "generous",
      "cheap",
      "poor",
      "wealthy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'old'.",
    "correctAnswer": "modern",
    "explanation": "Topic: Antonyms",
    "options": [
      "modern",
      "new",
      "young",
      "ancient"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'brave'.",
    "correctAnswer": "cowardly",
    "explanation": "Topic: Antonyms",
    "options": [
      "weak",
      "cowardly",
      "shy",
      "courageous"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'funny'.",
    "correctAnswer": "serious",
    "explanation": "Topic: Antonyms",
    "options": [
      "sad",
      "hilarious",
      "serious",
      "boring"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'important'.",
    "correctAnswer": "trivial",
    "explanation": "Topic: Antonyms",
    "options": [
      "significant",
      "trivial",
      "small",
      "cheap"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'polite'.",
    "correctAnswer": "rude",
    "explanation": "Topic: Antonyms",
    "options": [
      "loud",
      "shy",
      "courteous",
      "rude"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'strong'.",
    "correctAnswer": "weak",
    "explanation": "Topic: Antonyms",
    "options": [
      "powerful",
      "weak",
      "small",
      "soft"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'clean'.",
    "correctAnswer": "dirty",
    "explanation": "Topic: Antonyms",
    "options": [
      "messy",
      "dirty",
      "tidy",
      "old"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'cheap'.",
    "correctAnswer": "expensive",
    "explanation": "Topic: Antonyms",
    "options": [
      "expensive",
      "rich",
      "inexpensive",
      "costly"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'kind'.",
    "correctAnswer": "cruel",
    "explanation": "Topic: Antonyms",
    "options": [
      "selfish",
      "cruel",
      "generous",
      "rude"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'tired'.",
    "correctAnswer": "energetic",
    "explanation": "Topic: Antonyms",
    "options": [
      "active",
      "energetic",
      "exhausted",
      "awake"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'quiet'.",
    "correctAnswer": "noisy",
    "explanation": "Topic: Antonyms",
    "options": [
      "busy",
      "silent",
      "noisy",
      "loud"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'increase'.",
    "correctAnswer": "decrease",
    "explanation": "Topic: Antonyms",
    "options": [
      "stay",
      "rise",
      "decrease",
      "fall"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'finish'.",
    "correctAnswer": "start",
    "explanation": "Topic: Antonyms",
    "options": [
      "begin",
      "start",
      "complete",
      "continue"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'ancient'.",
    "correctAnswer": "modern",
    "explanation": "Topic: Antonyms",
    "options": [
      "old",
      "recent",
      "new",
      "modern"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'huge'.",
    "correctAnswer": "tiny",
    "explanation": "Topic: Antonyms",
    "options": [
      "enormous",
      "small",
      "tiny",
      "little"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'early'.",
    "correctAnswer": "late",
    "explanation": "Topic: Antonyms",
    "options": [
      "late",
      "delayed",
      "slow",
      "prompt"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'wide'.",
    "correctAnswer": "narrow",
    "explanation": "Topic: Antonyms",
    "options": [
      "thin",
      "broad",
      "narrow",
      "small"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'brief'.",
    "correctAnswer": "long",
    "explanation": "Topic: Antonyms",
    "options": [
      "extended",
      "lengthy",
      "short",
      "long"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'delicious'.",
    "correctAnswer": "disgusting",
    "explanation": "Topic: Antonyms",
    "options": [
      "bitter",
      "disgusting",
      "tasty",
      "bland"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'dangerous'.",
    "correctAnswer": "safe",
    "explanation": "Topic: Antonyms",
    "options": [
      "secure",
      "safe",
      "calm",
      "risky"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'careful'.",
    "correctAnswer": "careless",
    "explanation": "Topic: Antonyms",
    "options": [
      "careless",
      "reckless",
      "lazy",
      "cautious"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'honest'.",
    "correctAnswer": "dishonest",
    "explanation": "Topic: Antonyms",
    "options": [
      "rude",
      "truthful",
      "shy",
      "dishonest"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'common'.",
    "correctAnswer": "rare",
    "explanation": "Topic: Antonyms",
    "options": [
      "unique",
      "rare",
      "strange",
      "usual"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'expensive'.",
    "correctAnswer": "cheap",
    "explanation": "Topic: Antonyms",
    "options": [
      "free",
      "affordable",
      "cheap",
      "costly"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'weak'.",
    "correctAnswer": "strong",
    "explanation": "Topic: Antonyms",
    "options": [
      "feeble",
      "powerful",
      "strong",
      "tough"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'gentle'.",
    "correctAnswer": "harsh",
    "explanation": "Topic: Antonyms",
    "options": [
      "loud",
      "harsh",
      "rough",
      "mild"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'clever'.",
    "correctAnswer": "foolish",
    "explanation": "Topic: Antonyms",
    "options": [
      "bright",
      "dull",
      "foolish",
      "slow"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'generous'.",
    "correctAnswer": "stingy",
    "explanation": "Topic: Antonyms",
    "options": [
      "mean",
      "selfish",
      "giving",
      "stingy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'loud'.",
    "correctAnswer": "quiet",
    "explanation": "Topic: Antonyms",
    "options": [
      "quiet",
      "noisy",
      "calm",
      "silent"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'fresh'.",
    "correctAnswer": "stale",
    "explanation": "Topic: Antonyms",
    "options": [
      "old",
      "new",
      "stale",
      "rotten"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'calm'.",
    "correctAnswer": "anxious",
    "explanation": "Topic: Antonyms",
    "options": [
      "nervous",
      "worried",
      "peaceful",
      "anxious"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'wide'.",
    "correctAnswer": "narrow",
    "explanation": "Topic: Antonyms",
    "options": [
      "small",
      "narrow",
      "spacious",
      "tight"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'tough'.",
    "correctAnswer": "tender",
    "explanation": "Topic: Antonyms",
    "options": [
      "gentle",
      "hard",
      "tender",
      "soft"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'boring'.",
    "correctAnswer": "exciting",
    "explanation": "Topic: Antonyms",
    "options": [
      "thrilling",
      "exciting",
      "dull",
      "interesting"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'polite'.",
    "correctAnswer": "impolite",
    "explanation": "Topic: Antonyms",
    "options": [
      "impolite",
      "respectful",
      "rude",
      "arrogant"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'slow'.",
    "correctAnswer": "quick",
    "explanation": "Topic: Antonyms",
    "options": [
      "fast",
      "sluggish",
      "quick",
      "rapid"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'light'.",
    "correctAnswer": "dark",
    "explanation": "Topic: Antonyms",
    "options": [
      "dark",
      "dim",
      "dull",
      "bright"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'loud'.",
    "correctAnswer": "faint",
    "explanation": "Topic: Antonyms",
    "options": [
      "deafening",
      "faint",
      "quiet",
      "soft"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'proud'.",
    "correctAnswer": "ashamed",
    "explanation": "Topic: Antonyms",
    "options": [
      "humble",
      "pleased",
      "embarrassed",
      "ashamed"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Antonyms",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Choose the antonym of 'worried'.",
    "correctAnswer": "relaxed",
    "explanation": "Topic: Antonyms",
    "options": [
      "calm",
      "confident",
      "anxious",
      "relaxed"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'give up' mean?",
    "correctAnswer": "to stop trying",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to start again",
      "to stop trying",
      "to succeed quickly",
      "to try harder"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'look after' mean?",
    "correctAnswer": "to take care of",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to avoid",
      "to admire",
      "to search for",
      "to take care of"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'find out' mean?",
    "correctAnswer": "to discover",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to hide",
      "to lose",
      "to forget",
      "to discover"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'put off' mean?",
    "correctAnswer": "to postpone",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to finish",
      "to cancel forever",
      "to postpone",
      "to start immediately"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'run out of' mean?",
    "correctAnswer": "to have no more of something",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to buy more of",
      "to have plenty of",
      "to give away",
      "to have no more of something"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'get along with' mean?",
    "correctAnswer": "to have a good relationship with",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to avoid",
      "to argue with",
      "to compete with",
      "to have a good relationship with"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'turn down' mean?",
    "correctAnswer": "to refuse",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to accept",
      "to refuse",
      "to repeat",
      "to increase"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'carry on' mean?",
    "correctAnswer": "to continue",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to continue",
      "to cancel",
      "to stop",
      "to begin"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'bring up' mean?",
    "correctAnswer": "to raise a topic or a child",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to raise a topic or a child",
      "to lower",
      "to forget",
      "to remove"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'break down' mean?",
    "correctAnswer": "to stop working (machine)",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to speed up",
      "to stop working (machine)",
      "to repair itself",
      "to work perfectly"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'figure out' mean?",
    "correctAnswer": "to understand or solve",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to forget",
      "to ignore",
      "to understand or solve",
      "to hide"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'set up' mean?",
    "correctAnswer": "to organize or establish",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to cancel",
      "to organize or establish",
      "to destroy",
      "to ignore"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'check in' mean?",
    "correctAnswer": "to register at a hotel/airport",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to cancel a booking",
      "to register at a hotel/airport",
      "to pay a fine",
      "to leave a hotel"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'hold on' mean?",
    "correctAnswer": "to wait",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to wait",
      "to give up",
      "to leave",
      "to hurry"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'take off' mean?",
    "correctAnswer": "to remove or (plane) leave the ground",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to land",
      "to put on",
      "to slow down",
      "to remove or (plane) leave the ground"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'get over' mean?",
    "correctAnswer": "to recover from",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to start",
      "to recover from",
      "to avoid",
      "to cause"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'come across' mean?",
    "correctAnswer": "to find by chance",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to search for deliberately",
      "to lose",
      "to find by chance",
      "to sell"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'call off' mean?",
    "correctAnswer": "to cancel",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to attend",
      "to cancel",
      "to organize",
      "to enjoy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'look forward to' mean?",
    "correctAnswer": "to be excited about something future",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to forget",
      "to avoid",
      "to be excited about something future",
      "to regret"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'point out' mean?",
    "correctAnswer": "to indicate or mention",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to indicate or mention",
      "to ignore",
      "to hide",
      "to deny"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'show up' mean?",
    "correctAnswer": "to arrive",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to arrive",
      "to disappear",
      "to hide",
      "to leave"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'work out' mean?",
    "correctAnswer": "to exercise or to solve",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to forget",
      "to relax",
      "to sleep",
      "to exercise or to solve"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'give away' mean?",
    "correctAnswer": "to give for free",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to steal",
      "to keep",
      "to sell expensively",
      "to give for free"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'keep up with' mean?",
    "correctAnswer": "to stay at the same pace as",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to fall behind",
      "to stay at the same pace as",
      "to ignore",
      "to overtake"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'run into' mean?",
    "correctAnswer": "to meet by chance",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to meet by chance",
      "to plan a meeting",
      "to avoid completely",
      "to argue with"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'sort out' mean?",
    "correctAnswer": "to resolve a problem",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to create a problem",
      "to ignore",
      "to worsen",
      "to resolve a problem"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'back up' mean?",
    "correctAnswer": "to support or make a copy of",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to delete",
      "to abandon",
      "to ignore",
      "to support or make a copy of"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'cut down on' mean?",
    "correctAnswer": "to reduce",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to increase",
      "to double",
      "to reduce",
      "to stop completely"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'drop by' mean?",
    "correctAnswer": "to visit briefly and informally",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to avoid visiting",
      "to leave forever",
      "to visit briefly and informally",
      "to call ahead formally"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'fill in' mean?",
    "correctAnswer": "to complete a form",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to ignore",
      "to complete a form",
      "to erase a form",
      "to submit late"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'hang out' mean?",
    "correctAnswer": "to spend time casually with someone",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to spend time casually with someone",
      "to work seriously",
      "to avoid someone",
      "to argue"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'pick up' mean?",
    "correctAnswer": "to collect someone or something",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to lose",
      "to ignore",
      "to drop off",
      "to collect someone or something"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'put up with' mean?",
    "correctAnswer": "to tolerate",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to celebrate",
      "to tolerate",
      "to avoid",
      "to reject immediately"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'stand out' mean?",
    "correctAnswer": "to be noticeably different",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to blend in",
      "to hide",
      "to be noticeably different",
      "to disappear"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Phrasal Verbs",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "What does 'work on' mean?",
    "correctAnswer": "to try to improve or complete",
    "explanation": "Topic: Phrasal Verbs",
    "options": [
      "to ignore completely",
      "to finish instantly",
      "to try to improve or complete",
      "to abandon"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a decision.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "have",
      "do",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ homework.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "make",
      "do",
      "have"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ breakfast.",
    "correctAnswer": "have",
    "explanation": "Topic: Collocations",
    "options": [
      "do",
      "have",
      "make",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a photo.",
    "correctAnswer": "take",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "have",
      "do",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a mistake.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "do",
      "have",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a favor.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "take",
      "have",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a break.",
    "correctAnswer": "take",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "make",
      "have",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a shower.",
    "correctAnswer": "have",
    "explanation": "Topic: Collocations",
    "options": [
      "have",
      "do",
      "take",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ progress.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "take",
      "have",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ the shopping.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "have",
      "make",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ responsibility.",
    "correctAnswer": "take",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "do",
      "have",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a conversation.",
    "correctAnswer": "have",
    "explanation": "Topic: Collocations",
    "options": [
      "do",
      "make",
      "have",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ an effort.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "have",
      "do",
      "take",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ exercise.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "do",
      "make",
      "take",
      "have"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a risk.",
    "correctAnswer": "take",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "take",
      "have",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ friends.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "make",
      "have",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ fun.",
    "correctAnswer": "have",
    "explanation": "Topic: Collocations",
    "options": [
      "have",
      "do",
      "take",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ business.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "take",
      "have",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ notes.",
    "correctAnswer": "take",
    "explanation": "Topic: Collocations",
    "options": [
      "have",
      "make",
      "do",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a phone call.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "do",
      "take",
      "make",
      "have"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a look.",
    "correctAnswer": "have",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "make",
      "do",
      "have"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ damage.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "do",
      "have",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a seat.",
    "correctAnswer": "take",
    "explanation": "Topic: Collocations",
    "options": [
      "have",
      "make",
      "take",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ noise.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "have",
      "make",
      "do"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a good time.",
    "correctAnswer": "have",
    "explanation": "Topic: Collocations",
    "options": [
      "do",
      "make",
      "have",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a suggestion.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "have",
      "do",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ damage control.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "have",
      "do",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ care of.",
    "correctAnswer": "take",
    "explanation": "Topic: Collocations",
    "options": [
      "do",
      "take",
      "have",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ an argument.",
    "correctAnswer": "have",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "do",
      "make",
      "have"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a plan.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "have",
      "take",
      "do",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ research.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "have",
      "take",
      "do",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a chance.",
    "correctAnswer": "take",
    "explanation": "Topic: Collocations",
    "options": [
      "do",
      "have",
      "make",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ a rest.",
    "correctAnswer": "have",
    "explanation": "Topic: Collocations",
    "options": [
      "do",
      "have",
      "take",
      "make"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ an appointment.",
    "correctAnswer": "make",
    "explanation": "Topic: Collocations",
    "options": [
      "take",
      "do",
      "make",
      "have"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Collocations",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "___ your best.",
    "correctAnswer": "do",
    "explanation": "Topic: Collocations",
    "options": [
      "make",
      "do",
      "have",
      "take"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The ___ of the movie was excellent.",
    "correctAnswer": "acting",
    "explanation": "Topic: Word Formation",
    "options": [
      "act",
      "acts",
      "actor",
      "acting"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She showed great ___ during the crisis.",
    "correctAnswer": "leadership",
    "explanation": "Topic: Word Formation",
    "options": [
      "leadership",
      "leader",
      "lead",
      "leads"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "His ___ to detail impressed everyone.",
    "correctAnswer": "attention",
    "explanation": "Topic: Word Formation",
    "options": [
      "attentive",
      "attention",
      "attends",
      "attend"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The company announced a new ___ policy.",
    "correctAnswer": "employment",
    "explanation": "Topic: Word Formation",
    "options": [
      "employs",
      "employ",
      "employer",
      "employment"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Her ___ was obvious to everyone in the room.",
    "correctAnswer": "happiness",
    "explanation": "Topic: Word Formation",
    "options": [
      "happier",
      "happiness",
      "happily",
      "happy"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The ___ of the bridge took two years.",
    "correctAnswer": "construction",
    "explanation": "Topic: Word Formation",
    "options": [
      "constructs",
      "constructive",
      "construction",
      "construct"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "They admired his ___ during the negotiation.",
    "correctAnswer": "patience",
    "explanation": "Topic: Word Formation",
    "options": [
      "patiently",
      "patient",
      "patients",
      "patience"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The teacher praised her ___ in the exam.",
    "correctAnswer": "performance",
    "explanation": "Topic: Word Formation",
    "options": [
      "performs",
      "performer",
      "perform",
      "performance"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "His ___ made the whole team nervous.",
    "correctAnswer": "nervousness",
    "explanation": "Topic: Word Formation",
    "options": [
      "nervous",
      "nerve",
      "nervously",
      "nervousness"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Word Formation",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "The ___ of the new product was a huge success.",
    "correctAnswer": "development",
    "explanation": "Topic: Word Formation",
    "options": [
      "development",
      "developer",
      "develops",
      "develop"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I need some ___ to buy groceries. (money in general)",
    "correctAnswer": "money",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "cash only",
      "price",
      "coin",
      "money"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Can you lend me some ___? (money in coin form)",
    "correctAnswer": "change",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "money",
      "cost",
      "price",
      "change"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "This bag ___ ten dollars.",
    "correctAnswer": "costs",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "pays",
      "costs",
      "prices",
      "spends"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ too much money on clothes last month.",
    "correctAnswer": "spent",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "cost",
      "priced",
      "spent",
      "paid to"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ me back the money she owed.",
    "correctAnswer": "paid",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "paid",
      "bought",
      "cost",
      "spent"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I have ___ friends in this city; I know a lot of people.",
    "correctAnswer": "many",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "few",
      "many",
      "much",
      "little"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "There isn't ___ time left before the exam.",
    "correctAnswer": "much",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "much",
      "many",
      "few",
      "a few"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He has ___ experience in this field, almost none.",
    "correctAnswer": "little",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "few",
      "many",
      "a lot",
      "little"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I have ___ questions, just two or three.",
    "correctAnswer": "a few",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "a little",
      "little",
      "much",
      "a few"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Could you ___ me your notes for tomorrow?",
    "correctAnswer": "lend",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "lend",
      "owe",
      "borrow",
      "rent"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Can I ___ your pen for a second?",
    "correctAnswer": "borrow",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "rent",
      "owe",
      "borrow",
      "lend"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ to the gym three times a week.",
    "correctAnswer": "go",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "arrive",
      "walk to",
      "come",
      "go"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Please ___ to my office when you arrive.",
    "correctAnswer": "come",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "go",
      "leave",
      "walk",
      "come"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She ___ her keys somewhere in the house.",
    "correctAnswer": "lost",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "lost",
      "left",
      "missed",
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
    "content": "I ___ the bus this morning, it left early.",
    "correctAnswer": "missed",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "missed",
      "forgot",
      "lost",
      "left"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "Did you ___ your umbrella at home?",
    "correctAnswer": "forget",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "lose",
      "leave to",
      "miss",
      "forget"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "He ___ the office at 6 p.m. every day.",
    "correctAnswer": "leaves",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "loses",
      "forgets",
      "leaves",
      "misses"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "I ___ that movie, it was fantastic.",
    "correctAnswer": "loved",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "appreciated to",
      "enjoyed of",
      "liked to",
      "loved"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "She is ___ to her sister, they look alike.",
    "correctAnswer": "similar",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "equal",
      "same",
      "alike to",
      "similar"
    ]
  },
  {
    "module": "english",
    "section": "vocabulary",
    "topic": "Commonly Confused Words",
    "level": "B1",
    "difficulty": 1,
    "type": "MCQ",
    "content": "These two books are exactly the ___.",
    "correctAnswer": "same",
    "explanation": "Topic: Commonly Confused Words",
    "options": [
      "equal to",
      "same",
      "similar",
      "alike"
    ]
  }
];

async function main() {
  console.log(`Seeding ${questions.length} questions...`);

  for (const q of questions) {
    await prisma.question.create({
      data: {
        module: q.module,
        section: q.section,
        topic: q.topic,
        level: q.level,
        difficulty: q.difficulty,
        type: q.type,
        content: q.content,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        options: {
          create: q.options.map((opt) => ({
            content: opt,
            isCorrect: opt === q.correctAnswer,
          })),
        },
      },
    });
  }

  console.log(`Seeded ${questions.length} questions successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
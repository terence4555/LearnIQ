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
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I don't like coffee.\"",
    "correctAnswer": "She said (that) she didn't like coffee.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she isn't like coffee.",
      "She said (that) she didn't like coffee.",
      "She said that she doesn't like coffee.",
      "She said that she not like coffee."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They said, \"We will help you.\"",
    "correctAnswer": "They said (that) they would help me.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "They said that they will help me.",
      "They said (that) they would help me.",
      "They said that they help me.",
      "They said that they are helping me."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I work in London.\"",
    "correctAnswer": "She said (that) she worked in London.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she is working in London.",
      "She said (that) she worked in London.",
      "She said that she works in London.",
      "She said that she has worked in London."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I work in London.\"",
    "correctAnswer": "She said (that) she worked in London.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she has worked in London.",
      "She said that she works in London.",
      "She said that she is working in London.",
      "She said (that) she worked in London."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I don't like coffee.\"",
    "correctAnswer": "She said (that) she didn't like coffee.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she not like coffee.",
      "She said (that) she didn't like coffee.",
      "She said that she isn't like coffee.",
      "She said that she doesn't like coffee."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He said, \"I will call you tomorrow.\"",
    "correctAnswer": "He said (that) he would call me the next day.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "He said that he will call me tomorrow.",
      "He said that he calls me tomorrow.",
      "He said that he is calling me tomorrow.",
      "He said (that) he would call me the next day."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He said, \"I have finished the report.\"",
    "correctAnswer": "He said (that) he had finished the report.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "He said that he finishes the report.",
      "He said (that) he had finished the report.",
      "He said that he finished the report yesterday.",
      "He said that he has finished the report."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I don't like coffee.\"",
    "correctAnswer": "She said (that) she didn't like coffee.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she not like coffee.",
      "She said (that) she didn't like coffee.",
      "She said that she doesn't like coffee.",
      "She said that she isn't like coffee."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He said, \"I will call you tomorrow.\"",
    "correctAnswer": "He said (that) he would call me the next day.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "He said (that) he would call me the next day.",
      "He said that he is calling me tomorrow.",
      "He said that he calls me tomorrow.",
      "He said that he will call me tomorrow."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I don't like coffee.\"",
    "correctAnswer": "She said (that) she didn't like coffee.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she doesn't like coffee.",
      "She said that she not like coffee.",
      "She said that she isn't like coffee.",
      "She said (that) she didn't like coffee."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I don't like coffee.\"",
    "correctAnswer": "She said (that) she didn't like coffee.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she not like coffee.",
      "She said (that) she didn't like coffee.",
      "She said that she doesn't like coffee.",
      "She said that she isn't like coffee."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I can swim very well.\"",
    "correctAnswer": "She said (that) she could swim very well.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she is able to swim.",
      "She said that she can swim very well.",
      "She said (that) she could swim very well.",
      "She said that she swims very well."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He said, \"I am tired.\"",
    "correctAnswer": "He said (that) he was tired.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "He said that he is tired.",
      "He said that he is being tired.",
      "He said that I was tired.",
      "He said (that) he was tired."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They said, \"We saw the film yesterday.\"",
    "correctAnswer": "They said (that) they had seen the film the day before.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "They said that they have seen the film yesterday.",
      "They said that they see the film yesterday.",
      "They said that they saw the film yesterday.",
      "They said (that) they had seen the film the day before."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I work in London.\"",
    "correctAnswer": "She said (that) she worked in London.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she works in London.",
      "She said that she has worked in London.",
      "She said that she is working in London.",
      "She said (that) she worked in London."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He said, \"I have finished the report.\"",
    "correctAnswer": "He said (that) he had finished the report.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "He said that he finished the report yesterday.",
      "He said that he finishes the report.",
      "He said (that) he had finished the report.",
      "He said that he has finished the report."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They said, \"We saw the film yesterday.\"",
    "correctAnswer": "They said (that) they had seen the film the day before.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "They said that they see the film yesterday.",
      "They said (that) they had seen the film the day before.",
      "They said that they saw the film yesterday.",
      "They said that they have seen the film yesterday."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I must leave now.\"",
    "correctAnswer": "She said (that) she had to leave then.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said (that) she had to leave then.",
      "She said that she has to leaves now.",
      "She said that she musted leave now.",
      "She said that she must leave now."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He said, \"I am going to the market.\"",
    "correctAnswer": "He said (that) he was going to the market.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "He said that he went to the market now.",
      "He said that he is going to the market.",
      "He said that he goes to the market.",
      "He said (that) he was going to the market."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He said, \"I am tired.\"",
    "correctAnswer": "He said (that) he was tired.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "He said that he is tired.",
      "He said that I was tired.",
      "He said (that) he was tired.",
      "He said that he is being tired."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He said, \"I have finished the report.\"",
    "correctAnswer": "He said (that) he had finished the report.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "He said that he has finished the report.",
      "He said that he finished the report yesterday.",
      "He said that he finishes the report.",
      "He said (that) he had finished the report."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Reported Speech",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She said, \"I don't like coffee.\"",
    "correctAnswer": "She said (that) she didn't like coffee.",
    "explanation": "Topic: Reported Speech",
    "options": [
      "She said that she doesn't like coffee.",
      "She said that she isn't like coffee.",
      "She said (that) she didn't like coffee.",
      "She said that she not like coffee."
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The phone ___ I bought last week is already broken.",
    "correctAnswer": "which",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "whose",
      "which",
      "where",
      "who"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "This is the house ___ I grew up.",
    "correctAnswer": "where",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "who",
      "which",
      "where",
      "whose"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "This is the house ___ I grew up.",
    "correctAnswer": "where",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "who",
      "whose",
      "where",
      "which"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "That's the company ___ products are very popular.",
    "correctAnswer": "whose",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "who",
      "where",
      "whose",
      "which"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The restaurant ___ we ate last night was excellent.",
    "correctAnswer": "where",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "which",
      "where",
      "who",
      "whose"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The man ___ lives next door is a doctor.",
    "correctAnswer": "who",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "where",
      "whose",
      "who",
      "which"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The film ___ we watched was boring.",
    "correctAnswer": "that",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "where",
      "who",
      "whose",
      "that"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The film ___ we watched was boring.",
    "correctAnswer": "that",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "who",
      "whose",
      "that",
      "where"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "This is the book ___ I told you about.",
    "correctAnswer": "which",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "whom",
      "which",
      "where",
      "who"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The man ___ lives next door is a doctor.",
    "correctAnswer": "who",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "who",
      "whose",
      "which",
      "where"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The restaurant ___ we ate last night was excellent.",
    "correctAnswer": "where",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "which",
      "where",
      "who",
      "whose"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "This is the house ___ I grew up.",
    "correctAnswer": "where",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "whose",
      "where",
      "who",
      "which"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The film ___ we watched was boring.",
    "correctAnswer": "that",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "where",
      "that",
      "whose",
      "who"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She's the woman ___ car was stolen.",
    "correctAnswer": "whose",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "where",
      "whose",
      "which",
      "who"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "This is the house ___ I grew up.",
    "correctAnswer": "where",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "which",
      "where",
      "who",
      "whose"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "This is the house ___ I grew up.",
    "correctAnswer": "where",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "which",
      "who",
      "whose",
      "where"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The man ___ lives next door is a doctor.",
    "correctAnswer": "who",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "whose",
      "which",
      "who",
      "where"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The film ___ we watched was boring.",
    "correctAnswer": "that",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "that",
      "who",
      "whose",
      "where"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The film ___ we watched was boring.",
    "correctAnswer": "that",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "where",
      "that",
      "whose",
      "who"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Relative Clauses",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "The restaurant ___ we ate last night was excellent.",
    "correctAnswer": "where",
    "explanation": "Topic: Relative Clauses",
    "options": [
      "who",
      "where",
      "whose",
      "which"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Can I have ___ sugar in my coffee, please?",
    "correctAnswer": "a little",
    "explanation": "Topic: Quantifiers",
    "options": [
      "few",
      "many",
      "a little",
      "a few"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I have ___ friends in this city; I know a lot of people.",
    "correctAnswer": "many",
    "explanation": "Topic: Quantifiers",
    "options": [
      "many",
      "a little",
      "much",
      "little"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "We need ___ apples for the recipe, just three or four.",
    "correctAnswer": "a few",
    "explanation": "Topic: Quantifiers",
    "options": [
      "a little",
      "much",
      "little",
      "a few"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Can I have ___ sugar in my coffee, please?",
    "correctAnswer": "a little",
    "explanation": "Topic: Quantifiers",
    "options": [
      "a few",
      "a little",
      "few",
      "many"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I have ___ friends in this city; I know a lot of people.",
    "correctAnswer": "many",
    "explanation": "Topic: Quantifiers",
    "options": [
      "a little",
      "much",
      "many",
      "little"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "There are ___ students in the classroom today.",
    "correctAnswer": "a lot of",
    "explanation": "Topic: Quantifiers",
    "options": [
      "little",
      "a lot of",
      "a little",
      "much"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "There isn't ___ milk left in the fridge.",
    "correctAnswer": "much",
    "explanation": "Topic: Quantifiers",
    "options": [
      "much",
      "few",
      "many",
      "a few"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "There isn't ___ milk left in the fridge.",
    "correctAnswer": "much",
    "explanation": "Topic: Quantifiers",
    "options": [
      "many",
      "a few",
      "few",
      "much"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I bought ___ books at the sale, about ten of them.",
    "correctAnswer": "a lot of",
    "explanation": "Topic: Quantifiers",
    "options": [
      "little",
      "much",
      "a little",
      "a lot of"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "There are ___ students in the classroom today.",
    "correctAnswer": "a lot of",
    "explanation": "Topic: Quantifiers",
    "options": [
      "little",
      "a little",
      "a lot of",
      "much"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I bought ___ books at the sale, about ten of them.",
    "correctAnswer": "a lot of",
    "explanation": "Topic: Quantifiers",
    "options": [
      "much",
      "a lot of",
      "little",
      "a little"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She has ___ money, so she can't buy the ticket.",
    "correctAnswer": "little",
    "explanation": "Topic: Quantifiers",
    "options": [
      "much",
      "little",
      "few",
      "many"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Yes, there is ___ coffee left, about half a cup.",
    "correctAnswer": "some",
    "explanation": "Topic: Quantifiers",
    "options": [
      "many",
      "any",
      "some",
      "few"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "There isn't ___ milk left in the fridge.",
    "correctAnswer": "much",
    "explanation": "Topic: Quantifiers",
    "options": [
      "many",
      "much",
      "few",
      "a few"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Is there ___ coffee left in the pot?",
    "correctAnswer": "any",
    "explanation": "Topic: Quantifiers",
    "options": [
      "much",
      "any",
      "some",
      "many"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Is there ___ coffee left in the pot?",
    "correctAnswer": "any",
    "explanation": "Topic: Quantifiers",
    "options": [
      "some",
      "much",
      "many",
      "any"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Yes, there is ___ coffee left, about half a cup.",
    "correctAnswer": "some",
    "explanation": "Topic: Quantifiers",
    "options": [
      "few",
      "many",
      "any",
      "some"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "There are ___ students in the classroom today.",
    "correctAnswer": "a lot of",
    "explanation": "Topic: Quantifiers",
    "options": [
      "a lot of",
      "much",
      "a little",
      "little"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I bought ___ books at the sale, about ten of them.",
    "correctAnswer": "a lot of",
    "explanation": "Topic: Quantifiers",
    "options": [
      "much",
      "a lot of",
      "a little",
      "little"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Quantifiers",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "There are ___ people who agree with this idea.",
    "correctAnswer": "few",
    "explanation": "Topic: Quantifiers",
    "options": [
      "much",
      "a little",
      "little",
      "few"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "We should leave now, ___?",
    "correctAnswer": "shouldn't we",
    "explanation": "Topic: Question Tags",
    "options": [
      "should we",
      "don't we",
      "aren't we",
      "shouldn't we"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "We should leave now, ___?",
    "correctAnswer": "shouldn't we",
    "explanation": "Topic: Question Tags",
    "options": [
      "don't we",
      "shouldn't we",
      "should we",
      "aren't we"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Let's go to the cinema, ___?",
    "correctAnswer": "shall we",
    "explanation": "Topic: Question Tags",
    "options": [
      "will we",
      "shan't we",
      "shall we",
      "do we"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He was at the meeting, ___?",
    "correctAnswer": "wasn't he",
    "explanation": "Topic: Question Tags",
    "options": [
      "wasn't he",
      "isn't he",
      "didn't he",
      "was he"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "We should leave now, ___?",
    "correctAnswer": "shouldn't we",
    "explanation": "Topic: Question Tags",
    "options": [
      "shouldn't we",
      "don't we",
      "aren't we",
      "should we"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "You didn't call her, ___?",
    "correctAnswer": "did you",
    "explanation": "Topic: Question Tags",
    "options": [
      "did you",
      "have you",
      "do you",
      "didn't you"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He can't swim, ___?",
    "correctAnswer": "can he",
    "explanation": "Topic: Question Tags",
    "options": [
      "does he",
      "can he",
      "doesn't he",
      "can't he"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "You're coming to the party, ___?",
    "correctAnswer": "aren't you",
    "explanation": "Topic: Question Tags",
    "options": [
      "are you",
      "won't you",
      "aren't you",
      "don't you"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They have finished the project, ___?",
    "correctAnswer": "haven't they",
    "explanation": "Topic: Question Tags",
    "options": [
      "have they",
      "haven't they",
      "don't they",
      "didn't they"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She is a teacher, ___?",
    "correctAnswer": "isn't she",
    "explanation": "Topic: Question Tags",
    "options": [
      "doesn't she",
      "wasn't she",
      "isn't she",
      "is she"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "We should leave now, ___?",
    "correctAnswer": "shouldn't we",
    "explanation": "Topic: Question Tags",
    "options": [
      "don't we",
      "shouldn't we",
      "should we",
      "aren't we"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She won't be late, ___?",
    "correctAnswer": "will she",
    "explanation": "Topic: Question Tags",
    "options": [
      "will she",
      "won't she",
      "does she",
      "isn't she"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Let's go to the cinema, ___?",
    "correctAnswer": "shall we",
    "explanation": "Topic: Question Tags",
    "options": [
      "do we",
      "shall we",
      "will we",
      "shan't we"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "You live in Paris, ___?",
    "correctAnswer": "don't you",
    "explanation": "Topic: Question Tags",
    "options": [
      "do you",
      "don't you",
      "isn't it",
      "aren't you"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "You didn't call her, ___?",
    "correctAnswer": "did you",
    "explanation": "Topic: Question Tags",
    "options": [
      "have you",
      "did you",
      "didn't you",
      "do you"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They have finished the project, ___?",
    "correctAnswer": "haven't they",
    "explanation": "Topic: Question Tags",
    "options": [
      "have they",
      "haven't they",
      "don't they",
      "didn't they"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "You live in Paris, ___?",
    "correctAnswer": "don't you",
    "explanation": "Topic: Question Tags",
    "options": [
      "do you",
      "isn't it",
      "don't you",
      "aren't you"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "You live in Paris, ___?",
    "correctAnswer": "don't you",
    "explanation": "Topic: Question Tags",
    "options": [
      "aren't you",
      "isn't it",
      "do you",
      "don't you"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He was at the meeting, ___?",
    "correctAnswer": "wasn't he",
    "explanation": "Topic: Question Tags",
    "options": [
      "was he",
      "didn't he",
      "wasn't he",
      "isn't he"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Question Tags",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He can't swim, ___?",
    "correctAnswer": "can he",
    "explanation": "Topic: Question Tags",
    "options": [
      "does he",
      "can he",
      "can't he",
      "doesn't he"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She enjoys ___ novels in her free time.",
    "correctAnswer": "reading",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "to read",
      "reading",
      "read",
      "reads"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He avoids ___ junk food.",
    "correctAnswer": "eating",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "eating",
      "eat",
      "eats",
      "to eat"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She suggested ___ a different restaurant.",
    "correctAnswer": "trying",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "try",
      "trying",
      "tries",
      "to try"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I decided ___ a new car next month.",
    "correctAnswer": "to buy",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "to buy",
      "buying",
      "buy",
      "bought"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He avoids ___ junk food.",
    "correctAnswer": "eating",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "eat",
      "eating",
      "to eat",
      "eats"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I look forward to ___ you soon.",
    "correctAnswer": "seeing",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "saw",
      "see",
      "to see",
      "seeing"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He promised ___ us with the move.",
    "correctAnswer": "to help",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "helping",
      "to help",
      "helps",
      "help"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I decided ___ a new car next month.",
    "correctAnswer": "to buy",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "buying",
      "buy",
      "bought",
      "to buy"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I can't help ___ about the exam results.",
    "correctAnswer": "worrying",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "worries",
      "worry",
      "to worry",
      "worrying"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They finished ___ the project on time.",
    "correctAnswer": "completing",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "complete",
      "completes",
      "to complete",
      "completing"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She enjoys ___ novels in her free time.",
    "correctAnswer": "reading",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "reading",
      "read",
      "to read",
      "reads"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They finished ___ the project on time.",
    "correctAnswer": "completing",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "to complete",
      "complete",
      "completing",
      "completes"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I decided ___ a new car next month.",
    "correctAnswer": "to buy",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "buying",
      "buy",
      "to buy",
      "bought"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She suggested ___ a different restaurant.",
    "correctAnswer": "trying",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "to try",
      "trying",
      "tries",
      "try"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He promised ___ us with the move.",
    "correctAnswer": "to help",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "to help",
      "helps",
      "help",
      "helping"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He promised ___ us with the move.",
    "correctAnswer": "to help",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "help",
      "helping",
      "helps",
      "to help"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She suggested ___ a different restaurant.",
    "correctAnswer": "trying",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "to try",
      "trying",
      "tries",
      "try"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She suggested ___ a different restaurant.",
    "correctAnswer": "trying",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "trying",
      "tries",
      "to try",
      "try"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They agreed ___ the contract.",
    "correctAnswer": "to sign",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "sign",
      "to sign",
      "signs",
      "signing"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She suggested ___ a different restaurant.",
    "correctAnswer": "trying",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "trying",
      "to try",
      "tries",
      "try"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "We plan ___ Japan next year.",
    "correctAnswer": "to visit",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "visiting",
      "to visit",
      "visit",
      "visited"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Gerunds vs Infinitives",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She suggested ___ a different restaurant.",
    "correctAnswer": "trying",
    "explanation": "Topic: Gerunds vs Infinitives",
    "options": [
      "tries",
      "to try",
      "try",
      "trying"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I love pizza. — ___ I.",
    "correctAnswer": "So do",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither does",
      "Neither do",
      "So does",
      "So do"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She doesn't like coffee. — ___ I.",
    "correctAnswer": "Neither do",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "So do",
      "Neither does",
      "Neither do",
      "So does"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She doesn't like coffee. — ___ I.",
    "correctAnswer": "Neither do",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither do",
      "Neither does",
      "So do",
      "So does"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I am tired. — ___ I.",
    "correctAnswer": "So am",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "So am",
      "So is",
      "Neither is",
      "Neither am"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He can speak French. — ___ can she.",
    "correctAnswer": "So",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "So",
      "Neither does",
      "Neither",
      "So does"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She wasn't at the party. — ___ he.",
    "correctAnswer": "Neither was",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither is",
      "So was",
      "So is",
      "Neither was"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I love pizza. — ___ I.",
    "correctAnswer": "So do",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither do",
      "Neither does",
      "So do",
      "So does"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I love pizza. — ___ I.",
    "correctAnswer": "So do",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither does",
      "So does",
      "So do",
      "Neither do"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I love pizza. — ___ I.",
    "correctAnswer": "So do",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "So do",
      "Neither does",
      "Neither do",
      "So does"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They haven't finished yet. — ___ we.",
    "correctAnswer": "Neither have",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither has",
      "So have",
      "Neither have",
      "So has"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "She doesn't like coffee. — ___ I.",
    "correctAnswer": "Neither do",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "So do",
      "Neither do",
      "So does",
      "Neither does"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "We will come early. — ___ they.",
    "correctAnswer": "So will",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither would",
      "So would",
      "Neither will",
      "So will"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He can speak French. — ___ can she.",
    "correctAnswer": "So",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither does",
      "So",
      "So does",
      "Neither"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They haven't finished yet. — ___ we.",
    "correctAnswer": "Neither have",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither has",
      "So has",
      "Neither have",
      "So have"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He can speak French. — ___ can she.",
    "correctAnswer": "So",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "So",
      "Neither",
      "Neither does",
      "So does"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "They haven't finished yet. — ___ we.",
    "correctAnswer": "Neither have",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "So has",
      "Neither has",
      "Neither have",
      "So have"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "He can speak French. — ___ can she.",
    "correctAnswer": "So",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "Neither does",
      "So does",
      "So",
      "Neither"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "So / Neither Agreement",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "I am tired. — ___ I.",
    "correctAnswer": "So am",
    "explanation": "Topic: So / Neither Agreement",
    "options": [
      "So is",
      "Neither am",
      "So am",
      "Neither is"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'The teacher corrected the essays.' Passive: The essays ___ by the teacher.",
    "correctAnswer": "were corrected",
    "explanation": "Topic: Passive Voice",
    "options": [
      "are corrected",
      "were corrected",
      "correct",
      "have corrected"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'They built the house in 1990.' Passive: The house ___ in 1990.",
    "correctAnswer": "was built",
    "explanation": "Topic: Passive Voice",
    "options": [
      "is built",
      "was built",
      "built",
      "has built"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'The chef cooks the meal.' Passive: The meal ___ by the chef.",
    "correctAnswer": "is cooked",
    "explanation": "Topic: Passive Voice",
    "options": [
      "is cooked",
      "is cooking",
      "was cooked",
      "cooks"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'The teacher corrected the essays.' Passive: The essays ___ by the teacher.",
    "correctAnswer": "were corrected",
    "explanation": "Topic: Passive Voice",
    "options": [
      "have corrected",
      "are corrected",
      "were corrected",
      "correct"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'She is writing the report.' Passive: The report ___ by her.",
    "correctAnswer": "is being written",
    "explanation": "Topic: Passive Voice",
    "options": [
      "is written",
      "writes",
      "is being written",
      "was written"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'The chef cooks the meal.' Passive: The meal ___ by the chef.",
    "correctAnswer": "is cooked",
    "explanation": "Topic: Passive Voice",
    "options": [
      "was cooked",
      "cooks",
      "is cooking",
      "is cooked"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'They built the house in 1990.' Passive: The house ___ in 1990.",
    "correctAnswer": "was built",
    "explanation": "Topic: Passive Voice",
    "options": [
      "has built",
      "built",
      "was built",
      "is built"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'They built the house in 1990.' Passive: The house ___ in 1990.",
    "correctAnswer": "was built",
    "explanation": "Topic: Passive Voice",
    "options": [
      "built",
      "has built",
      "was built",
      "is built"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'They deliver the packages every day.' Passive: The packages ___ every day.",
    "correctAnswer": "are delivered",
    "explanation": "Topic: Passive Voice",
    "options": [
      "deliver",
      "is delivered",
      "were delivered",
      "are delivered"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'They built the house in 1990.' Passive: The house ___ in 1990.",
    "correctAnswer": "was built",
    "explanation": "Topic: Passive Voice",
    "options": [
      "is built",
      "built",
      "was built",
      "has built"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'Someone has stolen my bike.' Passive: My bike ___.",
    "correctAnswer": "has been stolen",
    "explanation": "Topic: Passive Voice",
    "options": [
      "has been stolen",
      "is stolen",
      "was stolen",
      "steals"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'She is writing the report.' Passive: The report ___ by her.",
    "correctAnswer": "is being written",
    "explanation": "Topic: Passive Voice",
    "options": [
      "writes",
      "is being written",
      "was written",
      "is written"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'She is writing the report.' Passive: The report ___ by her.",
    "correctAnswer": "is being written",
    "explanation": "Topic: Passive Voice",
    "options": [
      "was written",
      "writes",
      "is being written",
      "is written"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'The teacher corrected the essays.' Passive: The essays ___ by the teacher.",
    "correctAnswer": "were corrected",
    "explanation": "Topic: Passive Voice",
    "options": [
      "correct",
      "have corrected",
      "were corrected",
      "are corrected"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'The company will launch the product next week.' Passive: The product ___ next week.",
    "correctAnswer": "will be launched",
    "explanation": "Topic: Passive Voice",
    "options": [
      "will be launched",
      "is launched",
      "launches",
      "was launched"
    ]
  },
  {
    "module": "english",
    "section": "grammar",
    "topic": "Passive Voice",
    "level": "B1",
    "difficulty": 2,
    "type": "MCQ",
    "content": "Active: 'The company will launch the product next week.' Passive: The product ___ next week.",
    "correctAnswer": "will be launched",
    "explanation": "Topic: Passive Voice",
    "options": [
      "launches",
      "will be launched",
      "was launched",
      "is launched"
    ]
  }
];

async function main() {
  console.log(`Seeding ${questions.length} additional grammar questions...`);

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

  console.log(`Seeded ${questions.length} additional grammar questions successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
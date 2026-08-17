export type QuestionOption = {
  id: string;
  content: string;
};

export type Question = {
  id: string;
  module: string;
  section: string;
  level: string;
  difficulty: number;
  type: "MCQ" | "FILL_BLANK";
  content: string;
  options: QuestionOption[];
};

export type UserAnswer = {
  questionId: string;
  answer: string;
  responseTime: number;
};
type GenerateParams = {
  module: string;
  section: string;
  topic: string;
  level: string;
  count: number;
};

type GeneratedQuestion = {
  content: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
};

export async function generateQuestions(params: GenerateParams): Promise<GeneratedQuestion[]> {
  const { module, section, topic, level, count } = params;

  const prompt = `Generate exactly ${count} multiple-choice questions for an English learning platform.

Module: ${module}
Section: ${section}
Topic: ${topic}
Level: ${level} (CEFR scale)

Requirements:
- Each question must have exactly 4 answer options.
- Exactly one option must be correct.
- Questions must be clear, unambiguous, and appropriate for the ${level} level.
- Avoid duplicate questions.
- Include a short explanation for the correct answer.

Return ONLY a valid JSON array, with no markdown formatting, no code fences, and no extra text. Format:
[
  {
    "content": "question text with ___ for blanks if needed",
    "correctAnswer": "the correct option text, must exactly match one of the options",
    "options": ["option1", "option2", "option3", "option4"],
    "explanation": "short explanation"
  }
]`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
     {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.8,
        },
      }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API error: ${res.status} ${errText}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Réponse vide de Gemini");
  }

  const parsed: GeneratedQuestion[] = JSON.parse(text);

  // Validation basique : structure correcte
  return parsed.filter(
    (q) =>
      q.content &&
      q.correctAnswer &&
      Array.isArray(q.options) &&
      q.options.length === 4 &&
      q.options.includes(q.correctAnswer)
  );
}
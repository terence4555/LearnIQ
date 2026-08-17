type FeedbackParams = {
  mode: "writing" | "speaking";
  prompt: string;
  response: string;
};

export type Feedback = {
  scores: {
    grammar: number;
    vocabulary: number;
    coherence: number;
    taskResponse: number;
  };
  overallScore: number;
  strengths: string[];
  improvements: string[];
  summary: string;
};

export async function generateFeedback(params: FeedbackParams): Promise<Feedback> {
  const { mode, prompt, response } = params;

  const instructions =
    mode === "writing"
      ? "This is a TOEFL-style Writing task. Evaluate grammar, vocabulary range, coherence/organization, and how well the response addresses the prompt (task response)."
      : "This is a transcript of a TOEFL-style Speaking task (spoken response, transcribed to text). Evaluate grammar, vocabulary range, coherence/fluency of ideas, and how well the response addresses the prompt (task response). Be lenient about minor transcription artifacts (missing punctuation, filler words like 'um').";

  const aiPrompt = `You are an English proficiency evaluator. ${instructions}

Prompt given to the student:
"""
${prompt}
"""

Student's response:
"""
${response}
"""

Score each category from 0 to 100. Then give an overallScore (0-100, weighted average). List 2-3 strengths and 2-3 concrete improvements. Write a short 2-sentence summary.

Return ONLY valid JSON, no markdown, no code fences, in this exact format:
{
  "scores": { "grammar": 0, "vocabulary": 0, "coherence": 0, "taskResponse": 0 },
  "overallScore": 0,
  "strengths": ["...", "..."],
  "improvements": ["...", "..."],
  "summary": "..."
}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: aiPrompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.4,
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

  return JSON.parse(text) as Feedback;
}
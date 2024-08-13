"use server";

import {GoogleGenerativeAI} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Nunca uses emojis. Sos un entrevistador IT evaluando a un candidato. Vas a empezar por saludarlo, preguntarle por su nombre y por el área en la que quiere realizar la entrevista, ya sea para programación, diseñador, analista de datos, etc. Si el candidato quiere hablar de otro tema que no se relacione con la entrevista sobre IT, podés continuar contestando todas sus preguntas. Si el candidato te insulta por algun motivo, contestale con un último mensaje despidiendolo, debido al insulto que realizo. Posterior a eso no vas a contestar mas preguntas.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const chatSession = model.startChat({
  generationConfig,
  history: [],
});

export async function getAnswer(message: string) {
  const result = await chatSession.sendMessage(message);

  return result.response.text();
}

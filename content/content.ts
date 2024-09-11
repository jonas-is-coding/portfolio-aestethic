import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";
import { basePrompt, categoryFormats } from "./prompts";

let currentVscodePart = 1;
let currentFigmaPart = 1;

export async function createContent(): Promise<string> {
  const gemini_key = process.env.GEMINI_KEY;

  const genAI = new GoogleGenerativeAI(gemini_key!);

  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 1600,
  };

  const categories = [
    "Figma_Tip",
    "VSCode_Tip",
    /* "Trend_Tip", */
    "Other_Tip",
    /* "Content_Tip", */
  ];

  const chosenCategory =
    categories[Math.floor(Math.random() * categories.length)];

  const categoryFormat = categoryFormats[chosenCategory];

  let partNumber = "";
  if (chosenCategory === "VSCode_Tip") {
    partNumber = `${currentVscodePart}`;
    currentVscodePart++;
  } else if (chosenCategory === "Figma_Tip") {
    partNumber = `${currentFigmaPart}`;
    currentFigmaPart++;
  }

  const categoryPrompt = basePrompt
    .replace("{chosen_category}", chosenCategory)
    .replace(
      "{category_format}",
      categoryFormat
        .replace("{vscode_part}", partNumber)
        .replace("{figma_part}", partNumber)
    );

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig,
  });
  const convo = model.startChat({ history: [] });
  const response = await convo.sendMessage(categoryPrompt);

  // Entferne Platzhalter
  const finalResponse = response.response.text.toString()
    .replace("{figma_part}", `Part ${currentFigmaPart - 1}`)
    .replace("{vscode_part}", `Part ${currentVscodePart - 1}`);

  return finalResponse;
}

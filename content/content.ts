import { GoogleGenerativeAI } from "@google/generative-ai";
import { basePrompt, categoryFormats } from "./prompts";
import fs from "fs";
import path from "path";

const partNumbersPath = path.join(__dirname, "parts.json");

function loadPartNumbers() {
  if (fs.existsSync(partNumbersPath)) {
    return JSON.parse(fs.readFileSync(partNumbersPath, "utf-8"));
  } else {
    return { vscodePart: 1, figmaPart: 1 };
  }
}

// Funktion zum Speichern der Part-Nummern
function savePartNumbers(partNumbers: {
  vscodePart: number;
  figmaPart: number;
}) {
  fs.writeFileSync(partNumbersPath, JSON.stringify(partNumbers), "utf-8");
}

export async function createContent(chosenCategory: string): Promise<string> {
  try {
    const partNumbers = loadPartNumbers();

    let partNumber = "";
    if (chosenCategory === "VSCode_Tip") {
      partNumber = `${partNumbers.vscodePart}`;
      partNumbers.vscodePart++;
    } else if (chosenCategory === "Figma_Tip") {
      partNumber = `${partNumbers.figmaPart}`;
      partNumbers.figmaPart++;
    }

    savePartNumbers(partNumbers);

    const categoryFormat = categoryFormats[chosenCategory];

    const categoryPrompt = basePrompt
      .replace("{chosen_category}", chosenCategory)
      .replace(
        "{category_format}",
        categoryFormat
          .replace("{vscode_part}", partNumber)
          .replace("{figma_part}", partNumber)
      );

    const gemini_key = process.env.GEMINI_KEY;
    if (!gemini_key) throw new Error("GEMINI_KEY is not defined.");

    const genAI = new GoogleGenerativeAI(gemini_key);

    const generationConfig = {
      temperature: 0.9,
      topP: 1,
      topK: 1,
      maxOutputTokens: 1500,
    };

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      generationConfig,
    });

    const result = await model.generateContent(categoryPrompt);
    const response = await result.response;

    console.log("Raw Response:", response);
    console.log("Response Text:", response.text);

    if (typeof response.text === "function") {
      const responseText = (response.text as unknown as () => string)();
      const finalResponse = responseText
        .replace("{figma_part}", `Part ${partNumbers.figmaPart - 1}`)
        .replace("{vscode_part}", `Part ${partNumbers.vscodePart - 1}`);

      return finalResponse;
    } else {
      throw new Error("Response text is not a function or not a string.");
    }
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

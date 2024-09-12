import { GoogleGenerativeAI } from "@google/generative-ai";
import { basePrompt, categoryFormats } from "./prompts";
import { loadPartNumbers, uploadPartNumbers } from "./parts";

export async function createContent(chosenCategory: string): Promise<string> {
  try {
    let partNumbers = { vscodePart: 1, figmaPart: 1 };
    let title: string | undefined;

    switch (chosenCategory) {
      case "Figma_Tip":
      case "VSCode_Tip":
        partNumbers = await loadPartNumbers();
        console.log("Initial part numbers:", partNumbers);

        if (chosenCategory === "VSCode_Tip") {
          partNumbers.vscodePart++;
        } else if (chosenCategory === "Figma_Tip") {
          partNumbers.figmaPart++;
        }
        
        break;

      case "Other_Tip":
        title = "Title Placeholder";
        break;

      default:
        throw new Error(`Unknown category: ${chosenCategory}`);
    }

    console.log("Updated part numbers:", partNumbers);

    await uploadPartNumbers(partNumbers);

    const categoryFormat = categoryFormats[chosenCategory];

    const categoryPrompt = basePrompt
      .replace("{chosen_category}", chosenCategory)
      .replace(
        "{category_format}",
        categoryFormat
          .replace("{vscode_part}", partNumbers.vscodePart.toString())
          .replace("{figma_part}", partNumbers.figmaPart.toString())
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
import { GoogleGenerativeAI } from "@google/generative-ai";
import { basePrompt, categoryFormats } from "./prompts";
import { loadPartNumbers, uploadPartNumbers } from "./parts";

export async function createContent(chosenCategory: string): Promise<string> {
  try {
    const partNumbers = await loadPartNumbers();
    console.log("Initial part numbers:", partNumbers); // Debugging

    let partNumber = "";
    if (chosenCategory === "VSCode_Tip") {
      partNumber = `${partNumbers.vscodePart}`;
      partNumbers.vscodePart++;
    } else if (chosenCategory === "Figma_Tip") {
      partNumber = `${partNumbers.figmaPart}`;
      partNumbers.figmaPart++;
    }

    console.log("Updated part numbers:", partNumbers); // Debugging

    await uploadPartNumbers(partNumbers);

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
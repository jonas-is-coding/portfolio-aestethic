import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import fs from "fs";
import { renderComponent } from "@/content/render";

const execPromise = promisify(exec);

export async function buildDesign(
  category: string,
  content: string
): Promise<string | null> {
  const partNumberMatch = content.match(/Part (\d+)/);
  const partNumber = partNumberMatch ? partNumberMatch[1] : "";

  console.log("Part number: ", partNumber);

  let componentFile: string;

  switch (category) {
    case "Figma_Tip":
      componentFile = "Figma_Tip";
      break;
    case "VSCode_Tip":
      componentFile = "VSCode_Tip";
      break;
    case "Other_Tip":
      componentFile = "Other_Tip";
      break;
    default:
      return null;
  }

  try {
    const stdout = await renderComponent(partNumber, componentFile);
    console.log("STDOUT: ", stdout);

    // Nutze den temporären Ordner in Vercel
    const screenshotPath = path.join(
      "/tmp",
      `${category}_part_${partNumber}.png`
    );

    // Stelle sicher, dass der Screenshot gespeichert wurde
    return screenshotPath;
  } catch (error) {
    console.error("Fehler beim Rendern der Komponente:", error);
    return null;
  }
}

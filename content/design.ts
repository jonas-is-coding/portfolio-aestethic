import { renderComponent } from "@/content/render";

export async function design(
  category: string,
  content: string
): Promise<string | null> {
  const partNumberMatch = content.match(/Part (\d+)/);
  const partNumber = partNumberMatch ? partNumberMatch[1] : "";

  const titleMatch = content.match(/Title (\d+)/);
  const title = titleMatch ? titleMatch[1] : "";

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
    console.log("Trying to render component file: ", componentFile);

    const stdout = await renderComponent(partNumber ? partNumber : title, componentFile);
    console.log("STDOUT: ", stdout);

    const screenshotPath = `/tmp/screenshots/${category}_part_${partNumber}.png`;

    return screenshotPath;
  } catch (error) {
    console.error("Fehler beim Rendern der Komponente:", error);
    return null;
  }
}

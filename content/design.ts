import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function buildDesign(category: string, content: string): Promise<string | null> {
  const partNumberMatch = content.match(/Part (\d+)/);
  const partNumber = partNumberMatch ? partNumberMatch[1] : '';

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
    console.log(`Command: node ./content/render.js ${partNumber} ${category}`)
    const { stdout } = await execPromise(`node ./content/render.js ${partNumber} ${category}`);
    console.log("STDOUT: ", stdout);
    const screenshotPath = `/Users/jonasbrahmst/portfolio/content/screenshots/${category}_part_${partNumber}.png`;
    return screenshotPath;
  } catch (error) {
    console.error('Fehler beim Rendern der Komponente:', error);
    return null;
  }
}
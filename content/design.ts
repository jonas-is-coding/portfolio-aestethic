import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function buildDesign(category: string, content: string): Promise<string | null> {
  const partNumber = content.split('Part ').pop() || '';

  console.log("Part number: ", partNumber)

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
    const { stdout } = await execPromise(`node ./content/render.js ${partNumber} Figma_Tip`);
    console.log("STDOUT: ", stdout);
    const screenshotPath = `Figma_Tip_part_${partNumber}.png`;
    return screenshotPath;
  } catch (error) {
    console.error('Fehler beim Rendern der Komponente:', error);
    return null;
  }
}
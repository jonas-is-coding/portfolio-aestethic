import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

type ComponentMapping = {
  [key: string]: string;
};

const componentMapping: ComponentMapping = {
  Figma_Tip: "Figma_Tip",
  VSCode_Tip: "VSCode_Tip",
  Other_Tip: "Other_Tip",
};

export async function buildDesign(category: string, data: { id: string; content: string }): Promise<string | null> {
  const partNumber = data.content.split('Part ').pop() || '';
  
  const componentFile = componentMapping[category] || "Figma_Tip";

  try {
    const { stdout } = await execPromise(`node ./content/render.js ${partNumber} ${componentFile}`);
    console.log(stdout);
    const screenshotPath = `${category.toLowerCase()}_part_${partNumber}.png`;
    return screenshotPath;
  } catch (error) {
    console.error('Fehler beim Rendern der Komponente:', error);
    return null;
  }
}
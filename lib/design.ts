import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function buildDesign(category: string, data: { id: string; content: string }): Promise<string | null> {
  const partNumber = data.content.split('Part ').pop() || '';

  try {
    const { stdout } = await execPromise(`node render.js ${partNumber}`);
    console.log(stdout);
    const screenshotPath = `figma_tip_part_${partNumber}.png`;
    return screenshotPath;
  } catch (error) {
    console.error('Fehler beim Rendern der Komponente:', error);
    return null;
  }
}
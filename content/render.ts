import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

export async function renderComponent(partNumber: string, componentFile: string): Promise<string> {
  chromium.setGraphicsMode = false;

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 1080, height: 1350 });

  await page.goto(
    `https://jonasbrahmst.vercel.app/screenshot/${componentFile}/${partNumber}`,
    { waitUntil: 'networkidle0' }
  );

  await page.waitForSelector('#item'); 

  const screenshotsDir = path.join('/tmp', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const screenshotPath = path.join(
    screenshotsDir,
    `${componentFile}_part_${partNumber}.png`
  );
  await page.screenshot({ path: screenshotPath });
  await browser.close();

  return screenshotPath;
}
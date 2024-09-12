const puppeteer = require('puppeteer');
const fs = require("fs");
const path = require("path");
const { setTimeout } = require("node:timers/promises");
async function renderComponent(partNumber, componentFile) {
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1080, height: 1350 });

  await page.goto(
    "https://jonasbrahmst.vercel.app/screenshot/" +
      componentFile +
      "/" +
      partNumber
  );

  await setTimeout(3000);

  const screenshotsDir = path.join(__dirname, "screenshots");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  const screenshotPath = path.join(
    screenshotsDir,
    `${componentFile}_part_${partNumber}.png`
  );
  await page.screenshot({ path: screenshotPath });
  await browser.close();
  return screenshotPath;
}
const partNumber = process.argv[2];
const componentFile = process.argv[3];
renderComponent(partNumber, componentFile)
  .then((screenshotPath) =>
    console.log(`Screenshot gespeichert unter: ${screenshotPath}`)
  )
.catch((err) => console.error("Fehler beim Rendern:", err));
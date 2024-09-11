const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { setTimeout } = require("node:timers/promises");

async function renderComponent(identifier, componentFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Setze die Viewport-Größe auf die Größe deiner Komponenten
  await page.setViewport({ width: 540, height: 675 });

  // Lade die React-App
  await page.goto(
    `https://jonasbrahmst.vercel.app/screenshot/${componentFile}/${identifier}`
  ); // Stelle sicher, dass die URL korrekt ist

  // Warte, bis die Seite geladen ist
  await setTimeout(3000);

  // Erstelle das Verzeichnis, falls es nicht existiert
  const screenshotsDir = path.join(__dirname, "screenshots");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  // Nimm einen Screenshot des gesamten Inhalts, der dem Viewport entspricht
  const screenshotPath = path.join(
    screenshotsDir,
    `${componentFile}_${identifier}.png`
  );
  await page.screenshot({ path: screenshotPath });

  await browser.close();
  return screenshotPath;
}

const identifier = process.argv[2];
const componentFile = process.argv[3];

renderComponent(identifier, componentFile)
  .then((screenshotPath) =>
    console.log(`Screenshot gespeichert unter: ${screenshotPath}`)
  )
  .catch((err) => console.error("Fehler beim Rendern:", err));
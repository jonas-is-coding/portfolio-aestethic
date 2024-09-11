require('dotenv').config(); // Stelle sicher, dass .env-Datei geladen wird

const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { setTimeout } = require("node:timers/promises");

async function renderComponent(identifier, componentFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Setze die Viewport-Größe auf die Größe deiner Komponenten
  await page.setViewport({ width: 540, height: 675 });

  // Erstelle die URL basierend auf dem Typ der Komponente
  let url;
  if (componentFile === "Other_Tip") {
    url = `${process.env.NEXT_PUBLIC_URL}/screenshot/Other_Tip/${encodeURIComponent(identifier)}`;
  } else if (componentFile === "Figma_Tip" || componentFile === "VSCode_Tip") {
    url = `${process.env.NEXT_PUBLIC_URL}/screenshot/${componentFile}/${encodeURIComponent(identifier)}`;
  } else {
    throw new Error(`Unbekannter componentFile-Typ: ${componentFile}`);
  }

  console.log(`Navigating to: ${url}`);
  await page.goto(url); // Stelle sicher, dass die URL korrekt ist

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
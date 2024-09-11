const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function renderComponent(partNumber, componentFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Lade die React-App
  await page.goto('https://jonasbrahmst.vercel.app/screenshot/' + componentFile + '/' + partNumber); // Stelle sicher, dass die URL korrekt ist

  // Warte, bis die Seite geladen ist
  await page.waitForTimeout(3000); // Warte 3 Sekunden, um sicherzustellen, dass alles geladen ist

  // Nimm einen Screenshot
  const screenshotPath = path.join(__dirname, 'screenshots', `${componentFile}_part_${partNumber}.png`);
  await page.screenshot({ path: screenshotPath });

  await browser.close();
  return screenshotPath;
}

const partNumber = process.argv[2];
const componentFile = process.argv[3];

renderComponent(partNumber, componentFile)
  .then(screenshotPath => console.log(`Screenshot gespeichert unter: ${screenshotPath}`))
  .catch(err => console.error('Fehler beim Rendern:', err));
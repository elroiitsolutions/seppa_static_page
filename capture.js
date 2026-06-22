const { chromium } = require('playwright');
const fs = require('fs');

async function capture() {
  console.log("Launching Edge...");
  const edge = await chromium.launch({ channel: 'msedge' }).catch(e => {
    console.log("Edge not found, trying default chromium");
    return chromium.launch();
  });
  const page1 = await edge.newPage();
  await page1.setViewportSize({ width: 1280, height: 720 });
  await page1.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page1.screenshot({ path: 'edge_screenshot.png' });
  await edge.close();
  console.log("Edge screenshot saved.");

  console.log("Launching Chrome...");
  const chrome = await chromium.launch({ channel: 'chrome' }).catch(e => {
     console.log("Chrome not found, trying default chromium");
     return chromium.launch();
  });
  const page2 = await chrome.newPage();
  await page2.setViewportSize({ width: 1280, height: 720 });
  await page2.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page2.screenshot({ path: 'chrome_screenshot.png' });
  await chrome.close();
  console.log("Chrome screenshot saved.");
}

capture().catch(console.error);

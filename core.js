// const { webkit } = require('playwright');

// (async () => {
//   const browser = await webkit.launch();
//   const page = await browser.newPage();
//   await page.goto('http://whatsmyuseragent.org/');
//   await page.screenshot({ path: `example.png` });

//   const alt = await page.getAttribute('//*[text()="Assignments"]/../../..', '');
//   expect(alt).toBe('Text');
//   await browser.close();
// })();
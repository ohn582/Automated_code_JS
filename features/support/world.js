const { setWorldConstructor, Before, After, Status, setDefaultTimeout } = require("@cucumber/cucumber")
setDefaultTimeout(60 * 1000)
require('dotenv').config()

function CustomWorld({ attach, log, parameters }) {
    this.attach = attach
    this.log = log
    this.parameters = parameters

}
let page

Before(async function (testCase) {
    const { expect } = require('chai').use(require(`chai-as-promised`));
    const { chromium, firefox, webkit } = require('playwright')
    const browserName = process.env.BROWSER_NAME
    const headlessSetting = (process.env.HEADLESS === 'true')
    const browserWidth = parseInt(process.env.BROWSER_WIDTH)
    const browserHeight = parseInt(process.env.BROWSER_HEIGHT)

    /**
     * Dynamic browser object creation
     */

    switch (browserName) {
        case "chromium":
            browser = await chromium.launch({ headless: headlessSetting });
            break;
        case "firefox":
            browser = await firefox.launch({ headless: headlessSetting })
            break;
        case "webkit":
            browser = await webkit.launch({ headless: headlessSetting })
            break;
    }

    // const context = await browser.newContext({ viewport: { width: browserWidth, height: browserHeight } });
    const context = await browser.newContext({ viewport: null });
    page = await context.newPage();
    this.page = page;
    const {Strike} = require('../super');
    let strike = new Strike(page);
    this.expect = expect;
    console.log('Starting e2e tests')
});

After(function (testCase) {
    console.log('Cucumber finished all features. Closing browser')
    var world = this;
    world.page = page;
    if (testCase.result.status === Status.FAILED) {
        return world.page.screenshot().then(function (screenShot) {
            // screenShot is a base-64 encoded PNG
            world.attach(screenShot, 'image/png');
        });
    }

    if (!world.page.isClosed()) {
        browser.close();
    }
});

setWorldConstructor(CustomWorld)
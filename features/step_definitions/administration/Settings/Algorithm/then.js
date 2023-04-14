const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { FeaturesPage } = require('../../../../page-objects/administration/Settings/Features/FeaturesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I Create a New Algorithum Data for Assignment Allocation A`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesPage(page);
    await listData.createAlgorithumDataA();
    await page.waitForTimeout(2000);
})

Then(`I Create a New Algorithum Data for Assignment Allocation B`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesPage(page);
    await listData.createAlgorithumDataB();
    await page.waitForTimeout(2000);
})

Then(`I Create a New Algorithum Data for Assignment Allocation C`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesPage(page);
    await listData.createAlgorithumDataC();
    await page.waitForTimeout(2000);
})





Then(`I select Save button`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesPage(page);
    await listData.featureSave();
    await page.waitForTimeout(2000);
})

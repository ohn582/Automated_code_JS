const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { periodsPage } = require('../../../../page-objects/administration/Objects/periodsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// OBS: Project
Then(`I type a new name in the Periods Data`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodOBStype();
    await page.waitForTimeout(2000);
})

Then(`I type a new name in the Periods Data B`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodOBStypeB();
    await page.waitForTimeout(2000);
})

Then(`I type a new name in the Periods Data C`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodOBStypeC();
    await page.waitForTimeout(2000);
})
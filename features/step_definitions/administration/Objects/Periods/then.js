const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { periodsPage } = require('../../../../page-objects/administration/Objects/periodsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// OBS: Project
Then(`I type a new name in the Periods Data A`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodOBStypeA();
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





Then(`I type Start and End Date to verify the data A`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodfilterVerifyA();
    await page.waitForTimeout(2000);
})

Then(`I type Start and End Date to verify the data B`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodfilterVerifyB();
    await page.waitForTimeout(2000);
})

Then(`I type Start and End Date to verify the data C`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodfilterVerifyC();
    await page.waitForTimeout(2000);
})





// List Partitions: update
Then(`I re-type the old data for periods A`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodsRetypeDataA();
    await page.waitForTimeout(2000);
})

Then(`I re-type the old data for periods B`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodsRetypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I re-type the old data for periods C`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodsRetypeDataC();
    await page.waitForTimeout(2000);
})





Then(`I delete the Periods data`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodDeleteButton();
    await page.waitForTimeout(2000);
})

Then(`I save the Periods data`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    listData.periodSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Periods data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new periodsPage(page);
    await listData.periodsReload();
    await page.waitForTimeout(2000);
})

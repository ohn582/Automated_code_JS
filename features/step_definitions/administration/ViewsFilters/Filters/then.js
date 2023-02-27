const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { viewFilterPage } = require('../../../../page-objects/administration/ViewFilter/FiltersPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Filters: Create
Then(`I create multiple names in the Filters Data`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterData();
    await page.waitForTimeout(2000);
})

Then(`I create multiple names in the Filters Data B`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterDataB();
    await page.waitForTimeout(2000);
})

Then(`I create multiple names in the Filters Data C`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterDataC();
    await page.waitForTimeout(2000);
})

Then(`I save the Filter data`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload in the Filter data`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterReload();
    await page.waitForTimeout(2000);
})






// Filters: Update
Then(`I re-type names in the Filters Data`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I re-type names in the Filters Data B`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I re-type names in the Filters Data C`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterReTypeDataC();
    await page.waitForTimeout(2000);
})






// Filters: Delete
Then(`I delete names in the Filters Data`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterDeleteData();
    await page.waitForTimeout(2000);
})

Then(`I delete names in the Filters Data B`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterDeleteDataB();
    await page.waitForTimeout(2000);
})

Then(`I delete names in the Filters Data C`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterPage(page);
    listData.filterDeleteDataC();
    await page.waitForTimeout(2000);
})
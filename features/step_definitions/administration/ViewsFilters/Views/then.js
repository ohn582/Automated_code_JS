const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { viewsPage } = require('../../../../page-objects/administration/ViewFilter/ViewsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Filters: Create
Then(`I create a new Views Data`, timeout, async function() {
    let page = this.page;
    const listData = new viewsPage(page);
    listData.viewData();
    await page.waitForTimeout(2000);
})

Then(`I create a new Views Data B`, timeout, async function() {
    let page = this.page;
    const listData = new viewsPage(page);
    listData.viewDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a new Views Data C`, timeout, async function() {
    let page = this.page;
    const listData = new viewsPage(page);
    listData.viewDataC();
    await page.waitForTimeout(2000);
})





// Filters: Update
Then(`I re-type a old Views Data`, timeout, async function() {
    let page = this.page;
    const listData = new viewsPage(page);
    listData.viewsReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I re-type a old Views Data B`, timeout, async function() {
    let page = this.page;
    const listData = new viewsPage(page);
    listData.viewsReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I re-type a old Views Data C`, timeout, async function() {
    let page = this.page;
    const listData = new viewsPage(page);
    listData.viewsReTypeDataC();
    await page.waitForTimeout(2000);
})




// Filters: Delete
Then(`I delete names in the Filters Data`, timeout, async function() {
    let page = this.page;
    const listData = new viewsPage(page);
    listData.filterDeleteData();
    await page.waitForTimeout(2000);
})


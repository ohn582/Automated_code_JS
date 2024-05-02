const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { systemListsPage } = require('../../../page-objects/administration/System_Lists/systemListsPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// System Lists: Create
Then(`I create a System Lists A`, timeout, async function() {
    let page = this.page;
    const listData = new systemListsPage(page);
    await listData.createSystemListsDataA();
    await page.waitForTimeout(2000);
})

Then(`I create a System Lists B`, timeout, async function() {
    let page = this.page;
    const listData = new systemListsPage(page);
    await listData.createSystemListsDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a System Lists C`, timeout, async function() {
    let page = this.page;
    const listData = new systemListsPage(page);
    await listData.createSystemListsDataC();
    await page.waitForTimeout(2000);
})








// System Lists: Update
Then(`I updated System Lists A`, timeout, async function() {
    let page = this.page;
    const listData = new systemListsPage(page);
    await listData.updateSystemListsDataA();
    await page.waitForTimeout(2000);
})

Then(`I updated System Lists B`, timeout, async function() {
    let page = this.page;
    const listData = new systemListsPage(page);
    await listData.updateSystemListsDataB();
    await page.waitForTimeout(2000);
})

Then(`I updated System Lists C`, timeout, async function() {
    let page = this.page;
    const listData = new systemListsPage(page);
    await listData.updateSystemListsDataC();
    await page.waitForTimeout(2000);
})




Then(`I select Save button`, timeout, async function() {
    let page = this.page;
    const listData = new systemListsPage(page);
    await listData.featureSave();
    await page.waitForTimeout(2000);
})

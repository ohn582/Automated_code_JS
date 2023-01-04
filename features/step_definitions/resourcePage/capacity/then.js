const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { resourcePage } = require('../../../page-objects/resourcePage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Rescource Capacity
Then(`I select capacity grid`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.capacityUpdateData();
    await page.waitForTimeout(2000);
})

Then(`I select capacity grid B`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.capacityUpdateDataB();
    await page.waitForTimeout(2000);
})

Then(`I select capacity grid C`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.capacityUpdateDataC();
    await page.waitForTimeout(2000);
})

Then(`I select capacity grid D`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.capacityUpdateDataD();
    await page.waitForTimeout(2000);
})


Then(`I select Save button in the Capacity Nav`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.capacitySave();
    await page.waitForTimeout(2000);
})


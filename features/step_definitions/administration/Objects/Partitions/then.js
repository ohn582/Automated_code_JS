const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { partitionsPage } = require('../../../../page-objects/administration/partitionsPage');
const { timeout } = require('../../../../test.config').test;



setDefaultTimeout(60 * 1000);

// List Partitions
Then(`I create a new data for partition A`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    await listData.partitionCreateData();
    await page.waitForTimeout(2000);
})

Then(`I create a new data for partition B`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    await listData.partitionCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a new data for partition C`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    await listData.partitionCreateDataC();
    await page.waitForTimeout(2000);
})



// List Partitions: update
Then(`I re-type the old data for partition A`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    listData.partitionRetypeData();
    await page.waitForTimeout(2000);
})

Then(`I re-type the old data for partition B`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    listData.partitionRetypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I re-type the old data for partition C`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    listData.partitionRetypeDataC();
    await page.waitForTimeout(2000);
})





Then(`I delete the Partitions data`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    listData.partitionDeleteButton();
    await page.waitForTimeout(2000);
})

Then(`I select save button`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    listData.partitionSave();
    await page.waitForTimeout(2000);
})

Then(`I select reload button`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsPage(page);
    await listData.partitionReload();
    await page.waitForTimeout(2000);
})




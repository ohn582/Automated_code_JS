const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { partitionsListPage } = require('../../../../page-objects/partitionsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

//partition Data Create
Then(`I create a new data for partition A`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionCreateData();
    await page.waitForTimeout(2000);
})

Then(`I create a new data for partition B`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a new data for partition C`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionCreateDataC();
    await page.waitForTimeout(2000);
})



//partition Data Update
Then(`I re-type the old data for partition A`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionRetypeData();
    await page.waitForTimeout(2000);
})

Then(`I re-type the old data for partition B`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionRetypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I re-type the old data for partition C`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionRetypeDataC();
    await page.waitForTimeout(2000);
})




//partition Data Delete
Then(`I delete multiple datas for partition`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partDeleteData();
    await page.waitForTimeout(2000);
})

Then(`I select Delete button`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionDeleteButton();
    await page.waitForTimeout(2000);
})





Then(`I select save button`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionSave();
    await page.waitForTimeout(2000);
})

Then(`I select reload button`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsListPage(page);
    listData.partitionReload();
    await page.waitForTimeout(2000);
})
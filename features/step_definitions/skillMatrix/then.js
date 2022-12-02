const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { matrixPage } = require('../../page-objects/matrixPage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project
Then(`I select multiple grid`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceDropView();
    await page.waitForTimeout(2000);
})

Then(`I select multiple grid B`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceDropViewB();
    await page.waitForTimeout(2000);
})

Then(`I select multiple grid C`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceDropViewC();
    await page.waitForTimeout(2000);
})

Then(`I select multiple grid D`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceDropViewD();
    await page.waitForTimeout(2000);
})




Then(`I select Save button in the Matrix`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceMatrixSave();
    await page.waitForTimeout(2000);
})
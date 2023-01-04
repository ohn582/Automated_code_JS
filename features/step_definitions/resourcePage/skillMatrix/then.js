const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { matrixPage } = require('../../../page-objects/matrixPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Create
Then(`I select grid`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceDropView();
    await page.waitForTimeout(2000);
})

Then(`I select grid B`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceDropViewB();
    await page.waitForTimeout(2000);
})

Then(`I select grid C`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceDropViewC();
    await page.waitForTimeout(2000);
})

Then(`I select grid D`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceDropViewD();
    await page.waitForTimeout(2000);
})



//Matrix Skill Update
Then(`I re-typed multiple grid A`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.ReTypeResourceDataA();
    await page.waitForTimeout(2000);
})

Then(`I re-typed multiple grid B`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.ReTypeResourceDataB();
    await page.waitForTimeout(2000);
})

Then(`I re-typed multiple grid C`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.ReTypeResourceDataC();
    await page.waitForTimeout(2000);
})

Then(`I re-typed multiple grid D`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.ReTypeResourceDataD();
    await page.waitForTimeout(2000);
})








Then(`I select Save button in the Matrix`, timeout, async function() {
    let page = this.page;
    const listData = new matrixPage(page);
    listData.resourceMatrixSave();
    await page.waitForTimeout(2000);
})
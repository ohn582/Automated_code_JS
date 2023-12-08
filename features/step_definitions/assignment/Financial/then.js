const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { financialPage } = require('../../../page-objects/assignment/financial/financialPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Financial create
Then(`I Create Rescource Assignment Data for Financial A`, timeout, async function() {
    let page = this.page;
    const listData = new financialPage(page);
    listData.financialCreateDataA();
    await page.waitForTimeout(2000);
})

Then(`I Create Rescource Assignment Data for Financial B`, timeout, async function() {
    let page = this.page;
    const listData = new financialPage(page);
    listData.financialCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I Create Rescource Assignment Data for Financial C`, timeout, async function() {
    let page = this.page;
    const listData = new financialPage(page);
    listData.financialCreateDataC();
    await page.waitForTimeout(2000);
})



//Financial Update
Then(`I Update my Rescource Assignment Data for Financial A`, timeout, async function() {
    let page = this.page;
    const listData = new financialPage(page);
    listData.financialUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Update my Rescource Assignment Data for Financial B`, timeout, async function() {
    let page = this.page;
    const listData = new financialPage(page);
    listData.financialUpdateB();
    await page.waitForTimeout(2000);
})



//Financial Delete
Then(`I delete Financial Data A`, timeout, async function() {
    let page = this.page;
    const listData = new financialPage(page);
    listData.financialDeleteA();
    await page.waitForTimeout(2000);
})

Then(`I delete Financial Data B`, timeout, async function() {
    let page = this.page;
    const listData = new financialPage(page);
    listData.financialDeleteB();
    await page.waitForTimeout(2000);
})





//Financial Save
Then(`Select Save Button for Financial`, timeout, async function() {
    let page = this.page;
    const listData = new financialPage(page);
    listData.financialSaveData();
    await page.waitForTimeout(2000);
})


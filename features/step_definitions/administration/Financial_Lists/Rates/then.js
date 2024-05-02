const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { RatesPage } = require('../../../../page-objects/administration/Financial_Lists/RatesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Rates tes1`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    await listData.listRatesWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Rates tes2`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    await listData.listRatesWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Rates tes3`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    await listData.listRatesWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Rates`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    listData.ratesReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Rates tes2`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    listData.ratesReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Rates tes3`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    listData.ratesReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Rates data`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    await listData.listRatesDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Rates`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    await listData.listRatesSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Rates by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new RatesPage(page);
    await listData.listRatesReload();
    await page.waitForTimeout(2000);
})

const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { CurrenciesPage } = require('../../../../page-objects/administration/Financial_Lists/CurrenciesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Currencies`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    await listData.listCurrenciesWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Currencies tes2`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    await listData.listCurrenciesWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Currencies tes3`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    await listData.listCurrenciesWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Currencies`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    listData.currenciesReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Currencies tes2`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    listData.currenciesReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Currencies tes3`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    listData.currenciesReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Currencies data`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    await listData.listCurrenciesDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Currencies`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    await listData.listCurrenciesSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Currencies by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new CurrenciesPage(page);
    await listData.listCurrenciesReload();
    await page.waitForTimeout(2000);
})

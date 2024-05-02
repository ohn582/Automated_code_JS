const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { CountriesPage } = require('../../../../page-objects/administration/Resource_lists/CountriesPage');
const { timeout } = require('../../../../test.config').test;

// List Project Codes
Then(`I typed a new Countries tes1`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.listCountriesWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Countries tes2`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.listCountriesWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Countries tes3`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.listCountriesWriteC();
    await page.waitForTimeout(2000);
})





//update
Then(`I Re-Typed a new Countries`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.countriesReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Countries tes2`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.countriesReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Countries tes3`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.countriesReTypeDataC();
    await page.waitForTimeout(2000);
})






Then(`I delete the Countries data`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.listCountriesDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Countries`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.listCountriesSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Countries by re-loging admin account`, timeout, async function () {
    let page = this.page;
    const listData = new CountriesPage(page);
    await listData.listCountriesReload();
    await page.waitForTimeout(2000);
})

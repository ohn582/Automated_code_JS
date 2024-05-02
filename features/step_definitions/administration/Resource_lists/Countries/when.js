const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { countriesTypeData } = require('../../../../components/administration/Resource_lists/countries_page.component');
const { timeout } = require('../../../../test.config').test;

//Lists Project Codes
When(`I select Administration and select Countries resource Lists`, timeout, async function() {
    let page = this.page;
    const listData = new countriesTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Countries`, timeout, async function () {
    let page = this.page;
    const listData = new countriesTypeData(page);
    listData.listCountriesSelect();
    await page.waitForTimeout(2000);
})

When(`I select a data in Countries`, timeout, async function () {
    let page = this.page;
    const listData = new countriesTypeData(page);
    listData.listCountriesSelectData();
    await page.waitForTimeout(2000);
})

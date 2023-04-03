const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { RatesTypeData } = require('../../../../components/administration/Financial_Lists/rates_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Rates Resource Lists`, timeout, async function () {
    let page = this.page;
    const listData = new RatesTypeData(page);
    listData.financialListLink();
    await page.waitForTimeout(2000);
})

When(`I select Rates`, timeout, async function () {
    let page = this.page;
    const listData = new RatesTypeData(page);
    listData.listRatesSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Rates`, timeout, async function () {
    let page = this.page;
    const listData = new RatesTypeData(page);
    listData.listRatesAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Rates datas`, timeout, async function () {
    let page = this.page;
    const listData = new RatesTypeData(page);
    listData.listRatesSelectData();
    await page.waitForTimeout(2000);
})


When(`I select Load Rates from reload button`, timeout, async function () {
    let page = this.page;
    const listData = new RatesTypeData(page);
    listData.listRatesReloadRates();
    await page.waitForTimeout(2000);
})

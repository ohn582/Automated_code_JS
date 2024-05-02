const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { CurrenciesTypeData } = require('../../../../components/administration/Financial_Lists/currencies_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Currencies Resource Lists`, timeout, async function () {
    let page = this.page;
    const listData = new CurrenciesTypeData(page);
    listData.financialListLink();
    await page.waitForTimeout(2000);
})

When(`I select Currencies`, timeout, async function () {
    let page = this.page;
    const listData = new CurrenciesTypeData(page);
    listData.listCurrenciesSelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Currencies datas`, timeout, async function () {
    let page = this.page;
    const listData = new CurrenciesTypeData(page);
    listData.listCurrenciesSelectData();
    await page.waitForTimeout(2000);
})


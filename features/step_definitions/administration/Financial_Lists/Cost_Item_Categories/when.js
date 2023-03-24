const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { CostItemsCategoriesTypeData } = require('../../../../components/administration/Financial_Lists/cic_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Cost Item Categories Resource Lists`, timeout, async function () {
    let page = this.page;
    const listData = new CostItemsCategoriesTypeData(page);
    listData.financialListLink();
    await page.waitForTimeout(2000);
})

When(`I select Cost Item Categories`, timeout, async function () {
    let page = this.page;
    const listData = new CostItemsCategoriesTypeData(page);
    listData.listCICSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Cost Item Categories`, timeout, async function () {
    let page = this.page;
    const listData = new CostItemsCategoriesTypeData(page);
    listData.listCICAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Cost Item Categories datas`, timeout, async function () {
    let page = this.page;
    const listData = new CostItemsCategoriesTypeData(page);
    listData.listCICSelectData();
    await page.waitForTimeout(2000);
})


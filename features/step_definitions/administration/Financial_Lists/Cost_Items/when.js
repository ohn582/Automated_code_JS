const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { CostItemsTypeData } = require('../../../../components/administration/Financial_Lists/ci_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Cost Items Financial Lists`, timeout, async function () {
    let page = this.page;
    const listData = new CostItemsTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Cost Items`, timeout, async function () {
    let page = this.page;
    const listData = new CostItemsTypeData(page);
    listData.listCISelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Cost Items datas`, timeout, async function () {
    let page = this.page;
    const listData = new CostItemsTypeData(page);
    listData.listCISelectData();
    await page.waitForTimeout(2000);
})


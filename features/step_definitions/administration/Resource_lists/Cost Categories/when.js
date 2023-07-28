const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { ccTypeData } = require('../../../../components/administration/Resource_Lists/costCategories_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Resource Lists`, timeout, async function() {
    let page = this.page;
    const listData = new ccTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Cost Categories`, timeout, async function() {
    let page = this.page;
    const listData = new ccTypeData(page);
    listData.listCCSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Cost Categories`, timeout, async function() {
    let page = this.page;
    const listData = new ccTypeData(page);
    listData.listCCAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Cost Categories datas`, timeout, async function() {
    let page = this.page;
    const listData = new ccTypeData(page);
    listData.listCCSelectData();
    await page.waitForTimeout(2000);
})


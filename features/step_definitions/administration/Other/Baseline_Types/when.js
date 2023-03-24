const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { BaselineTypesData } = require('../../../../components/administration/Other/baselineTypes_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Baseline Types List`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypesData(page);
    listData.otherListLink();
    await page.waitForTimeout(2000);
})

When(`I select Baseline Types`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypesData(page);
    listData.listBaseTypeSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Baseline Types`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypesData(page);
    listData.listBaseTypeAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Baseline Types datas`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypesData(page);
    listData.listBaseTypeSelectData();
    await page.waitForTimeout(2000);
})


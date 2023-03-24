const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { FeatureTypesData } = require('../../../../components/administration/Agile/ft_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Feature Types Agile Lists`, timeout, async function () {
    let page = this.page;
    const listData = new FeatureTypesData(page);
    listData.agileListLink();
    await page.waitForTimeout(2000);
})

When(`I select Feature Types`, timeout, async function () {
    let page = this.page;
    const listData = new FeatureTypesData(page);
    listData.listFTSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Feature Types`, timeout, async function () {
    let page = this.page;
    const listData = new FeatureTypesData(page);
    listData.listFTAdd();
    await page.waitForTimeout(2000);
})

When(`I select Feature Types in the checkbox data`, timeout, async function () {
    let page = this.page;
    const listData = new FeatureTypesData(page);
    listData.listFTSelectData();
    await page.waitForTimeout(2000);
})


const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { FeatureStatesTypeData } = require('../../../../components/administration/Agile/fs_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Feature States Resource Lists`, timeout, async function () {
    let page = this.page;
    const listData = new FeatureStatesTypeData(page);
    listData.agileListLink();
    await page.waitForTimeout(2000);
})

When(`I select Feature States`, timeout, async function () {
    let page = this.page;
    const listData = new FeatureStatesTypeData(page);
    listData.listFSSelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Feature States in datas`, timeout, async function () {
    let page = this.page;
    const listData = new FeatureStatesTypeData(page);
    listData.listFSSelectData();
    await page.waitForTimeout(2000);
})


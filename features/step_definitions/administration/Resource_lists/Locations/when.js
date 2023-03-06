const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { LocationsTypeData } = require('../../../../components/administration/Resource_Lists/locations_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Location Resource Lists`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsTypeData(page);
    listData.resourceListLink();
    await page.waitForTimeout(2000);
})

When(`I select Locations`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsTypeData(page);
    listData.listLocationsSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Locations`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsTypeData(page);
    listData.listLocationsAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Locations datas`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsTypeData(page);
    listData.listLocationsSelectData();
    await page.waitForTimeout(2000);
})


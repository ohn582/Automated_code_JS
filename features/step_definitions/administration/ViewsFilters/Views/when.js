const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { viewsTypeData } = require('../../../../components/administration/ViewFilter/views_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Filters
When(`I select Administration and select Views`, timeout, async function() {
    let page = this.page;
    const listData = new viewsTypeData(page);
    listData.viewsLink();
    await page.waitForTimeout(2000);
})

When(`I select Resource Capacity in the dropdown filter`, timeout, async function() {
    let page = this.page;
    const listData = new viewsTypeData(page);
    listData.viewsDropDownMenu();
    await page.waitForTimeout(2000);
})


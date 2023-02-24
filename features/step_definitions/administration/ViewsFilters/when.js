const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../page-objects/HomePage');
const { viewFilterTypeData } = require('../../../components/administration/viewFilter_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Filters
When(`I select Administration and select Views & Filters and select Filters`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterTypeData(page);
    listData.adminOBSPeroidsLink();
    await page.waitForTimeout(2000);
})

When(`I select Financial from the dropdown menu`, timeout, async function() {
    let page = this.page;
    const listData = new viewFilterTypeData(page);
    listData.filterDropDownMenu();
    await page.waitForTimeout(2000);
})


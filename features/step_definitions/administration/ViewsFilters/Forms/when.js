const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { formsTypeData } = require('../../../../components/administration/ViewFilter/forms_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Filters
When(`I select Administration and select Views & Filters and select Forms`, timeout, async function() {
    let page = this.page;
    const listData = new formsTypeData(page);
    listData.adminViewFiltersLink();
    await page.waitForTimeout(2000);
})

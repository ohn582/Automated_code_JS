const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../page-objects/HomePage');
const { SystemListsTypeData } = require('../../../components/administration/System_Lists/systemLists_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select System Lists`, timeout, async function() {
    let page = this.page;
    const listData = new SystemListsTypeData(page);
    listData.systemListLink();
    await page.waitForTimeout(2000);
})


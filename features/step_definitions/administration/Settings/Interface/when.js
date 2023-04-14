const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { algorithumTypeData } = require('../../../../components/administration/Settings/interface/interface_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Admin and Settings`, timeout, async function() {
    let page = this.page;
    const listData = new algorithumTypeData(page);
    listData.adminListLink();
    await page.waitForTimeout(2000);
})

When(`I select Interface`, timeout, async function() {
    let page = this.page;
    const listData = new algorithumTypeData(page);
    listData.listInterfaceSelect();
    await page.waitForTimeout(2000);
})


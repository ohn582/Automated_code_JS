const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { AlgorithumTypeData } = require('../../../../components/administration/Settings/Algorithm/algorithm_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Settings`, timeout, async function() {
    let page = this.page;
    const listData = new AlgorithumTypeData(page);
    listData.adminLink();
    await page.waitForTimeout(2000);
})

When(`I select Algorithum`, timeout, async function() {
    let page = this.page;
    const listData = new AlgorithumTypeData(page);
    listData.algorithumSettingLink();
    await page.waitForTimeout(2000);
})

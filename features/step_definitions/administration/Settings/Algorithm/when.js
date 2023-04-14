const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { FeaturesTypeData } = require('../../../../components/administration/Settings/Features/features_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Settings`, timeout, async function() {
    let page = this.page;
    const listData = new AlgorithumTypeData(page);
    listData.settingListLink();
    await page.waitForTimeout(2000);
})

When(`I select Algorithum`, timeout, async function() {
    let page = this.page;
    const listData = new AlgorithumTypeData(page);
    listData.algorithumLinks();
    await page.waitForTimeout(2000);
})

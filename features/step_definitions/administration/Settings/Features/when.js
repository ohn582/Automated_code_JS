const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { FeaturesTypeData } = require('../../../../components/administration/Settings/Features/features_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Features List`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesTypeData(page);
    listData.settingListLink();
    await page.waitForTimeout(2000);
})

When(`I select Features`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesTypeData(page);
    listData.featuresLink();
    await page.waitForTimeout(2000);
})

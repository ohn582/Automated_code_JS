const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { FeaturesPage } = require('../../../../page-objects/administration/Settings/Features/FeaturesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I selected a diffrent color`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesPage(page);
    await listData.topBarColorEdit();
    await page.waitForTimeout(2000);
})

Then(`I change the Session Timeout`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesPage(page);
    await listData.sessionTimeoutEdit();
    await page.waitForTimeout(2000);
})

Then(`I clicked Save button in Features`, timeout, async function() {
    let page = this.page;
    const listData = new FeaturesPage(page);
    await listData.featureSave();
    await page.waitForTimeout(2000);
})

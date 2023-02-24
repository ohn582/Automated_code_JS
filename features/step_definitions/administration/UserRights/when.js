const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../page-objects/HomePage');
const { userTypeData } = require('../../../components/administration/user_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Filters
When(`I select Administration and select Users & Rights and select Users`, timeout, async function() {
    let page = this.page;
    const listData = new userTypeData(page);
    listData.userLink();
    await page.waitForTimeout(2000);
})
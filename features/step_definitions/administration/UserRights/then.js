const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { userPage } = require('../../../page-objects/administration/userPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Filters: Create
Then(`I Create a new User Data`, timeout, async function() {
    let page = this.page;
    const listData = new userPage(page);
    listData.pageData();
    await page.waitForTimeout(2000);
})

Then(`I Save Users Data`, timeout, async function() {
    let page = this.page;
    const listData = new userPage(page);
    listData.saveData();
    await page.waitForTimeout(2000);
})

Then(`I logout of the account`, timeout, async function() {
    let page = this.page;
    const listData = new userPage(page);
    listData.adminData();
    await page.waitForTimeout(2000);
})
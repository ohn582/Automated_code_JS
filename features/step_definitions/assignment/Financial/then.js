const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { resourcePage } = require('../../../page-objects/assignmentPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project
Then(`I create a new Data for Rescource Data`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.resourceCreateData();
    await page.waitForTimeout(2000);
})
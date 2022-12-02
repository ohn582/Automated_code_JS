const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { resourcePage } = require('../../page-objects/resourcePage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project
Then(`I clicked View and select Resource Simple`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.resourceDropView();
    await page.waitForTimeout(2000);
})



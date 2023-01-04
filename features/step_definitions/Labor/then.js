const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { laborPage } = require('../../page-objects/laborPage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Data Create
Then(`I Create Rescource Assignment Data for labor`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborCreateData();
    await page.waitForTimeout(2000);
})


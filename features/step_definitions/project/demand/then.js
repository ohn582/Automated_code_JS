const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { projectDemandPage } = require('../../../page-objects/project/demand/projectDemandPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Create Data & Date
Then(`I create a Project Demand Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectDemandPage(page);
    listData.projectAddDemandA();
    await page.waitForTimeout(2000);
})

Then(`I create a Project Demand Data B`, timeout, async function() {
    let page = this.page;
    const listData = new projectDemandPage(page);
    listData.projectAddDemandA();
    await page.waitForTimeout(2000);
})
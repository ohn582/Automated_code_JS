const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { resourceTypeData } = require('../../components/resource_page.component');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Assingnments
When(`I select Rescource and Rescource Data`, timeout, async function() {
    let page = this.page;
    const listData = new resourceTypeData(page);
    listData.resourceDataSelect();
    await page.waitForTimeout(2000);
})

When(`I clicked add to create a new Rescource Assignments`, timeout, async function() {
    let page = this.page;
    const listData = new resourceTypeData(page);
    listData.resourceCreateData();
    await page.waitForTimeout(2000);
})
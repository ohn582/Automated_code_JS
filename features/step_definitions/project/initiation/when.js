const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { initiationTypeData } = require('../../../components/project.component/initiation/initiation_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Data Create
When(`I select Project and Initiation`, timeout, async function() {
    let page = this.page;
    const listData = new initiationTypeData(page);
    listData.initiationLink();
    await page.waitForTimeout(2000);
})

When(`I select Project and Initiation B`, timeout, async function() {
    let page = this.page;
    const listData = new initiationTypeData(page);
    listData.initiationLinkB();
    await page.waitForTimeout(2000);
})

When(`I select Initiation`, timeout, async function() {
    let page = this.page;
    const listData = new initiationTypeData(page);
    listData.initiationLinkB();
    await page.waitForTimeout(2000);
})


//Project Demand
When(`I select Project and Demand`, timeout, async function() {
    let page = this.page;
    const listData = new initiationTypeData(page);
    listData.projDemandLink();
    await page.waitForTimeout(2000);
})

When(`I select Project View and select Project Demand Analysis`, timeout, async function() {
    let page = this.page;
    const listData = new initiationTypeData(page);
    listData.projDemandView();
    await page.waitForTimeout(3000);
})
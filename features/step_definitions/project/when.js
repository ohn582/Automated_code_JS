const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { projectTypeData } = require('../../components/project_page.component');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Data Create
When(`I select Project and Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projLinkSelect();
    await page.waitForTimeout(2000);
})

When(`I select Project Add Button`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projAddBtn();
    await page.waitForTimeout(2000);
})



// Project Data Delete
When(`I select multiple Project datas`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.listProjectSelect();
    await page.waitForTimeout(2000);
})


//Project Demand
When(`I select Project and Demand`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projDemandLink();
    await page.waitForTimeout(2000);
})

When(`I select Project View and select Project Demand Analysis`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projDemandView();
    await page.waitForTimeout(3000);
})
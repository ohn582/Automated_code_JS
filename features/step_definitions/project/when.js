const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { projectTypeData } = require('../../components/project_page.component');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project
When(`I select Project and Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projLinkSelect();
    await page.waitForTimeout(2000);
})


When(`I select Project View and select Project Expanded-MR import`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projViewSelect();
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


// Project Assingnments
When(`I select Project and Assignments`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projAssingnmentSelect();
    await page.waitForTimeout(2000);
})

When(`I select Filter Button in project Assignments`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projAssingFilterSelect();
    await page.waitForTimeout(2000);
})

When(`I select Project View and select Forecast Simple`, timeout, async function() {
    let page = this.page;
    const listData = new projectTypeData(page);
    listData.projAssingnmentView();
    await page.waitForTimeout(2000);
})
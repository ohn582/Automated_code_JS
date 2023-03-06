const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { sponsorsTypeData } = require('../../../../components/administration/ProjectLists/sponsors_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Domains
When(`I select Administration and select Project List`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Sponsors`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsTypeData(page);
    listData.projectsponsorsLink();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Sponsors`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsTypeData(page);
    listData.listsponsorsAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Sponsors datas`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsTypeData(page);
    listData.listsponsorsSelect();
    await page.waitForTimeout(2000);
})


const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { pcTypeData } = require('../../../../components/administration/ProjectLists/projectCodes_page.component');
const { timeout } = require('../../../../test.config').test;

//Lists Project Codes
When(`I select Administration and select PC project Lists`, timeout, async function() {
    let page = this.page;
    const listData = new pcTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Project Codes`, timeout, async function () {
    let page = this.page;
    const listData = new pcTypeData(page);
    listData.listPCSelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Project Codes in data`, timeout, async function () {
    let page = this.page;
    const listData = new pcTypeData(page);
    listData.listPCSelectData();
    await page.waitForTimeout(2000);
})

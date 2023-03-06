const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { psTypeData } = require('../../../../components/administration/ProjectLists/ps_page.component');
const { timeout } = require('../../../../test.config').test;


//Lists Project States
When(`I select Administration and select PS project Lists`, timeout, async function() {
    let page = this.page;
    const listData = new psTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Project States`, timeout, async function() {
    let page = this.page;
    const listData = new psTypeData(page);
    listData.listPSSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Project States`, timeout, async function() {
    let page = this.page;
    const listData = new psTypeData(page);
    listData.listPSAdd();
    await page.waitForTimeout(2000);
})

When(`I select Project States in data`, timeout, async function() {
    let page = this.page;
    const listData = new psTypeData(page);
    listData.listPSSelectData();
    await page.waitForTimeout(2000);
})

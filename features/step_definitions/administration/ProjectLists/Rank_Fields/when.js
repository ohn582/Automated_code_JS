const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { rfTypeData } = require('../../../../components/administration/ProjectLists/rankFields_page.component');
const { timeout } = require('../../../../test.config').test;


//Lists Rank Fields
When(`I select Administration and select RF Lists`, timeout, async function() {
    let page = this.page;
    const listData = new rfTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Rank Fields`, timeout, async function() {
    let page = this.page;
    const listData = new rfTypeData(page);
    listData.listRFSelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Rank Fields in data`, timeout, async function() {
    let page = this.page;
    const listData = new rfTypeData(page);
    listData.listRFSelectData();
    await page.waitForTimeout(2000);
})

const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { RankFormTypeData } = require('../../../../components/administration/ProjectLists/rankFormulas_page.component');
const { timeout } = require('../../../../test.config').test;


//Lists Project States
When(`I select Administration and select Rank Form Lists`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Rank Formulas`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormTypeData(page);
    listData.listRFSelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Rank Formulas in data`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormTypeData(page);
    listData.listRFSelectData();
    await page.waitForTimeout(2000);
})

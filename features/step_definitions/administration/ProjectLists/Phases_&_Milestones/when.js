const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { pmTypeData } = require('../../../../components/administration/ProjectLists/phasesMilestones_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Domains
When(`I select Administration and select PM Lists`, timeout, async function() {
    let page = this.page;
    const listData = new pmTypeData(page);
    listData.pmListLink();
    await page.waitForTimeout(2000);
})

When(`I select Phases Milestones`, timeout, async function() {
    let page = this.page;
    const listData = new pmTypeData(page);
    listData.linkPMSelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Phases Milestones in data`, timeout, async function() {
    let page = this.page;
    const listData = new pmTypeData(page);
    listData.listPMSelectData();
    await page.waitForTimeout(2000);
})


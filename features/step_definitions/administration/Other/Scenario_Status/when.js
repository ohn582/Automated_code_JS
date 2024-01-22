const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { ScenarioStatusData } = require('../../../../components/administration/Other/scenarioStatus_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Scenario Status Link
When(`I select Scenario Status`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusData(page);
    listData.listSS_Select();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Scenario Status`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusData(page);
    listData.listSS_Add();
    await page.waitForTimeout(2000);
})

When(`I select multiple Scenario Status datas`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusData(page);
    listData.listSS_SelectData();
    await page.waitForTimeout(2000);
})


const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { projectDemandTypeData } = require('../../../components/project.component/demand/demand_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Data Create
When(`I Select Project Demand`, timeout, async function() {
    let page = this.page;
    const listData = new projectDemandTypeData(page);
    listData.projLinkDemandSelect();
    await page.waitForTimeout(2000);
})
const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { utilizationTypeData } = require('../../../components/resource/utilization/utilization_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Assingnments
When(`I select Utilization`, timeout, async function() {
    let page = this.page;
    const listData = new utilizationTypeData(page);
    listData.resourceUtilizationLink();
    await page.waitForTimeout(2000);
})

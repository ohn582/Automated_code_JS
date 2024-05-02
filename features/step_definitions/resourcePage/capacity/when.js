const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { capacityTypeData } = require('../../../components/resource/capacity/capacity_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Assingnments
When(`I select Capacity`, timeout, async function() {
    let page = this.page;
    const listData = new capacityTypeData(page);
    listData.resourceCapacityLink();
    await page.waitForTimeout(2000);
})

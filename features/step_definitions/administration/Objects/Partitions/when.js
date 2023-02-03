const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const {partitionsTypeData } = require('../../../../components/partitions_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Data Create
When(`I select Administration and select Objects`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsTypeData(page);
    listData.administrationLink();
    await page.waitForTimeout(2000);
})

When(`I select Object Partitions`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsTypeData(page);
    listData.partitionsLink();
    await page.waitForTimeout(2000);
})


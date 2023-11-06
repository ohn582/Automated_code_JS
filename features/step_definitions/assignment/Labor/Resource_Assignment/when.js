const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { resourceTypeData } = require('../../../../components/Assignment/Labor/resource_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Labor
When(`I select Resource and Labor`, timeout, async function() {
    let page = this.page;
    const listData = new resourceTypeData(page);
    listData.laborLink();
    await page.waitForTimeout(2000);
})

When(`I select multiple Labor Data`, timeout, async function() {
    let page = this.page;
    const listData = new resourceTypeData(page);
    listData.laborCheckBox();
    await page.waitForTimeout(2000);
})

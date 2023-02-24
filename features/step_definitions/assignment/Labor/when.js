const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { laborTypeData } = require('../../../components/assignment_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Labor
When(`I select Resource and Labor`, timeout, async function() {
    let page = this.page;
    const listData = new laborTypeData(page);
    listData.laborLink();
    await page.waitForTimeout(2000);
})


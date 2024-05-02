const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { skillTypeData } = require('../../../../components/Assignment/Labor/skill_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Labor
When(`I select Labor from Resources`, timeout, async function() {
    let page = this.page;
    const listData = new skillTypeData(page);
    listData.laborLink();
    await page.waitForTimeout(2000);
})


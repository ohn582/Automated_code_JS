const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { rankingTypeData } = require('../../components/analysis_page.component');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Data Create
When(`I select Analysis and Ranking`, timeout, async function() {
    let page = this.page;
    const listData = new rankingTypeData(page);
    listData.rankingDataSelect();
    await page.waitForTimeout(2000);
})


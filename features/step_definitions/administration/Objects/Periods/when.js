const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { periodsTypeData } = require('../../../../components/administration/Objects/periods_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// OBS: Project
When(`I select Administration and select Objects and select Periods`, timeout, async function() {
    let page = this.page;
    const listData = new periodsTypeData(page);
    listData.peroidsOBSLink();
    await page.waitForTimeout(2000);
})


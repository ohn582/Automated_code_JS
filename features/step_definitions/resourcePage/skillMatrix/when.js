const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { resourceTypeData } = require('../../../components/resource_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Assingnments
When(`I select Rescource and Skill Matrix`, timeout, async function() {
    let page = this.page;
    const listData = new resourceTypeData(page);
    listData.matrixDataSelect();
    await page.waitForTimeout(2000);
})

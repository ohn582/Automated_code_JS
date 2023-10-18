const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { BaselineData } = require('../../../../components/administration/Other/baseline_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Baseline List`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineData(page);
    listData.otherListLink();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Baseline`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineData(page);
    listData.listBaseTypeAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Baseline datas`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineData(page);
    listData.listBaseTypeSelectData();
    await page.waitForTimeout(2000);
})


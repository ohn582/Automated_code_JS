const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { financialTypeData } = require('../../../components/Assignment/Financial/financial_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Resource
When(`I select Assignment`, timeout, async function() {
    let page = this.page;
    const listData = new financialTypeData(page);
    listData.assignmentlLink();
    await page.waitForTimeout(2000);
})

When(`I select Financial`, timeout, async function() {
    let page = this.page;
    const listData = new financialTypeData(page);
    listData.financialLink();
    await page.waitForTimeout(2000);
})




When(`I select check box in Financial A`, timeout, async function() {
    let page = this.page;
    const listData = new financialTypeData(page);
    listData.financialMultipleBox_A();
    await page.waitForTimeout(2000);
})

When(`I select check box in Financial B`, timeout, async function() {
    let page = this.page;
    const listData = new financialTypeData(page);
    listData.financialMultipleBox_B();
    await page.waitForTimeout(2000);
})
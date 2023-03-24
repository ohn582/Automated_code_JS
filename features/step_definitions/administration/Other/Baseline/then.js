const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { BaselinePage } = require('../../../../page-objects/administration/Other/BaselinesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Baseline tes1`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    await listData.listBaselineWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Baseline tes2`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    await listData.listBaselineWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Baseline tes3`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    await listData.listBaselineWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Baseline tes1`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    listData.baselineReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Baseline tes2`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    listData.baselineReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Baseline tes3`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    listData.baselineReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Baseline data`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    await listData.listBaselineDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Baseline`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    await listData.listBaselineSave();
    await page.waitForTimeout(2000);
})

Then(`Then I clicked Reload button in Baseline`, timeout, async function() {
    let page = this.page;
    const listData = new BaselinePage(page);
    await listData.listBaselineReload();
    await page.waitForTimeout(2000);
})

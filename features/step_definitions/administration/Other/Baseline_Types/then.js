const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { BaselineTypePage } = require('../../../../page-objects/administration/Other/BaselineTypePage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Baseline Types tes1`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    await listData.listBTWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Baseline Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    await listData.listBTWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Baseline Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    await listData.listBTWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Baseline Types tes1`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    listData.bTReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Baseline Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    listData.bTReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Baseline Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    listData.bTReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Baseline Types data`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    await listData.listBTDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Baseline Types`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    await listData.listBTSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Baseline Types data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new BaselineTypePage(page);
    await listData.listBTReload();
    await page.waitForTimeout(2000);
})

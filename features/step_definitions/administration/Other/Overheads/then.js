const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { OverheadsPage } = require('../../../../page-objects/administration/Other/OverheadsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Overheads tes1`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    await listData.listOverWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Overheads tes2`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    await listData.listOverWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Overheads tes3`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    await listData.listOverWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Overheads tes1`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    listData.overReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Overheads tes2`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    listData.overReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Overheads tes3`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    listData.overReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Overheads Types data`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    await listData.listOverDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Overheads Types`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    await listData.listOverSave();
    await page.waitForTimeout(2000);
})

Then(`Then I clicked Reload button in Overheads Types`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsPage(page);
    await listData.listOverReload();
    await page.waitForTimeout(2000);
})

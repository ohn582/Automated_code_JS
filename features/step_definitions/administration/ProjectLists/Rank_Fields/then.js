const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { rfPage } = require('../../../../page-objects/administration/Project_Lists/rankFieldsPage');
const { timeout } = require('../../../../test.config').test;


// List Rank Fields
Then(`I typed a new Rank Fields tes1`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.listRFWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Rank Fields tes2`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.listRFWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Rank Fields tes3`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.listRFWriteC();
    await page.waitForTimeout(2000);
})





// Rank Fields update
Then(`I Re-Typed a Rank Fields tes1`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.rfReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a Rank Fields tes2`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.rfReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a Rank Fields tes3`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.rfReTypeDataC();
    await page.waitForTimeout(2000);
})






//Rank Fields delete
Then(`I delete the Rank Fields data`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.listRFDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Rank Fields`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.listRFSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Rank Fields by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new rfPage(page);
    await listData.listRFReload();
    await page.waitForTimeout(2000);
})

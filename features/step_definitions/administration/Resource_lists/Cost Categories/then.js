const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { ccPage } = require('../../../../page-objects/administration/Resource_Lists/ccPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Cost Categories tes1`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    await listData.listCCWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    await listData.listCCWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    await listData.listCCWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Cost Categories tes1`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    listData.ccReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    listData.ccReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    listData.ccReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Cost Categories data`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    await listData.listCCDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Cost Categories`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    await listData.listCCSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Cost Categories`, timeout, async function() {
    let page = this.page;
    const listData = new ccPage(page);
    await listData.listCCReload();
    await page.waitForTimeout(2000);
})

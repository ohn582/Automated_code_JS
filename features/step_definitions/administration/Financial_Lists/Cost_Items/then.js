const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { costItemsPage } = require('../../../../page-objects/administration/Financial_Lists/costItemsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Cost Items`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    await listData.listCIWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Items tes2`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    await listData.listCIWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Items tes3`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    await listData.listCIWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Cost Items`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    listData.costItemsReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Items tes2`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    listData.costItemsReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Items tes3`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    listData.costItemsReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Cost Items data`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    await listData.listCIDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Cost Items`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    await listData.listCISave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Cost Items`, timeout, async function() {
    let page = this.page;
    const listData = new costItemsPage(page);
    await listData.listCIReload();
    await page.waitForTimeout(2000);
})

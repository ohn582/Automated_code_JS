const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { EventTypePage } = require('../../../../page-objects/administration/Other/EventTypesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Event Type: Create
Then(`I typed a new Event Types tes1`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    await listData.listETWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Event Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    await listData.listETWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Event Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    await listData.listETWriteC();
    await page.waitForTimeout(2000);
})



// Event Type: Update
Then(`I Re-Typed a new Event Types tes1`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    listData.etReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Event Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    listData.etReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Event Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    listData.etReTypeDataC();
    await page.waitForTimeout(2000);
})




// Event Type: Delete
Then(`I delete the Event Types data`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    await listData.listETDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Event Types`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    await listData.listETSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Event Types data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypePage(page);
    await listData.listETReload();
    await page.waitForTimeout(2000);
})


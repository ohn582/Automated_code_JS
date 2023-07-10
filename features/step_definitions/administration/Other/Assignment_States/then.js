const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { AssignmentStatePage } = require('../../../../page-objects/administration/Other/AssignmentStatesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Assignment States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    await listData.listASWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Assignment States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    await listData.listASWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Assignment States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    await listData.listASWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Assignment States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    listData.asReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Assignment States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    listData.asReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Assignment States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    listData.asReTypeDataC();
    await page.waitForTimeout(2000);
})




// Assignment States: Delete
Then(`I delete the Assignment States data`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    await listData.listASDelete();
    await page.waitForTimeout(2000);
})

// Assignment States: Save
Then(`I clicked save button in Assignment States`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    await listData.listASSave();
    await page.waitForTimeout(2000);
})

// Assignment States: Reload
Then(`I verify the Assignment States data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatePage(page);
    await listData.listASReload();
    await page.waitForTimeout(2000);
})

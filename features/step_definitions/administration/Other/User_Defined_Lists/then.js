const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { UserDefinedPage } = require('../../../../page-objects/administration/Other/UDLPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I create a new ULD name`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.nameUDLWrite();
    await page.waitForTimeout(2000);
})




Then(`I typed a new User Defined Lists tes1`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new User Defined Lists tes2`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new User Defined Lists tes3`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new User Defined Lists tes1`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    listData.udl_ReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new User Defined Lists tes2`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    listData.udl_ReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new User Defined Lists tes3`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    listData.udl_ReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the User Defined Lists data`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLDelete();
    await page.waitForTimeout(2000);
})

Then(`I select save in the UDLD Team`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLSave();
    await page.waitForTimeout(2000);
})

Then(`Then I clicked Reload button in User Defined Lists`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLReload();
    await page.waitForTimeout(2000);
})

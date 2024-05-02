const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { UserDefinedPage } = require('../../../../page-objects/administration/Other/UDLPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// User Defined Lists: Create
Then(`I create a new UDL name A`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.nameUDLWriteA();
    await page.waitForTimeout(2000);
})

Then(`I create a new multiple User Defined Lists A`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.addDefinedListDetailsA();
    await page.waitForTimeout(2000);
})


Then(`I create a new UDL name B`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.nameUDLWriteB();
    await page.waitForTimeout(2000);
})

Then(`I create a new multiple User Defined Lists B`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.addDefinedListDetailsB();
    await page.waitForTimeout(2000);
})

Then(`I create a new UDL name C`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.nameUDLWriteC();
    await page.waitForTimeout(2000);
})

Then(`I create a new multiple User Defined Lists C`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.addDefinedListDetailsC();
    await page.waitForTimeout(2000);
})








// Categories: Update
Then(`I Re-Typed a new User Defined Lists Field 31`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    listData.udl_ReTypeDataA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new User Defined Lists Field 144`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    listData.udl_ReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new User Defined Lists Cost Notes`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    listData.udl_ReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I Delete all User Defined Lists Field 31`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLDeleteA();
    await page.waitForTimeout(2000);
})

Then(`I Delete all User Defined Lists Field 144`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLDeleteB();
    await page.waitForTimeout(2000);
})

Then(`I Delete all User Defined Lists Cost Notes`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedPage(page);
    await listData.listUDLDeleteC();
    await page.waitForTimeout(2000);
})







Then(`I select save in the UDL Data`, timeout, async function() {
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

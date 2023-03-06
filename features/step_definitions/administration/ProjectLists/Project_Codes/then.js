const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { pcPage } = require('../../../../page-objects/administration/Project_Lists/pcPage');
const { timeout } = require('../../../../test.config').test;

// List Project Codes
Then(`I typed a new Project Codes tes1`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.listPCWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Project Codes tes2`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.listPCWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Project Codes tes3`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.listPCWriteC();
    await page.waitForTimeout(2000);
})





//update
Then(`I Re-Typed a new Project Codes`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.pcReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Project Codes tes2`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.pcReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Project Codes tes3`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.pcReTypeDataC();
    await page.waitForTimeout(2000);
})






Then(`I delete the Project Codes data`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.listPCDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Project Codes`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.listPCSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload button for Project Codes`, timeout, async function () {
    let page = this.page;
    const listData = new pcPage(page);
    await listData.listPCReload();
    await page.waitForTimeout(2000);
})

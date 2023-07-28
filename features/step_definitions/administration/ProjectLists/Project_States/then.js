const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { psPage } = require('../../../../page-objects/administration/Project_Lists/projectStatesPage');
const { timeout } = require('../../../../test.config').test;


// List Project States
Then(`I typed a new Project States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.listPSWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Project States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.listPSWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Project States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.listPSWriteC();
    await page.waitForTimeout(2000);
})





// Project States update
Then(`I Re-Typed a Project States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.psReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a Project States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.psReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a Project States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.psReTypeDataC();
    await page.waitForTimeout(2000);
})






//Project States delete
Then(`I delete the Project States data`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.listPSDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Project States`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.listPSSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Project States by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new psPage(page);
    await listData.listPSReload();
    await page.waitForTimeout(2000);
})

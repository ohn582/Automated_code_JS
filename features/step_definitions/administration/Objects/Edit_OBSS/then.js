const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { editOBSPage } = require('../../../../page-objects/administration/Objects/editOBSPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// OBS: Project
Then(`I type a new name in the new Sibling and child`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.projOBStypeSibling();
    await page.waitForTimeout(2000);
})

Then(`I type a new name in the new Sibling and child B`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.projOBStypeSiblingB();
    await page.waitForTimeout(2000);
})

Then(`I type a new name in the new Sibling and child C`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.projOBStypeSiblingC();
    await page.waitForTimeout(2000);
})








//Update
Then(`I Select a created Child in project OBS & re-write`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.adminOBSProjChildData();
    await page.waitForTimeout(2000);
})

Then(`I Select Add Sibling in project OBS`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.projOBSSiblingAdd();
    await page.waitForTimeout(2000);
})

Then(`I Select Add Child OBS in project`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.projOBSChildAdd();
    await page.waitForTimeout(2000);
})

Then(`I retype a new name under Secure node under extention`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.projOBSRetypeExtention();
    await page.waitForTimeout(2000);
})










// Edit OBS
Then(`I save the OBSdata`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.obsSaveBtn();
    await page.waitForTimeout(2000);
})

Then(`I verify the Edit OBSs data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.projOBSReload();
    await page.waitForTimeout(2000);
})

Then(`I select delete in the OBS data`, timeout, async function() {
    let page = this.page;
    const listData = new editOBSPage(page);
    listData.adminPeriodsDeleteBtn();
    await page.waitForTimeout(2000);
})

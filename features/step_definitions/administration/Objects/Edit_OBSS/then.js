const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { administrationPage } = require('../../../../page-objects/administrationPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// OBS: Project
Then(`I type a new name in the new Sibling`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBStypeSibling();
    await page.waitForTimeout(2000);
})

Then(`I type a new name in the new child A`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBSRetypeChildA();
    await page.waitForTimeout(2000);
})

Then(`I type a new name in the new child B`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBSRetypeChildB();
    await page.waitForTimeout(2000);
})


Then(`I Select a created Child in project OBS & re-write`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminOBSProjChildData();
    await page.waitForTimeout(2000);
})

Then(`I Select Add Sibling in project OBS`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBSSiblingAdd();
    await page.waitForTimeout(2000);
})

Then(`I Select Add Child OBS in project`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBSChildAdd();
    await page.waitForTimeout(2000);
})

Then(`I retype a new name under Secure node under extention`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBSRetypeExtention();
    await page.waitForTimeout(2000);
})

Then(`I save the data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBSSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload Project OBS`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBSReload();
    await page.waitForTimeout(2000);
})



// Edit OBS
Then(`I select delete in the OBS data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsDeleteBtn();
    await page.waitForTimeout(2000);
})

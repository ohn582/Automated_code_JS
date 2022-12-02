const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { administrationPage } = require('../../page-objects/administrationPage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

// OBS: Project
Then(`I type a new name in the new Sibling`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.projOBSRetypeSibling();
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




//Periods
Then(`I type a new Dates in the Periods Details A`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsType();
    await page.waitForTimeout(2000);
})

Then(`I type a new Dates in the Periods Details B`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsTypeB();
    await page.waitForTimeout(2000);
})

Then(`I type a new Dates in the Periods Details C`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsTypeC();
    await page.waitForTimeout(2000);
})

Then(`I type a new Dates in the Periods Details D`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsTypeD();
    await page.waitForTimeout(2000);
})

Then(`I type a new Dates in the Periods Details E`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsTypeE();
    await page.waitForTimeout(2000);
})

Then(`I type a new Dates in the Periods Details F`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsTypeF();
    await page.waitForTimeout(2000);
})

Then(`I save the data in project data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload Project`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsReload();
    await page.waitForTimeout(2000);
})



Then(`I Re-type a old Dates in the Periods Details A`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsReTypeA();
    await page.waitForTimeout(2000);
})

Then(`I Re-type a old Dates in the Periods Details B`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsReTypeB();
    await page.waitForTimeout(2000);
})

Then(`I Re-type a old Dates in the Periods Details C`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsReTypeC();
    await page.waitForTimeout(2000);
})

Then(`I Re-type a old Dates in the Periods Details D`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsReTypeD();
    await page.waitForTimeout(2000);
})

Then(`I Re-type a old Dates in the Periods Details E`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsReTypeE();
    await page.waitForTimeout(2000);
})

Then(`I Re-type a old Dates in the Periods Details F`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsReTypeF();
    await page.waitForTimeout(2000);
})


Then(`I select a random check boxes A`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsDeleteA();
    await page.waitForTimeout(2000);
})

Then(`I select a random check boxes B`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsDeleteB();
    await page.waitForTimeout(2000);
})


Then(`I Delete the period data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPeriodsDeleteBtn();
    await page.waitForTimeout(2000);
})




//Pulse
Then(`I type a new name and Description in the Pulse data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPulseTypeA();
    await page.waitForTimeout(2000);
})

Then(`I type a new name and Description in the Pulse dataB`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPulseTypeB();
    await page.waitForTimeout(2000);
})

Then(`I type a new name and Description in the Pulse dataC`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.adminPulseTypeC();
    await page.waitForTimeout(2000);
})

Then(`I select add to th Pulse data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationPage(page);
    listData.pulseDataBtn();
    await page.waitForTimeout(2000);
})
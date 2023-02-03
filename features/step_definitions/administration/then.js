const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { administrationPage } = require('../../page-objects/administrationPage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

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
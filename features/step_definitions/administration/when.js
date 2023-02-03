const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../page-objects/HomePage');
const { administrationTypeData } = require('../../components/administration_page.component');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

//Views
When(`I select Administration and select Views`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSView();
    await page.waitForTimeout(2000);
})

When(`I select a name in the views data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSViewData();
    await page.waitForTimeout(2000);
})

When(`I select Add button in Views Details`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSViewDetailsAdd();
    await page.waitForTimeout(2000);
})





//Periods
When(`I select Administration and select Periods`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminPeriodsSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add button in Periods Details`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminPeriodsAdd();
    await page.waitForTimeout(2000);
})




//Pulse
When(`I select Administration and select Pulse`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminPulseSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add button in Pulse Details`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminPulsesAdd();
    await page.waitForTimeout(2000);
})

// When(`I select Add button in Pulse DetailsB`, timeout, async function() {
//     let page = this.page;
//     const listData = new administrationTypeData(page);
//     listData.adminPulsesAddB();
//     await page.waitForTimeout(2000);
// })

// When(`I select Add button in Pulse DetailsC`, timeout, async function() {
//     let page = this.page;
//     const listData = new administrationTypeData(page);
//     listData.adminPulsesAddC();
//     await page.waitForTimeout(2000);
// })
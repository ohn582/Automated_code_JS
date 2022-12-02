const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../page-objects/HomePage');
const { administrationTypeData } = require('../../components/administration_page.component');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

// When(`I Hover over the {string} icon and Click on {string}`, timeout, async function (nav, link) {
//     let page = this.page;
//     const homePage = new HomePage(page);
//     await homePage.click_navigation_link(nav, link)
//     await page.waitForTimeout(7000)
// })

// OBS: Project
When(`I select a name in the data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSProjData();
    await page.waitForTimeout(2000);
})

When(`I select SIBLING TEST 1 in project data`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSRecentSibling();
    await page.waitForTimeout(2000);
})

When(`I select dropdown from Secure node under projects OBS`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSProjDataDropdown();
    await page.waitForTimeout(2000);
})

When(`I select Administration and select Edit OBSs`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSProjectLink();
    await page.waitForTimeout(2000);
})




// When(`I Select Add Child in project OBS`, timeout, async function() {
//     let page = this.page;
//     const listData = new administrationTypeData(page);
//     listData.adminOBSProjDataDropdown();
//     await page.waitForTimeout(2000);
// })



When(`I select Add button in Project OBS`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.projOBSAdd();
    await page.waitForTimeout(2000);
})



// OBS: Rescource
When(`I click the drop down menu`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSResDrop();
    await page.waitForTimeout(2000);
})






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
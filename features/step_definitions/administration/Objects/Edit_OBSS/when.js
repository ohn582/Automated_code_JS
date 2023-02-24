const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { administrationTypeData } = require('../../../../components/administration/administration_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// OBS: Project
When(`I select Administration and select Objects and select Edit OBSs`, timeout, async function() {
    let page = this.page;
    const listData = new administrationTypeData(page);
    listData.adminOBSProjLink();
    await page.waitForTimeout(2000);
})

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
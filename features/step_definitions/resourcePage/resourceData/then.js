const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { resourceDataPage } = require('../../../page-objects/resource/data/resourceDataPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project
Then(`I create a new Data for Rescource Data A`, timeout, async function() {
    let page = this.page;
    const listData = new resourceDataPage(page);
    listData.resourceCreateData();
    await page.waitForTimeout(2000);
})

Then(`I create a new Data for Rescource Data B`, timeout, async function() {
    let page = this.page;
    const listData = new resourceDataPage(page);
    listData.resourceCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a new Data for Rescource Data C`, timeout, async function() {
    let page = this.page;
    const listData = new resourceDataPage(page);
    listData.resourceCreateDataC();
    await page.waitForTimeout(2000);
})

// //verifying the data 
// Then(`I verify the Resource Data by re-loging admin account`, timeout, async function() {
//     let page = this.page;
//     const listData = new resourceDataPage(page);
//     listData.resourceReload();
//     await page.waitForTimeout(2000);
// })
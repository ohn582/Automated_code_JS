const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { capacityPage } = require('../../../page-objects/resource/capacity/capacityPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Create
Then(`I create a new Data for Capacity A`, timeout, async function() {
    let page = this.page;
    const listData = new capacityPage(page);
    listData.capacityCreateDataA();
    await page.waitForTimeout(2000);
})

Then(`I create a new Data for Capacity B`, timeout, async function() {
    let page = this.page;
    const listData = new capacityPage(page);
    listData.capacityCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a new Data for Capacity C`, timeout, async function() {
    let page = this.page;
    const listData = new capacityPage(page);
    listData.capacityCreateDataC();
    await page.waitForTimeout(2000);
})



Then(`Select Save Button for Rescource Capacity`, timeout, async function() {
    let page = this.page;
    const listData = new capacityPage(page);
    listData.resourceSaveData();
    await page.waitForTimeout(2000);
})
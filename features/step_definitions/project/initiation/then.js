const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { initiationPage } = require('../../../page-objects/project/initiation/initiationPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Data Create
Then(`I create a Project Initiation A`, timeout, async function() {
    let page = this.page;
    const listData = new initiationPage(page);
    listData.initiationAddDataA();
    await page.waitForTimeout(2000);
})

Then(`I create a Project Initiation B`, timeout, async function() {
    let page = this.page;
    const listData = new initiationPage(page);
    listData.initiationAddDataB();
    await page.waitForTimeout(2000);
})




//Project Data Update
Then(`I updated Initiation Data A`, timeout, async function() {
    let page = this.page;
    const listData = new initiationPage(page);
    listData.initiationUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I updated Initiation Data B`, timeout, async function() {
    let page = this.page;
    const listData = new initiationPage(page);
    listData.initiationUpdateB();
    await page.waitForTimeout(2000);
})



// Project Data Delete
Then(`I Delete Initiation Data A`, timeout, async function() {
    let page = this.page;
    const listData = new initiationPage(page);
    listData.initiationDeleteA();
    await page.waitForTimeout(1000);
})

Then(`I Delete Initiation Data B`, timeout, async function() {
    let page = this.page;
    const listData = new initiationPage(page);
    listData.initiationDeleteB();
    await page.waitForTimeout(1000);
})




//Project Data Delete
Then(`I select Initiation Delete Button`, timeout, async function() {
    let page = this.page;
    const listData = new initiationPage(page);
    listData.projectDelete();
    await page.waitForTimeout(2000);
})

//Project Reset
Then(`I verify the Project Initiation by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new initiationPage(page);
    listData.initiationDataRefresh();
    await page.waitForTimeout(3000);
})

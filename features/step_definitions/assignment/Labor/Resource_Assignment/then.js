const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { resourcePage } = require('../../../../page-objects/assignment/labor/resourcePage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Labor Data Create
Then(`I Create Rescource Assignment Data for labor A`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.laborCreateDataA();
    await page.waitForTimeout(2000);
})

Then(`I Create Rescource Assignment Data for labor B`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.laborCreateDataB();
    await page.waitForTimeout(2000);
})



//Labor Data Update
Then(`I Updated my Rescource Assignment Data for labor A`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.laborUpdateDataA();
    await page.waitForTimeout(2000);
})

Then(`I Updated my Rescource Assignment Data for labor B`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.laborUpdateDataB();
    await page.waitForTimeout(2000);
})



//Labor Data Delete
Then(`I delete Labor Data A`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.laborDeleteDataA();
    await page.waitForTimeout(2000);
})

Then(`I delete Labor Data B`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.laborDeleteDataB();
    await page.waitForTimeout(2000);
})





//Assignment Labor save
Then(`I select Save button for Labor Data`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.laborSave();
    await page.waitForTimeout(2000);
})

//Labor Reset
Then(`I verify the Labor data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new resourcePage(page);
    listData.laborReload();
    await page.waitForTimeout(3000);
})

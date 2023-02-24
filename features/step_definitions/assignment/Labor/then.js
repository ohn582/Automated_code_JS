const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { laborPage } = require('../../../page-objects/assignmentPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Data Create
Then(`I Create Rescource Assignment Data for labor`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborCreateData();
    await page.waitForTimeout(2000);
})

//Project Data Create B
Then(`I Create Rescource Assignment Data for labor B`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I Create Rescource Assignment Data for labor C`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborCreateDataC();
    await page.waitForTimeout(2000);
})

Then(`I Create Rescource Assignment Data for labor D`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborCreateDataD();
    await page.waitForTimeout(2000);
})





//Project Data Update
Then(`I Updated my Rescource Assignment Data for labor`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborUpdateData();
    await page.waitForTimeout(2000);
})

Then(`I Updated my Rescource Assignment Data for labor B`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborUpdateDataB();
    await page.waitForTimeout(2000);
})

Then(`I Updated my Rescource Assignment Data for labor B`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborUpdateDataB();
    await page.waitForTimeout(2000);
})






//Assignment Labor save
Then(`I select Save button`, timeout, async function() {
    let page = this.page;
    const listData = new laborPage(page);
    listData.laborSave();
    await page.waitForTimeout(2000);
})
const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { skillPage } = require('../../../../page-objects/assignment/labor/skillPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Labor Data Create
Then(`I Create Skill Assignment Data for labor A`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillCreateDataA();
    await page.waitForTimeout(2000);
})

Then(`I Create Skill Assignment Data for labor B`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I Create Skill Assignment Data for labor C`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillCreateDataC();
    await page.waitForTimeout(2000);
})






//Labor Data Update
Then(`I Updated my Skill Assignment Data for labor A`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillUpdateDataA();
    await page.waitForTimeout(2000);
})

Then(`I Updated my Skill Assignment Data for labor B`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillUpdateDataB();
    await page.waitForTimeout(2000);
})



//Labor Data Delete
Then(`I delete Skill Assignment Data A`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillDeleteDataA();
    await page.waitForTimeout(2000);
})

Then(`I delete Skill Assignment Data B`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillDeleteDataB();
    await page.waitForTimeout(2000);
})





//Assignment Labor save
Then(`I select Save button for Skill Assignment Data`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillSave();
    await page.waitForTimeout(2000);
})

//Labor Reset
Then(`I verify the Skill Assignment data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new skillPage(page);
    listData.skillReload();
    await page.waitForTimeout(3000);
})

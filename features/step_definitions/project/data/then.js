const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { projectDataPage } = require('../../../page-objects/project/data/projectDataPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Data Create
Then(`I create a Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectAddDataA();
    await page.waitForTimeout(2000);
})

Then(`I create a Project Data B`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectAddDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a Project Data C`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectAddDataC();
    await page.waitForTimeout(2000);
})




//Project Data Update
Then(`I Re-Type Diffrent Name A`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Type Diffrent Name B`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectUpdateB();
    await page.waitForTimeout(2000);
})
Then(`I Re-Type Diffrent Name C`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectUpdateC();
    await page.waitForTimeout(2000);
})





//Project Data Delete
Then(`I select Project Delete Button`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectDelete();
    await page.waitForTimeout(2000);
})

//Project Data Save
Then(`Select Save Button for Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectSave();
    await page.waitForTimeout(2000);
})

//Project Reset
Then(`I verify the Project Data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new projectDataPage(page);
    listData.projectDataRefresh();
    await page.waitForTimeout(3000);
})

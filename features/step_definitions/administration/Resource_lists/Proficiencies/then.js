const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { ProficienciesPage } = require('../../../../page-objects/administration/Resource_Lists/ProficienciesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Proficiencies`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    await listData.listProficienciesWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Proficiencies tes2`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    await listData.listProficienciesWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Proficiencies tes3`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    await listData.listProficienciesWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Proficiencies`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    listData.proficienciesReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Proficiencies tes2`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    listData.proficienciesReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Proficiencies tes3`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    listData.proficienciesReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Proficiencies data`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    await listData.listProficienciesDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Proficiencies`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    await listData.listProficienciesSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Proficiencies`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesPage(page);
    await listData.listProficienciesReload();
    await page.waitForTimeout(2000);
})

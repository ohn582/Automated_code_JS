const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { ScenarioStatusPage } = require('../../../../page-objects/administration/Other/ScenarioStatusPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Scenario Status tes1`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    await listData.listSS_WriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Scenario Status tes2`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    await listData.listSS_WriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Scenario Status tes3`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    await listData.listSS_WriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Scenario Status tes1`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    listData.ss_ReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Scenario Status tes2`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    listData.ss_ReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Scenario Status tes3`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    listData.ss_ReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Scenario Status data`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    await listData.listSS_Delete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Scenario Status`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    await listData.listSS_Save();
    await page.waitForTimeout(2000);
})

Then(`I verify the Scenario Status data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new ScenarioStatusPage(page);
    await listData.listSS_Reload();
    await page.waitForTimeout(2000);
})

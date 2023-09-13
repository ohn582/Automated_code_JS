const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { pmPage } = require('../../../../page-objects/administration/Project_Lists/phasesMilestonesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Create
Then(`I typed a new Phases Milestones tes1`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    await listData.pmCreateData();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Phases Milestones tes2`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    await listData.pmCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Phases Milestones tes3`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    await listData.pmCreateDataC();
    await page.waitForTimeout(2000);
})






// Update
Then(`I Re-Typed a new Phases Milestones tes1`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    listData.pmReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Phases Milestones tes2`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    listData.pmReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Phases Milestones tes3`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    listData.pmReTypeDataC();
    await page.waitForTimeout(2000);
})




// Delete
Then(`I delete the Phases Milestones data`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    await listData.pmDeleteButton();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Phases Milestones`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    await listData.pmSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Phases Milestones by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new pmPage(page);
    await listData.pmReload();
    await page.waitForTimeout(2000);
})

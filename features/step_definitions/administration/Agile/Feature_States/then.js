const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { FeatureStatesPage } = require('../../../../page-objects/administration/Agile/FeatureStatesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Feature States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    await listData.listFSWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Feature States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    await listData.listFSWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Feature States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    await listData.listFSWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Feature States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    listData.featureStateReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Feature States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    listData.featureStateReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Feature States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    listData.featureStateReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Feature States data`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    await listData.listFSDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Feature States`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    await listData.listFSSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Feature States by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureStatesPage(page);
    await listData.listFSReload();
    await page.waitForTimeout(2000);
})

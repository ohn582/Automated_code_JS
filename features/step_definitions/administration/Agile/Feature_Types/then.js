const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { FeatureTypesPage } = require('../../../../page-objects/administration/Agile/FeatureTypesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Feature Types tes1`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    await listData.listFTWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Feature Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    await listData.listFTWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Feature Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    await listData.listFTWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Feature Types`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    listData.featureTypesReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Feature Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    listData.featureTypesReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Feature Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    listData.featureTypesReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Feature Types data`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    await listData.listFTDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Feature Types`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    await listData.listFTSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Feature Types`, timeout, async function() {
    let page = this.page;
    const listData = new FeatureTypesPage(page);
    await listData.listFTReload();
    await page.waitForTimeout(2000);
})

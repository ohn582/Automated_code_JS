const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { formsPage } = require('../../../../page-objects/administration/ViewFilter/FormsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Forms: Create
Then(`I create multiple names in the Forms Data A`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formDataA();
    await page.waitForTimeout(2000);
})

Then(`I create multiple names in the Forms Data B`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formDataB();
    await page.waitForTimeout(2000);
})

Then(`I create multiple names in the Forms Data C`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formDataC();
    await page.waitForTimeout(2000);
})



// Forms: Update
Then(`I re-type names in the Forms Data A`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I re-type names in the Forms Data B`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I re-type names in the Forms Data C`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formReTypeDataC();
    await page.waitForTimeout(2000);
})






// Forms: Delete
Then(`I delete names in the Forms Data A`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formDeleteDataA();
    await page.waitForTimeout(2000);
})

Then(`I delete names in the Forms Data B`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formDeleteDataB();
    await page.waitForTimeout(2000);
})

Then(`I delete names in the Forms Data C`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formDeleteDataC();
    await page.waitForTimeout(2000);
})




//Forms: Save
Then(`I save the Forms data`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formSave();
    await page.waitForTimeout(2000);
})

Then(`I save the Forms data from Updates`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formSaveUpdate();
    await page.waitForTimeout(2000);
})





//Form: reload
Then(`I clicked reload in the Forms data`, timeout, async function() {
    let page = this.page;
    const listData = new formsPage(page);
    listData.formReload();
    await page.waitForTimeout(2000);
})

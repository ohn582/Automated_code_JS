const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { CostItemCategoriesPage } = require('../../../../page-objects/administration/Financial_Lists/CostItemCategoriesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Cost Item Categories`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    await listData.listCICWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Item Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    await listData.listCICWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Item Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    await listData.listCICWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Cost Item Categories`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    listData.costItemsCategoriesReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Item Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    listData.costItemsCategoriesReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Item Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    listData.costItemsCategoriesReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Cost Item Categories data`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    await listData.listCICDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Cost Item Categories`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    await listData.listCICSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Cost Item Categories by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new CostItemCategoriesPage(page);
    await listData.listCICReload();
    await page.waitForTimeout(2000);
})

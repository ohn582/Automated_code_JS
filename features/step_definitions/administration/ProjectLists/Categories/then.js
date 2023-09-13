const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { categoriesPage } = require('../../../../page-objects/administration/Project_Lists/categoriesPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Categories`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    await listData.listCategoriesWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    await listData.listCategoriesWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    await listData.listCategoriesWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Categories`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    listData.categoriesReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    listData.categoriesReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    listData.categoriesReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Categories data`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    await listData.listCategorieDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Categories`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    await listData.listCategorieSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Categories data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesPage(page);
    await listData.listCategorieReload();
    await page.waitForTimeout(2000);
})

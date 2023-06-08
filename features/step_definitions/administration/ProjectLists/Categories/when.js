const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { categoriesTypeData } = require('../../../../components/administration/ProjectLists/categories_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Categories Project List`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Categories`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesTypeData(page);
    listData.projectCategoriesLink();
    await page.waitForTimeout(2000);
})


When(`I select multiple Categories datas`, timeout, async function() {
    let page = this.page;
    const listData = new categoriesTypeData(page);
    listData.listCategoriesSelect();
    await page.waitForTimeout(2000);
})


const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { ProficienciesTypeData } = require('../../../../components/administration/Resource_Lists/proficiencies_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Proficiencies Resource Lists`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Proficiencies`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesTypeData(page);
    listData.listProficienciesSelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Proficiencies datas`, timeout, async function () {
    let page = this.page;
    const listData = new ProficienciesTypeData(page);
    listData.listProficienciesSelectData();
    await page.waitForTimeout(2000);
})


const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { skillsTypeData } = require('../../../../components/administration/Resource_Lists/skills_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Skills Resource Lists`, timeout, async function () {
    let page = this.page;
    const listData = new skillsTypeData(page);
    listData.projectListLink();
    await page.waitForTimeout(2000);
})

When(`I select Skills`, timeout, async function () {
    let page = this.page;
    const listData = new skillsTypeData(page);
    listData.listSkillsSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Skills`, timeout, async function () {
    let page = this.page;
    const listData = new skillsTypeData(page);
    listData.listSkillsAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Skills datas`, timeout, async function () {
    let page = this.page;
    const listData = new skillsTypeData(page);
    listData.listSkillsSelectData();
    await page.waitForTimeout(2000);
})


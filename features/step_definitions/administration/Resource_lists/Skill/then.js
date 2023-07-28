const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { SkillsPage } = require('../../../../page-objects/administration/Resource_Lists/SkillsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Skills`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    await listData.listSkillsWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Skills tes2`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    await listData.listSkillsWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Skills tes3`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    await listData.listSkillsWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Skills`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    listData.skillsReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Skills tes2`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    listData.skillsReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Skills tes3`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    listData.skillsReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Skills data`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    await listData.listSkillsDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Skills`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    await listData.listSkillsSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Skills by re-loging admin account`, timeout, async function () {
    let page = this.page;
    const listData = new SkillsPage(page);
    await listData.listSkillsReload();
    await page.waitForTimeout(2000);
})

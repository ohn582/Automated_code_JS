const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { skillMatrixPage } = require('../../../page-objects/resource/skill_matrix/skillMatrixPage');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Create
Then(`I create a new Data for Rescource Skill Matrix A`, timeout, async function() {
    let page = this.page;
    const listData = new skillMatrixPage(page);
    listData.resourceCreateDataA();
    await page.waitForTimeout(2000);
})

Then(`I create a new Data for Rescource Skill Matrix B`, timeout, async function() {
    let page = this.page;
    const listData = new skillMatrixPage(page);
    listData.resourceCreateDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a new Data for Rescource Skill Matrix C`, timeout, async function() {
    let page = this.page;
    const listData = new skillMatrixPage(page);
    listData.resourceCreateDataC();
    await page.waitForTimeout(2000);
})




//Skill Matrix Save:
Then(`Select Save Button for Rescource Skill Matrix`, timeout, async function() {
    let page = this.page;
    const listData = new skillMatrixPage(page);
    listData.skillMatrixSaveData();
    await page.waitForTimeout(2000);
})
const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { skillMatrixTypeData } = require('../../../components/resource/skill_matrix/skillMatrix_page.component');
const { timeout } = require('../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Project Assingnments
When(`I select Skill Matrix`, timeout, async function() {
    let page = this.page;
    const listData = new skillMatrixTypeData(page);
    listData.resourceSkillMatrixLink();
    await page.waitForTimeout(2000);
})
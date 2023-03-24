const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { RankFormPage } = require('../../../../page-objects/administration/Project_Lists/rankFormulasPage');
const { timeout } = require('../../../../test.config').test;


// List Project States
Then(`I typed a new Rank Formulas tes1`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.listRankFormWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Rank Formulas tes2`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.listRankFormWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Rank Formulas tes3`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.listRankFormWriteC();
    await page.waitForTimeout(2000);
})





// Project States update
Then(`I Re-Typed a new Rank Formulas tes1`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.rankFormReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Rank Formulas tes2`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.rankFormReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Rank Formulas tes3`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.rankFormReTypeDataC();
    await page.waitForTimeout(2000);
})






//Rank Formulas delete
Then(`I delete the Rank Formulas data`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.listRankFormDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Rank Formulas`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.listRankFormSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload button for Rank Formulas`, timeout, async function() {
    let page = this.page;
    const listData = new RankFormPage(page);
    await listData.listRankFormReload();
    await page.waitForTimeout(2000);
})

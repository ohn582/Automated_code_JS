const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { RankListsPage } = require('../../../../page-objects/administration/Project_Lists/rankListsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I create a new Rank List name tes1`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    await listData.nameRLWrite();
    await page.waitForTimeout(2000);
})

Then(`I create a new Rank List name tes2`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    await listData.nameRLWriteB();
    await page.waitForTimeout(2000);
})

Then(`I create a new Rank List name tes3`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    await listData.nameRLWriteC();
    await page.waitForTimeout(2000);
})





// Categories: Update
Then(`I Re-Typed a new Rank List Field 1`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    listData.rl_ReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Rank List Field 2`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    listData.rl_ReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Rank List Field 3`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    listData.rl_ReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Rank List data`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    await listData.listRLDelete();
    await page.waitForTimeout(2000);
})

Then(`I select save in the Rank List Data`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    await listData.listRLSave();
    await page.waitForTimeout(2000);
})

Then(`I select save in the Rank List from updated Data`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    await listData.listRLSaveClosed();
    await page.waitForTimeout(2000);
})

Then(`I verify the Rank Lists by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsPage(page);
    await listData.listRLReload();
    await page.waitForTimeout(2000);
})

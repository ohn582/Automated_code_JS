const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { sponsorsPage } = require('../../../../page-objects/administration/Project_Lists/sponsorsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Sponsor: Create
Then(`I typed a new Sponsors tes1`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    await listData.listSponsorsWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Sponsors tes2`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    await listData.listSponsorsWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Sponsors tes3`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    await listData.listSponsorsWriteC();
    await page.waitForTimeout(2000);
})



// Sponsor: Update
Then(`I Re-Typed a new Sponsor`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    listData.sponsorsReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Sponsor tes2`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    listData.sponsorsReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Sponsor tes3`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    listData.sponsorsReTypeDataC();
    await page.waitForTimeout(2000);
})




// Filters: Delete
Then(`I delete the Sponsor data`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    await listData.listSponsorDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Sponsors`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    await listData.listSponsorSave();
    await page.waitForTimeout(2000);
})

Then(`I verify the Sponsors by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new sponsorsPage(page);
    await listData.listSponsorReload();
    await page.waitForTimeout(2000);
})

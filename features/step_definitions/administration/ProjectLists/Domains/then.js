const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { domainPage } = require('../../../../page-objects/administration/Project_Lists/domainsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Domain: Create
Then(`I typed a new Domains tes1`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    await listData.listDomainWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Domains tes2`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    await listData.listDomainWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Domains tes3`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    await listData.listDomainWriteC();
    await page.waitForTimeout(2000);
})






// Domain: Update
Then(`I Re-Typed a new Domain`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    listData.domainReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Domain tes2`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    listData.domainReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Domain tes3`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    listData.domainReTypeDataC();
    await page.waitForTimeout(2000);
})




// Filters: Delete
Then(`I delete the Domain data`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    await listData.listDomainDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Domains`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    await listData.listDomainSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload button for Domains`, timeout, async function() {
    let page = this.page;
    const listData = new domainPage(page);
    await listData.listDomainReload();
    await page.waitForTimeout(2000);
})

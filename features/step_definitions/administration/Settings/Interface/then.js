const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { interPage } = require('../../../../page-objects/administration/Settings/Interface/interPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I Create a New Interface Data A`, timeout, async function() {
    let page = this.page;
    const listData = new interPage(page);
    await listData.listInterWriteA();
    await page.waitForTimeout(2000);
})

Then(`I Create a New Interface Data B`, timeout, async function() {
    let page = this.page;
    const listData = new interPage(page);
    await listData.listInterWriteB();
    await page.waitForTimeout(2000);
})

Then(`I Create a New Interface Data C`, timeout, async function() {
    let page = this.page;
    const listData = new interPage(page);
    await listData.listInterWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Delete
Then(`I delete my Algorithum Data for Assignment Allocation A`, timeout, async function() {
    let page = this.page;
    const listData = new interPage(page);
    await listData.listInterDeleteA();
    await page.waitForTimeout(2000);
})

Then(`I delete my Algorithum Data for Assignment Allocation B`, timeout, async function() {
    let page = this.page;
    const listData = new interPage(page);
    await listData.listInterDeleteB();
    await page.waitForTimeout(2000);
})

Then(`I delete my Algorithum Data for Assignment Allocation C`, timeout, async function() {
    let page = this.page;
    const listData = new interPage(page);
    await listData.listInterDeleteC();
    await page.waitForTimeout(2000);
})

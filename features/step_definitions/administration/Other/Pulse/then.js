const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { PulsePage } = require('../../../../page-objects/administration/Other/PulsePage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I created a new Pulse Data A`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseWriteDataA();
    await page.waitForTimeout(2000);
})

Then(`I created a new Pulse Data B`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseWriteDataB();
    await page.waitForTimeout(2000);
})

Then(`I created a new Pulse Data C`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseWriteDataC();
    await page.waitForTimeout(2000);
})




// Categories: Update
Then(`I Re-Type new Data A`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseReWriteDataA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Type new Data B`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseReWriteDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Type new Data C`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseReWriteDataC();
    await page.waitForTimeout(2000);
})










//Pulse Save
Then(`I clicked save button in Pulse`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Ok`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseSaveOk();
    await page.waitForTimeout(2000);
})

//Pulse: Delete
Then(`I delete Pulse Data`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseDelete();
    await page.waitForTimeout(2000);
})


Then(`I verify the Pulse data by re-loging admin account`, timeout, async function() {
    let page = this.page;
    const listData = new PulsePage(page);
    await listData.pulseReload();
    await page.waitForTimeout(2000);
})
const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { PulseTypesData } = require('../../../../components/administration/Other/pulse_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Pulse`, timeout, async function() {
    let page = this.page;
    const listData = new PulseTypesData(page);
    listData.otherListLink();
    await page.waitForTimeout(2000);
})

When(`I select a Pulse Data A`, timeout, async function() {
    let page = this.page;
    const listData = new PulseTypesData(page);
    listData.listPulseSelectDataA();
    await page.waitForTimeout(2000);
})

When(`I select a Pulse Data B`, timeout, async function() {
    let page = this.page;
    const listData = new PulseTypesData(page);
    listData.listPulseSelectDataB();
    await page.waitForTimeout(2000);
})

When(`I select a Pulse Data C`, timeout, async function() {
    let page = this.page;
    const listData = new PulseTypesData(page);
    listData.listPulseSelectDataC();
    await page.waitForTimeout(2000);
})
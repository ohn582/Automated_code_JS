const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { EventTypesData } = require('../../../../components/administration/Other/eventTypes_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Event Types List`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypesData(page);
    listData.otherListLink();
    await page.waitForTimeout(2000);
})

When(`I select Event Types`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypesData(page);
    listData.listEventTypeSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Event Types`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypesData(page);
    listData.listEventTypeAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Event Types datas`, timeout, async function() {
    let page = this.page;
    const listData = new EventTypesData(page);
    listData.listEventTypeSelectData();
    await page.waitForTimeout(2000);
})


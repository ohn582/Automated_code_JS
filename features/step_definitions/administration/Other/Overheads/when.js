const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { OverheadsTypeData } = require('../../../../components/administration/Other/overheads_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Overheads List`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsTypeData(page);
    listData.otherListLink();
    await page.waitForTimeout(2000);
})

When(`I select Overheads`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsTypeData(page);
    listData.listOverSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Overheads`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsTypeData(page);
    listData.listOverAdd();
    await page.waitForTimeout(2000);
})

When(`I select multiple Overheads datas`, timeout, async function() {
    let page = this.page;
    const listData = new OverheadsTypeData(page);
    listData.listOverSelectData();
    await page.waitForTimeout(2000);
})


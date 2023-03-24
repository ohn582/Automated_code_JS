const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { AssignmentStatesData } = require('../../../../components/administration/Other/assignmentStates_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and Assignment States List`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatesData(page);
    listData.otherListLink();
    await page.waitForTimeout(2000);
})

When(`I select Assignment States`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatesData(page);
    listData.listAS_Select();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Assignment States`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatesData(page);
    listData.listAS_Add();
    await page.waitForTimeout(2000);
})

When(`I select multiple Assignment States datas`, timeout, async function() {
    let page = this.page;
    const listData = new AssignmentStatesData(page);
    listData.listAS_SelectData();
    await page.waitForTimeout(2000);
})


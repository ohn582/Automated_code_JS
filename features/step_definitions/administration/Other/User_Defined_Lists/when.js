const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { UserDefinedData } = require('../../../../components/administration/Other/udl_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and User Defined Lists`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedData(page);
    listData.otherListLink();
    await page.waitForTimeout(2000);
})

When(`I select User Defined Lists`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedData(page);
    listData.listUDL_Select();
    await page.waitForTimeout(2000);
})

When(`I select ULD Team from a drpodown nav`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedData(page);
    listData.listUDL_Dropdown();
    await page.waitForTimeout(2000);
})

When(`I selected Field 3`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedData(page);
    listData.listUDL_DataSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the ULD Team`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedData(page);
    listData.listUDL_Add();
    await page.waitForTimeout(2000);
})

When(`I select multiple ULD Team datas`, timeout, async function() {
    let page = this.page;
    const listData = new UserDefinedData(page);
    listData.listUDL_SelectData();
    await page.waitForTimeout(2000);
})


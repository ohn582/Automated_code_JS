const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { partitionsTypeData } = require('../../../../components/administration/partitions_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);



// Lists Partitions
When(`I select Administration and select Objects`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsTypeData(page);
    listData.objectsLink();
    await page.waitForTimeout(2000);
})

When(`I select Object Partitions`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsTypeData(page);
    listData.partitionsLink();
    await page.waitForTimeout(2000);
})


//Object Partitions: Delete
When(`I select multiple datas for partition`, timeout, async function() {
    let page = this.page;
    const listData = new partitionsTypeData(page);
    listData.partitionsCheckBox();
    await page.waitForTimeout(2000);
})
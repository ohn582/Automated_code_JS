const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { RankListsData } = require('../../../../components/administration/ProjectLists/rankLists_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Categories
When(`I select Administration and select Rank List`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsData(page);
    listData.rlListLink();
    await page.waitForTimeout(2000);
})

When(`I select Rank Lists`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsData(page);
    listData.listRLSelect();
    await page.waitForTimeout(2000);
})

When(`I select multiple Rank List datas`, timeout, async function() {
    let page = this.page;
    const listData = new RankListsData(page);
    listData.listRLSelectData();
    await page.waitForTimeout(2000);
})


const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../../../page-objects/HomePage');
const { domainsTypeData } = require('../../../../components/administration/ProjectLists/domains_page.component');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Lists Domains
When(`I select Administration and select Project Lists`, timeout, async function() {
    let page = this.page;
    const listData = new domainsTypeData(page);
    listData.domainsLink();
    await page.waitForTimeout(2000);
})

When(`I select Domains`, timeout, async function() {
    let page = this.page;
    const listData = new domainsTypeData(page);
    listData.projectDomainsLink();
    await page.waitForTimeout(2000);
})

When(`I select multiple Domain datas`, timeout, async function() {
    let page = this.page;
    const listData = new domainsTypeData(page);
    listData.listDomainsSelect();
    await page.waitForTimeout(2000);
})


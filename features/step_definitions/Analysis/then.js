const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { analysisPage } = require('../../page-objects/analysisPage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

//Ranking Data Create
Then(`I type multiple Analysis data A`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisCreateTextDataA();
    await page.waitForTimeout(2000);
})

Then(`I type multiple Analysis data B`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisCreateTextDataB();
    await page.waitForTimeout(2000);
})

Then(`I type multiple Analysis data C`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisCreateTextDataC();
    await page.waitForTimeout(2000);
})

Then(`I type multiple Analysis data D`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisCreateTextDataD();
    await page.waitForTimeout(2000);
})






//Ranking Data Update
Then(`I re-type Analysis data A`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisCreateTextDataA();
    await page.waitForTimeout(2000);
})

Then(`I re-type Analysis data B`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisCreateTextDataB();
    await page.waitForTimeout(2000);
})

Then(`I re-type Analysis data C`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisCreateTextDataC();
    await page.waitForTimeout(2000);
})

Then(`I re-type Analysis data D`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisCreateTextDataD();
    await page.waitForTimeout(2000);
})





//Ranking Data Save
Then(`Select Save Analysis Button`, timeout, async function() {
    let page = this.page;
    const listData = new analysisPage(page);
    listData.rankAnalysisSaveData();
    await page.waitForTimeout(2000);
})
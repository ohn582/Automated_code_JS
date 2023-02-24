const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { adminListPage } = require('../../../page-objects/adminListPage');
const { timeout } = require('../../../test.config').test;



setDefaultTimeout(60 * 1000);



// List Domains
Then(`I typed a new Domains tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listDomainWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Domains tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listDomainWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Domains tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listDomainWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Domain tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listDomainUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Domain tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listDomainUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Domain data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listDomainDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Domains`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listDomainSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload button for Domains`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listDomainReload();
    await page.waitForTimeout(2000);
})






// List Sponsors
Then(`I typed a new Sponsors tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listSponsorWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Sponsors tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listSponsorWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Sponsors tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listSponsorWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Sponsor tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listSponsorUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Sponsor tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listSponsorUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Sponsor data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listSponsorDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Sponsors`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listSponsorSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload button for Sponsors`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listSponsorReload();
    await page.waitForTimeout(2000);
})





// List Categories
Then(`I typed a new Categories tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCategorieWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCategorieWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCategorieWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCategorieUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCategorieUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Categories data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCategorieDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCategorieSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCategorieReload();
    await page.waitForTimeout(2000);
})











// List Project Codes
Then(`I typed a new Project Codes tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPCWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Project Codes tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPCWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Project Codes tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPCWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Project Codes tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPCUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Project Codes tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPCUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Project Codes data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPCDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Project Codes`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPCSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload button for Project Codes`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPCReload();
    await page.waitForTimeout(2000);
})











// List Project States
Then(`I typed a new Project States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Project States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Project States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a Project States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a Project States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I select tes1 in the Project States in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSDelete();
    await page.waitForTimeout(2000);
})

Then(`I delete the Project States data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Project States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked reload button for Project States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listPSReload();
    await page.waitForTimeout(2000);
})











// List Countries
Then(`I typed a new Countries tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCountWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Countries tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCountWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Countries tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCountWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Countrie tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCountUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Countrie tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCountUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Countries data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCountDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Countries`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCountSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Countries`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCountReload();
    await page.waitForTimeout(2000);
})








// List locations
Then(`I typed a new locations tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listLocWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new locations tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listLocWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new locations tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listLocWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new locations tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listLocUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new locations tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listLocUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the locations data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listLocDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in locations`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listLocSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in locations`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listLocReload();
    await page.waitForTimeout(2000);
})









// List Effort States
Then(`I typed a new Effort States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listESWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Effort States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listESWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Effort States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listESWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Effort States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listESUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Effort States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listESUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Effort States data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listESDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Effort States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listESSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Effort States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listESReload();
    await page.waitForTimeout(2000);
})









// List cost categories
Then(`I typed a new Cost Categories tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCCWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCCWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCCWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCCUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Categories tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCCUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Cost Categories data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCCDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Cost Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCCSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Cost Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCCReload();
    await page.waitForTimeout(2000);
})















// List Cost Item Categories
Then(`I typed a new Cost Item Categories tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCICWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Item Categories tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCICWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Item Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCICWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Item Categories tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCICUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Item Categories tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCICUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Cost Item Categories data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCICDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Cost Item Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCICSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Cost Item Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCICReload();
    await page.waitForTimeout(2000);
})













// List Cost Items
Then(`I typed a new Cost Items tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCIWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Items tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCIWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Cost Items tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCIWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Items tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCIUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Cost Items tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCIUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Cost Items data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCIDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Cost Items`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCISave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Cost Items`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listCIReload();
    await page.waitForTimeout(2000);
})







// List Baseline Types
Then(`I typed a new Baseline Types tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listBTWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Baseline Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listBTWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Baseline Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listBTWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Baseline Types tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listBTUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Baseline Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listBTUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Baseline Types data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listBTDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Baseline Types`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listBTSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Baseline Types`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listBTReload();
    await page.waitForTimeout(2000);
})








// List Feature Types
Then(`I typed a new Feature Types tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFTWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Feature Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFTWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Feature Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFTWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Feature Types tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFTUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Feature Types tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFTUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Feature Types data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFTDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Feature Types`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFTSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Feature Types`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFTReload();
    await page.waitForTimeout(2000);
})










// List Feature States
Then(`I typed a new Feature States tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFSWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Feature States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFSWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Feature States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFSWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Feature States tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFSUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Feature States tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFSUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Feature States data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFSDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Feature States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFSSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Feature States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listFSReload();
    await page.waitForTimeout(2000);
})









// List Overheads
Then(`I typed a new Overheads tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listOverWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Overheads tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listOverWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Overheads tes3`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listOverWriteC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Overheads tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listOverUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Overheads tes2`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listOverUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I delete the Overheads data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listOverDelete();
    await page.waitForTimeout(2000);
})

Then(`I clicked save button in Overheads`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listOverSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Overheads`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    await listData.listOverReload();
    await page.waitForTimeout(2000);
})








//Lists User Defined Lists: Main
Then(`I clicked Reload button in ULD`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLReload();
    await page.waitForTimeout(2000);
})



//Lists User Defined Lists: Project
Then(`I select ULDProject`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLPSelect();
    await page.waitForTimeout(2000);
})

Then(`I typed a new ULDProject Field 101`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLPWriteA();
    await page.waitForTimeout(2000);
})

Then(`I Re-type Project tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUserDetailTextBoxProject();
    await page.waitForTimeout(2000);
})

Then(`I select save in the UDLD Project`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listDetailProjectSaveA();
    await page.waitForTimeout(2000);
})

Then(`I select ULDProject Field Data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLPFieldDataSelect();
    await page.waitForTimeout(2000);
})



//Lists User Defined Lists: Project Update
Then(`I Re-type Project Data A`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLProjectDataRetype();
    await page.waitForTimeout(2000);
})


//Lists User Defined Lists: Project Delete
Then(`I Delete the UDLD Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLProjectDataDelete();
    await page.waitForTimeout(2000);
})





//Lists User Defined Lists: Rescource
Then(`I select ULDRescource`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLRSelectB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new ULDRescource Field 33`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLRWriteA();
    await page.waitForTimeout(2000);
})

Then(`I Re-type Rescource tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.TextBoxRescourceReType();
    await page.waitForTimeout(2000);
})

Then(`I Re-type Rescource A`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUserDetailTextBoxRescource();
    await page.waitForTimeout(2000);
})

Then(`I select save in the UDLD Rescource`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUserDetailRescourceSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in ULD Rescource`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLReloadRescource();
    await page.waitForTimeout(2000);
})

Then(`Clicked Rescource A on the check box List`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLRescourceCheckBox();
    await page.waitForTimeout(2000);
})

Then(`I select the delete button in rescource data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLRescourceDataDelete();
    await page.waitForTimeout(2000);
})





//Lists User Defined Lists: Assingnment
Then(`I select ULDAssignment`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLAssignment();
    await page.waitForTimeout(2000);
})

Then(`I typed a new ULDAssignment Field 5`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLAssignmentText();
    await page.waitForTimeout(2000);
})

Then(`I type Assignment tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.ULDRescourceRetypeA();
    await page.waitForTimeout(2000);
})

Then(`I select save in the UDLD Assignment`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUserDetailAssignmentSave();
    await page.waitForTimeout(2000);
})

Then(`I select save in the UDLD Assignment B`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUserDetailAssignmentSave2();
    await page.waitForTimeout(2000);
})

Then(`I select ULDAssignment Field 5`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.RetypeTes1AssignmentList();
    await page.waitForTimeout(2000);
})

Then(`I Re-type Assignment tes1 UDLD Update`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.RetypeTes1AssignmentList();
    await page.waitForTimeout(2000);
})

Then(`I selected the delete button in the Assignment`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.AssignmentDelete();
    await page.waitForTimeout(2000);
})







//Lists User Defined Lists: Team
Then(`I select ULDTeam`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLTest();
    await page.waitForTimeout(2000);
})

Then(`I typed a new ULDTeam Field 16`, timeout, async function() {
    let page = this.page;
    const listData = new adminListPage(page);
    listData.listUDLTestTextField();
    await page.waitForTimeout(2000);
})

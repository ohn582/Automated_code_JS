const { When, setDefaultTimeout } = require('@cucumber/cucumber');
const { adminListTypeData } = require('../../components/adminList_page.component');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

// List
When(`I select Administration and select List`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.adminListSelect();
    await page.waitForTimeout(2000);
})




// Lists Partitions
When(`I select Partitions`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPartitionsSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Partitions`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPartitionsAdd();
    await page.waitForTimeout(2000);
})

When(`I select tes3 in the Partitions in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPartitionsSelectData();
    await page.waitForTimeout(2000);
})






// Lists Domains
When(`I select Domains`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listDomainsSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Domains`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listDomainsAdd();
    await page.waitForTimeout(2000);
})

When(`I select tes1 in the Domains in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listDomainSelectData();
    await page.waitForTimeout(2000);
})




// Lists Sponsors
When(`I select Sponsors`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listSponsorsSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Sponsors`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listSponsorsAdd();
    await page.waitForTimeout(2000);
})

When(`I select NewB in the Sponsors in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listSponsorSelectData();
    await page.waitForTimeout(2000);
})




// Lists Categories
When(`I select Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCategoriesSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCategoriesAdd();
    await page.waitForTimeout(2000);
})

When(`I select tes1 in the Categories in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCategorieSelectData();
    await page.waitForTimeout(2000);
})



//Lists Project Codes
When(`I select Project Codes`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPCSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Project Codes`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPCAdd();
    await page.waitForTimeout(2000);
})

When(`I select New Project NewB in the Project Codes in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPCSelectData();
    await page.waitForTimeout(2000);
})







// Lists Countries
When(`I select Countries`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCountriesSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Countries`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCountriesAdd();
    await page.waitForTimeout(2000);
})

When(`I select a data in Countries`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCountriesSelectData();
    await page.waitForTimeout(2000);
})








//Lists Project States
When(`I select Project States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPSSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Project States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPSAdd();
    await page.waitForTimeout(2000);
})

When(`I select Project States in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listPSSelectData();
    await page.waitForTimeout(2000);
})







//Lists locations
When(`I select locations`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listLocSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the locations`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listLocAdd();
    await page.waitForTimeout(2000);
})

When(`I select locations in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listLocSelectData();
    await page.waitForTimeout(2000);
})










//Lists Effort States
When(`I select Effort States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listESSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Effort States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listESAdd();
    await page.waitForTimeout(2000);
})

When(`I select Effort States in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listESSelectData();
    await page.waitForTimeout(2000);
})








//Lists Cost Categories
When(`I select Cost Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCCSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Cost Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCCAdd();
    await page.waitForTimeout(2000);
})

When(`I select Cost Categories in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCCSelectData();
    await page.waitForTimeout(2000);
})







//Lists Cost Item Categories
When(`I select Cost Item Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCICSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Cost Item Categories`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCICAdd();
    await page.waitForTimeout(2000);
})

When(`I select Cost Item Categories in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCICSelectData();
    await page.waitForTimeout(2000);
})








//Lists Cost Items
When(`I select Cost Items`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCISelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Cost Items`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCIAdd();
    await page.waitForTimeout(2000);
})

When(`I select Cost Items in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listCISelectData();
    await page.waitForTimeout(2000);
})






//Lists Baseline Types
When(`I select Baseline Types`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listBTSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Baseline Types`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listBTAdd();
    await page.waitForTimeout(2000);
})

When(`I select Baseline Types in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listBTSelectData();
    await page.waitForTimeout(2000);
})










//Lists Feature Types
When(`I select Feature Types`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listFTSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Feature Types`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listFTAdd();
    await page.waitForTimeout(2000);
})

When(`I select Feature Types in the checkbox data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listFTSelectData();
    await page.waitForTimeout(2000);
})








//Lists Feature States
When(`I select Feature States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listFSSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Feature States`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listFSAdd();
    await page.waitForTimeout(2000);
})

When(`I select Feature States in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listFSSelectData();
    await page.waitForTimeout(2000);
})










//Lists Overheads
When(`I select Overheads`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listOverSelect();
    await page.waitForTimeout(2000);
})

When(`I select Add Button in the Overheads`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listOverAdd();
    await page.waitForTimeout(2000);
})

When(`I select Overheads in data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listOverSelectData();
    await page.waitForTimeout(2000);
})







//Main User Defined
When(`I select User Defined Lists`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLSelect();
    await page.waitForTimeout(2000);
})

When(`I clicked add button in Defined List Details`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUserDetailAdd();
    await page.waitForTimeout(2000);
})




//Lists User Defined Lists: Project
When(`I select Add Button in the ULDProject`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLAdd();
    await page.waitForTimeout(2000);
})

//Lists User Defined Lists: Project Update
When(`I select New List Project tes1 from Field 101 data`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLProjectDataSelect();
    await page.waitForTimeout(2000);
})









//Lists User Defined Lists: Rescource 
When(`I select Add Button in the ULDRescource`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLAdd();
    await page.waitForTimeout(2000);
})

When(`I Select the new ULDRescource Field 33`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLDataSelectA();
    await page.waitForTimeout(2000);
})

When(`Clicked Rescource tes1`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLDataRetype();
    await page.waitForTimeout(2000);
})






//Lists User Defined Lists: Milestone
When(`I select Add Button in the ULDMilestone`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLAdd();
    await page.waitForTimeout(2000);
})

//Lists User Defined Lists: Event
When(`I select Add Button in the ULDEvent`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLAdd();
    await page.waitForTimeout(2000);
})


//Lists User Defined Lists: Assignment
When(`I select Add Button in the ULDAssignment`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLAdd();
    await page.waitForTimeout(2000);
})





//Lists User Defined Lists: Rescource
When(`I select Add Button in the ULDRescource`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLRescourceAdd();
    await page.waitForTimeout(2000);
})

When(`I clicked add button in Defined List Details for Assingnment`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.ULDRescourceAddBtnB();
    await page.waitForTimeout(2000);
})









//Lists User Defined Lists: Team
When(`I select Add Button in the ULDTeam`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.listUDLTestAdd();
    await page.waitForTimeout(2000);
})

When(`I clicked add button in Defined List Details for Team`, timeout, async function() {
    let page = this.page;
    const listData = new adminListTypeData(page);
    listData.ULDRescourceAddBtnB();
    await page.waitForTimeout(2000);
})
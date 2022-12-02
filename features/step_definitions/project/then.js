const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { projectPage } = require('../../page-objects/projectPage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Data
Then(`I clicked add to create a new Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAdd();
    await page.waitForTimeout(2000);
})

Then(`I type multiple project name`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAddNameText();
    await page.waitForTimeout(2000);
})

Then(`I select save in the Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectSaveData();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataRefresh();
    await page.waitForTimeout(2000);
})

Then(`I slect multiple project to re-type the name`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataUpdate();
    await page.waitForTimeout(2000);
})

Then(`I select multiple project to delete the data`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataSelect();
    await page.waitForTimeout(2000);
})

//Project Demand
Then(`I slect multiple project to delete the data`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataSelect();
    await page.waitForTimeout(2000);
})

Then(`I clicked the Demand Grid Value dropdown`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDemandValue();
    await page.waitForTimeout(3000);
})


//Project Assignments
    //Data 1
Then(`I clicked add to create a new Project Resource Assignments`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAssingnmentsAdd();
    await page.waitForTimeout(3000);
})

Then(`I clicked add to create a new Project Resource Assignments B`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAssingnmentsAddB();
    await page.waitForTimeout(3000);
})

Then(`I clicked add to create a new Project Required Skill C`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAssingnmentsAddC();
    await page.waitForTimeout(3000);
})

Then(`I clicked add to create a new Project Search Field D`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAssingnmentsAddD();
    await page.waitForTimeout(3000);
})

Then(`I clicked add to create a new Project Resource Name Select E`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectSelectRescource();
    await page.waitForTimeout(3000);
})

Then(`Save Project Rescource Assignment`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataAdd();
    await page.waitForTimeout(3000);
})




//     //Data 2
// Then(`I clicked add to create a new Project Resource Assignments`, timeout, async function() {
//     let page = this.page;
//     const listData = new projectPage(page);
//     listData.projectAssingnmentsAdd();
//     await page.waitForTimeout(3000);
// })
    
// Then(`I clicked add to create a new Project Resource Assignments F`, timeout, async function() {
//     let page = this.page;
//     const listData = new projectPage(page);
//     listData.projectAssingnmentsAddF();
//     await page.waitForTimeout(3000);
// })
    
// Then(`I clicked add to create a new Project Required Skill G`, timeout, async function() {
//     let page = this.page;
//     const listData = new projectPage(page);
//     listData.projectAssingnmentsAddG();
//     await page.waitForTimeout(3000);
// })
    
// Then(`I clicked add to create a new Project Search Field H`, timeout, async function() {
//     let page = this.page;
//     const listData = new projectPage(page);
//     listData.projectAssingnmentsAddH();
//     await page.waitForTimeout(3000);
// })
    
// Then(`I clicked add to create a new Project Resource Name Select I`, timeout, async function() {
//     let page = this.page;
//     const listData = new projectPage(page);
//     listData.projectSelectRescourceI();
//     await page.waitForTimeout(3000);
// })
    
// Then(`Save Project Rescource Assignment`, timeout, async function() {
//     let page = this.page;
//     const listData = new projectPage(page);
//     listData.projectDataAdd();
//     await page.waitForTimeout(3000);
// })
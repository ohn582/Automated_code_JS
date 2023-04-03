const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { projectPage } = require('../../page-objects/projectPage');
const { timeout } = require('../../test.config').test;


setDefaultTimeout(60 * 1000);

//Project Data Create
Then(`I create a Project Data`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAddData();
    await page.waitForTimeout(2000);
})

Then(`Select Reload Button for project data`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projReloadBtn();
    await page.waitForTimeout(2000);
})

Then(`I create a Project Data B`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAddDataB();
    await page.waitForTimeout(2000);
})

Then(`I create a Project Data C`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAddDataC();
    await page.waitForTimeout(2000);
})

Then(`I Click Apply`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectApply();
    await page.waitForTimeout(2000);
})


//Create Project Data 1
Then(`I type the Project Name A`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectTypeA();
    await page.waitForTimeout(2000)
})

Then(`I type multiple datas in Project Name A`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectUnitPriority();
    await page.waitForTimeout(2000)
})


//Create Project Data 2
Then(`I type the Project Name B`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectTypeB();
    await page.waitForTimeout(2000);
})

Then(`I type multiple datas in Project Name B`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectUnitPriorityB();
    await page.waitForTimeout(2000)
})


//Create Project Data 3
Then(`I type the Project Name C`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectTypeC();
    await page.waitForTimeout(2000);
})

Then(`I type multiple datas in Project Name C`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectUnitPriorityC();
    await page.waitForTimeout(2000)
})






Then(`I select Add & Close`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectAddClose();
    await page.waitForTimeout(2000);
})

Then(`Select Save Button`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectSave();
    await page.waitForTimeout(2000);
})






//Project Data Update 1
Then(`I Re-Type Diffrent Name A`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectUpdateA();
    await page.waitForTimeout(2000);
})

Then(`I Re-Type multiple datas in Project Name A`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataUpdateA();
    await page.waitForTimeout(2000);
})


//Project Data Update 2
Then(`I Re-Type Diffrent Name B`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectUpdateB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Type multiple datas in Project Name B`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataUpdateB();
    await page.waitForTimeout(2000);
})


//Project Data Update 3
Then(`I Re-Type Diffrent Name C`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectUpdateC();
    await page.waitForTimeout(2000);
})

Then(`I Re-Type multiple datas in Project Name C`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataUpdateC();
    await page.waitForTimeout(2000);
})



//Project Data Delete
Then(`I select Project Delete Button`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDelete();
    await page.waitForTimeout(2000);
})














// //Project Demand
// Then(`I slect multiple project to delete the data`, timeout, async function() {
//     let page = this.page;
//     const listData = new projectPage(page);
//     listData.projectDataSelect();
//     await page.waitForTimeout(2000);
// })

// Then(`I clicked the Demand Grid Value dropdown`, timeout, async function() {
//     let page = this.page;
//     const listData = new projectPage(page);
//     listData.projectDemandValue();
//     await page.waitForTimeout(3000);
// })







//Project Reset
Then(`I select refreshed button`, timeout, async function() {
    let page = this.page;
    const listData = new projectPage(page);
    listData.projectDataRefresh();
    await page.waitForTimeout(3000);
})

const { Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { LocationsPage } = require('../../../../page-objects/administration/Resource_Lists/LocationsPage');
const { timeout } = require('../../../../test.config').test;


setDefaultTimeout(60 * 1000);

// Categories: Create
Then(`I typed a new Locations tes1`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    await listData.listLocationsWriteA();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Locations tes2`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    await listData.listLocationsWriteB();
    await page.waitForTimeout(2000);
})

Then(`I typed a new Locations tes3`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    await listData.listLocationsWriteC();
    await page.waitForTimeout(2000);
})



// Categories: Update
Then(`I Re-Typed a new Locations`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    listData.locationsReTypeData();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Locations tes2`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    listData.locationsReTypeDataB();
    await page.waitForTimeout(2000);
})

Then(`I Re-Typed a new Locations tes3`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    listData.locationsReTypeDataC();
    await page.waitForTimeout(2000);
})




// Categories: Delete
Then(`I delete the Locations data`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    await listData.listLocationsDelete();
    await page.waitForTimeout(2000);
})





Then(`I clicked save button in Locations`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    await listData.listLocationsSave();
    await page.waitForTimeout(2000);
})

Then(`I clicked Reload button in Locations`, timeout, async function () {
    let page = this.page;
    const listData = new LocationsPage(page);
    await listData.listLocationsReload();
    await page.waitForTimeout(2000);
})

const { action } = require('../utilities/action')

const locators = {        
    resource_Page: {
        //Resource Data
        resDropView: `[id="R1TResourceData-bodyWrap"] [id="resourceListGridViews-trigger-picker"]`,
        resOBSDropdownName: `[id="resourceListGridViews-picker"] [data-recordindex="2"]`,
       

        //Resource Assignments
    },

}

class resourcePage {
    constructor(page) {
        this.page = page;
    }

    resourceDropView = async() => {
        let page=this.page;
        let { resDropView, resOBSDropdownName }=locators.resource_Page;
        await page.click(resDropView);
        // await page.waitForTimeout(2000);
        await page.click(resOBSDropdownName);
        await page.waitForTimeout(3000);
    }

}

module.exports.resourcePage = resourcePage;

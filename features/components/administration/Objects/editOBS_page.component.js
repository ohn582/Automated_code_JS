const locator = {
    admin_Page: {
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
    },

    obsLink: {
        obsLink: `//*[text()="OBSs"]`,
        objectLink: `//*[text()="Objects"]`,
    },
}

class editOBSTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Resource List
    editOBSSelect = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;
        let { obsLink, objectLink }=locator.obsLink;
        await page.click(adminLink).catch(e => e);
        await page.click(objectLink).catch(e => e);
        await page.click(obsLink).catch(e => e);
        await page.waitForTimeout(3000);
    }    

}

exports.editOBSTypeData = editOBSTypeData;
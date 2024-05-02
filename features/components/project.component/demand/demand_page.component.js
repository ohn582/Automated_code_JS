const locator = {
    projectNav: {
        projectGridMode:`[id="R1TProject"] [id="ProjectListToolBar"] [aria-label="Grid Mode"]`,
    },

    project_Page: {
        //Project Data
        projDemandLink: `//*[text()="Demand"]`,

    },
}

class projectDemandTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Project Data Create
    projLinkDemandSelect = async() => {
        let page=this.page;
        let { projDemandLink }=locator.project_Page;
        // await page.click(MenuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(projDemandLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(1000);
    }

}

exports.projectDemandTypeData = projectDemandTypeData;
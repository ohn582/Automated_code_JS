const locator = {

    resource_Page: {
        MenuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        resDropView: `//*[text()="Resource"]`,

        //Resource Data
        resOBSDropdownName: `//*[text()="Resource Data"]`,

        //Capacity
        capacityLink: `//*[text()="Capacity"]`,
    },

}

class resourceTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource data
    resourceDataSelect = async() => {
        let page=this.page;
        let { resDropView, resOBSDropdownName, MenuSliderBtn }=locator.resource_Page;
        await page.click(MenuSliderBtn);
        await page.waitForTimeout(1000);
        await page.click(resDropView);
        await page.waitForTimeout(1000);
        await page.click(resOBSDropdownName);
        await page.waitForTimeout(3000);
    }
    

    //Rescouce Capacity
    capacityDataSelect = async() => {
        let page=this.page;
        let { MenuSliderBtn, resDropView, capacityLink }=locator.resource_Page;
        await page.click(MenuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(resDropView);
        // await page.waitForTimeout(1000);
        await page.click(capacityLink);
        await page.waitForTimeout(3000);
    }


}

exports.resourceTypeData = resourceTypeData;
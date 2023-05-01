const locator = {

    resource_Page: {
        MenuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        resourceLink: `[id="R1MainNavigationTree-bodyWrap"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-3"]`,

        //Resource Data
        resOBSDropdownName: `//*[text()="Resource Data"]`,

        //Capacity
        capacityLink: `//*[text()="Capacity"]`,
    },

    matrix_Page: {
        MenuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        resourceSkilMatrix: `//*[text()="Skill Matrix"]`,
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
        let { resourceLink, resOBSDropdownName }=locator.resource_Page;
        await page.click(resourceLink);
        // await page.waitForTimeout(1000);
        await page.click(resOBSDropdownName);
        await page.waitForTimeout(3000);
    }
    

    //Rescouce Capacity
    capacityDataSelect = async() => {
        let page=this.page;
        let { resourceLink, capacityLink }=locator.resource_Page;
        await page.click(resourceLink);
        // await page.waitForTimeout(1000);
        await page.click(capacityLink);
        await page.waitForTimeout(3000);
    }







    

    //Skill Matrix
    matrixDataSelect = async() => {
        let page=this.page;
        let { resourceLink }=locator.resource_Page;
        let { resourceSkilMatrix }=locator.matrix_Page;
        await page.click(resourceLink);
        // await page.waitForTimeout(1000);
        await page.click(resourceSkilMatrix);
        await page.waitForTimeout(3000);
    }

}

exports.resourceTypeData = resourceTypeData;
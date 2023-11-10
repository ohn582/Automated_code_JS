const locator = {

    resource_Page: {
        resourceLink: `[id="R1MainNavigationTree-bodyWrap"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-3"]`,

        //Resource Data
        resourceData: `[id="r1ResourceMain-innerCt"] [class="x-container x-box-item x-container-default x-box-layout-ct"] [id="ResourceMainData"]`,

    },

    matrix_Page: {
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
        let { resourceLink }=locator.resource_Page;
        await page.click(resourceLink);
        
        await page.waitForTimeout(3000);
    }

    resourceLinkSelect = async() => {
        let page=this.page;
        let { resourceData }=locator.resource_Page;
        await page.click(resourceData);
        
        await page.waitForTimeout(3000);
    }

}

exports.resourceTypeData = resourceTypeData;
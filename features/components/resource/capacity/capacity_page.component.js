const locator = {

    resource_Page: {
        resourceLink: `[id="R1MainNavigationTree-bodyWrap"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-3"]`,

        //Resource Data
        resourceData: `[id="r1ResourceMain-innerCt"] [class="x-container x-box-item x-container-default x-box-layout-ct"] [id="ResourceMainData"]`,

        //Resource Skill Matrix
        resourceCapacity: `[id="r1ResourceMain-innerCt"] [class="x-container x-box-item x-container-default x-box-layout-ct"] [id="ResourceMainCapacity"]`,
    },

    capacity_Page: {
        resCapacity: `//*[text()="Capacity"]`,
    },

}

class resourceSkillTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource Skill Matrix
    resourceLinkSelect = async() => {
        let page=this.page;
        let { resourceData }=locator.resource_Page;
        await page.click(resourceData);
        
        await page.waitForTimeout(3000);
    }

    resourceSkillMatrixLink = async() => {
        let page=this.page;
        let { resourceSkillMatrix }=locator.resource_Page;
        await page.click(resourceSkillMatrix);
        
        await page.waitForTimeout(3000);
    }

}

exports.resourceSkillTypeData = resourceSkillTypeData;
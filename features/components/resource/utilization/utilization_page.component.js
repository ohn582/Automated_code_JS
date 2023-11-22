const locator = {

    resource_Page: {
        resourceLink: `[id="R1MainNavigationTree-bodyWrap"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-3"]`,

        //Resource Skill Matrix
        resourceUtilization: `[id="r1ResourceMain-innerCt"] [class="x-container x-box-item x-container-default x-box-layout-ct"] [id="ResourceMainUtilization"]`,
    },

    utilization_Page: {
        resUtilization: `//*[text()="Utilization"]`,
    },

}

class utilizationTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource Skill Matrix
    resourceUtilizationLink = async() => {
        let page=this.page;
        let { resUtilization }=locator.capacity_Page;
        await page.click(resUtilization);
        
        await page.waitForTimeout(3000);
    }
}

exports.utilizationTypeData = utilizationTypeData;
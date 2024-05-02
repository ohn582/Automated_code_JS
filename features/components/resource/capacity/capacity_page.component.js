const locator = {

    resource_Page: {
        resourceLink: `[id="R1MainNavigationTree-bodyWrap"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-3"]`,

        //Resource Skill Matrix
        resourceCapacity: `[id="r1ResourceMain-innerCt"] [class="x-container x-box-item x-container-default x-box-layout-ct"] [id="ResourceMainCapacity"]`,
    },

    capacity_Page: {
        resCapacity: `//*[text()="Capacity"]`,
    },

}

class capacityTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource Skill Matrix
    resourceCapacityLink = async() => {
        let page=this.page;
        let { resCapacity }=locator.capacity_Page;
        await page.click(resCapacity);
        
        await page.waitForTimeout(3000);
    }
}

exports.capacityTypeData = capacityTypeData;
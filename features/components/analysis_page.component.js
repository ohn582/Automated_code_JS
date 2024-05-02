const locator = {

    ranking_Page: {
        MenuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        rankingLink: `[id="R1MainNavigationTree-bodyWrap"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-5"]`,

        //Resource Data
        resOBSDropdownName: `//*[text()="Resource Data"]`,

        //Capacity
        capacityLink: `//*[text()="Capacity"]`,
    },

    matrix_Page: {
        MenuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        rankingSkilMatrix: `//*[text()="Skill Matrix"]`,
    },

}

class rankingTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource data
    rankingDataSelect = async() => {
        let page=this.page;
        let { rankingLink, resOBSDropdownName }=locator.ranking_Page;
        await page.click(rankingLink);
        // await page.waitForTimeout(1000);
        await page.click(resOBSDropdownName);
        await page.waitForTimeout(3000);
    }
    
}

exports.rankingTypeData = rankingTypeData;
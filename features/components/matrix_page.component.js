const locator = {
    matrix_Page: {
        MenuSliderBtn: `[data-componentid="r1MainViewPort"] [data-componentid="r1NavToggle"]`,

        resourceLink: `//*[text()="Resource"]`,
        resourceSkilMatrix: `//*[text()="Skill Matrix"]`,
    },

}

class matrixTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Resource List
    matrixDataSelect = async() => {
        let page=this.page;
        let { resourceLink, resourceSkilMatrix, MenuSliderBtn }=locator.matrix_Page;
        await page.click(MenuSliderBtn);
        await page.waitForTimeout(1000);
        await page.click(resourceLink);
        // await page.waitForTimeout(1000);
        await page.click(resourceSkilMatrix);
        await page.waitForTimeout(3000);
    }
    

}

exports.matrixTypeData = matrixTypeData;
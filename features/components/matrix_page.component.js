const locator = {
    matrix_Page: {
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
        let { resourceLink, resourceSkilMatrix }=locator.matrix_Page;
        await page.click(resourceLink);
        await page.waitForTimeout(1000);
        await page.click(resourceSkilMatrix);
        await page.waitForTimeout(3000);
    }
    

}

exports.matrixTypeData = matrixTypeData;
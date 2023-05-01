const locator = {

    labor_Page: {
        MenuSliderBtn: `[id="toolbar-1010-innerCt"] [data-ref="targetEl"] [id="r1NavToggle"]`,
        assignmentSelect: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-4"]`,
        laborLink: `//*[text()="Labor"]`,
    },

}

class laborTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource labor data
    laborLink = async() => {
        let page=this.page;
        let { assignmentSelect, laborLink }=locator.labor_Page;
        await page.click(assignmentSelect);
        // await page.waitForTimeout(1000);
        await page.click(laborLink);
        await page.waitForTimeout(3000);
    }

}

exports.laborTypeData = laborTypeData;
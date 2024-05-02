const locator = {

    labor_Page: {
        assignmentSelect: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-4"]`,
        laborLink: `//*[text()="Labor"]`,
    },

    labor_CheckBox: {
        assignmentSelectA: `[id="r1LaborAssignmentPanel-innerCt"] [class="x-grid-scroll-container "] [data-recordindex="12"] [role="gridcell"]`,
        assignmentSelectB: `[id="r1LaborAssignmentPanel-innerCt"] [class="x-grid-scroll-container "] [data-recordindex="13"] [role="gridcell"]`,
        assignmentSelectC: `[id="r1LaborAssignmentPanel-innerCt"] [class="x-grid-scroll-container "] [data-recordindex="14"] [role="gridcell"]`,

        laborGridBoxA: `//*[text()="3456"]`,
        laborGridBoxB: `//*[text()="3456"]`,
        laborGridBoxC: `//*[text()="3456"]`,
    },
}

class resourceTypeData {
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

    laborCheckBox = async() => {
        let page=this.page;
        let { assignmentSelectA, assignmentSelectB, assignmentSelectC }=locator.labor_CheckBox;
        await page.click(assignmentSelectA);
        // await page.waitForTimeout(1000);
        await page.click(assignmentSelectB);
        await page.click(assignmentSelectC);
        await page.waitForTimeout(3000);
    }
}

exports.resourceTypeData = resourceTypeData;
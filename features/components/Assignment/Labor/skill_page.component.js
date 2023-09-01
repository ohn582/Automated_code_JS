const locator = {

    labor_Page: {
        assignmentSelect: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-4"]`,
        laborLink: `//*[text()="Labor"]`,
    },

}

class skillTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource labor data
    AssignmentLink = async() => {
        let page=this.page;
        let { assignmentSelect }=locator.labor_Page;
        await page.click(assignmentSelect);
        await page.waitForTimeout(3000);
    }
    
    laborLink = async() => {
        let page=this.page;
        let { laborLink }=locator.labor_Page;
        await page.click(laborLink);
        await page.waitForTimeout(3000);
    }

}

exports.skillTypeData = skillTypeData;
const locator = {

    financial_Page: {
        assignmentSelect: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-4"]`,
        financialLink: `//*[text()="Financial"]`,
    },

}

class financialTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    //Rescource financial data
    assignmentlLink = async() => {
        let page=this.page;
        let { assignmentSelect }=locator.financial_Page;
        await page.click(assignmentSelect);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }


    financialLink = async() => {
        let page=this.page;
        let { financialLink }=locator.financial_Page;
        await page.click(financialLink);
        await page.waitForTimeout(3000);
    }

}

exports.financialTypeData = financialTypeData;
const locator = {

    financial_Page: {
        assignmentSelect: `[id="R1WestNav-outerCt"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-4"]`,
        financialLink: `//*[text()="Financial"]`,
    },

    financial_CheckBox: {
        box1: `[id="r1FinancialAssignmentPanel-body"] [role="rowgroup"] [data-recordindex="1"] [tabindex="-1"]`,
        box2: `[id="r1FinancialAssignmentPanel-body"] [role="rowgroup"] [data-recordindex="3"] [tabindex="-1"]`,
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
        // await page.waitForTimeout(3000);
    }



    financialMultipleBox_A = async() => {
        let page=this.page;
        let { box1 }=locator.financial_CheckBox;
        await page.click(box1);
        await page.waitForTimeout(3000);
    }

    financialMultipleBox_B = async() => {
        let page=this.page;
        let { box2 }=locator.financial_CheckBox;
        await page.click(box2);
        await page.waitForTimeout(3000);
    }
}

exports.financialTypeData = financialTypeData;
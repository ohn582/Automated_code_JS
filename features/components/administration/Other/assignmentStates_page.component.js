const locator = {
    admin_Page: {
        asLink: `//*[text()="Assignment States"]`,
    },

    asCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        asBox: `[id="adminListsEffortStateGrid-body"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`,
        asBoxB: `[id="adminListsEffortStateGrid-body"] [data-recordindex="3"] [role="row"] [tabindex="-1"]`,
        asBoxC: `[id="adminListsEffortStateGrid-body"] [data-recordindex="4"] [role="row"] [tabindex="-1"]`
    }
}


class AssignmentStatesData {
    constructor(page) {
        this.page = page;
    }

    //Assignment States Link
    listAS_Select = async () => {
        let page = this.page;
        let { asLink } = locator.admin_Page;
        await page.click(asLink);
        await page.waitForTimeout(3000);
    }

    listAS_SelectData = async () => {
        let page = this.page;
        let { asBox, asBoxB, asBoxC } = locator.asCheckBox;
        await page.click(asBox);
        await page.click(asBoxB);
        await page.click(asBoxC);
        await page.waitForTimeout(3000);
    }
}

module.exports.AssignmentStatesData = AssignmentStatesData;

const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        otherLink: `//*[text()="Other"]`,
        asLink: `//*[text()="Assignment States"]`,
    },

    asNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        asAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,

    },

    asCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        asBox: `[data-componentid="r1MainViewPort"] [id="adminListsEffortStateGrid-body"] [data-recordindex="3"] [data-columnid="checkcolumn-1049"]`,
        asBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsEffortStateGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1049"]`,
        asBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsEffortStateGrid-body"] [data-recordindex="5"] [data-columnid="checkcolumn-1049"]`
    }
}


class AssignmentStatesData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    otherListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listAS_Select = async () => {
        let page = this.page;
        let { asLink, otherLink } = locator.admin_Page;

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
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

    listAS_Add = async () => {
        let page = this.page;
        let { asAddBtn } = locator.asNav;

        await page.click(asAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.AssignmentStatesData = AssignmentStatesData;

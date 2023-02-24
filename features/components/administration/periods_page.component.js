const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        objLink: `//*[text()="Objects"]`,
        editObsLink: `//*[text()="Edit OBSs"]`,
        periodsLink: `//*[text()="Periods"]`,
    },

    //Administration
    adminNav: {
        //View
        viewSelect: `//*[text()="Views"]`,
        viewData: `//*[text()="Project Demand Analysis"]`,
        viewDataSelect: `[id="AdminViewDetailGrid-bodyWrap"] [aria-label="Add"]`,
    },

        //Main User Defined Lists
        uldLink: `//*[text()="User Defined Lists"]`,
        uldAddBtn: `[id="R1TUserDefinedLists-body"] [id="AdminUserDefinedListGridAdd"]`,
        UDLDetailAdd: `[id="toolbar-1047"] [aria-label="Add"]`,

}

class periodsTypeData {
    constructor(page) {
        this.page = page;
        //this.firstTuplebefore = null;
    }

    // Project OBS
    peroidsOBSLink = async() => {
        let page=this.page;
        let { menuSliderBtn, adminLink, objLink, editObsLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.click(objLink);
        // await page.waitForTimeout(1000);
        await page.click(editObsLink);
        await page.waitForTimeout(3000);
    }
}

exports.periodsTypeData = periodsTypeData;
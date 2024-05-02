const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        otherLink: `//*[text()="Other"]`,
        baseLink: `//*[text()="Baseline Types"]`,
    },

    baseCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        baseBox: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="3"] [data-columnid="checkcolumn-1047"]`,
        baseBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="4"] [data-columnid="checkcolumn-1047"]`,
        baseBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="5"] [data-columnid="checkcolumn-1047"]`
    }
}


class BaselineData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    otherListLink = async () => {
        let page = this.page;
        let { adminLink, baseLink, otherLink } = locator.admin_Page;
        await page.click(adminLink);
        // await page.waitForTimeout(1000);

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(baseLink);

        await page.waitForTimeout(3000);
    }

    listBaseSelectData = async () => {
        let page = this.page;
        let { baseBox, baseBoxB, baseBoxC } = locator.baseCheckBox;

        await page.click(baseBox);
        await page.click(baseBoxB);
        await page.click(baseBoxC);
        await page.waitForTimeout(3000);
    }
}

module.exports.BaselineData = BaselineData;

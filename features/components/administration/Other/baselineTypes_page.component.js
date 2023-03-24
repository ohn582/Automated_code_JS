const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        otherLink: `//*[text()="Other"]`,
        baseTypeLink: `//*[text()="Baseline Types"]`,
    },

    baseTypeNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        baseTypeAddBtn: `[id="adminListsBaselineTypeGrid"] [role="toolbar"] [data-qtip="Add"]`,

    },

    baseTypeCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        baseTypeBox: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="3"] [data-columnid="checkcolumn-1047"]`,
        baseTypeBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="4"] [data-columnid="checkcolumn-1047"]`,
        baseTypeBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="5"] [data-columnid="checkcolumn-1047"]`
    }
}


class BaselineTypesData {
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

    listBaseTypeSelect = async () => {
        let page = this.page;
        let { baseTypeLink, otherLink } = locator.admin_Page;

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(baseTypeLink);
        await page.waitForTimeout(3000);
    }

    listBaseTypeSelectData = async () => {
        let page = this.page;
        let { baseTypeBox, baseTypeBoxB, baseTypeBoxC } = locator.baseTypeCheckBox;

        await page.click(baseTypeBox);
        await page.click(baseTypeBoxB);
        await page.click(baseTypeBoxC);
        await page.waitForTimeout(3000);
    }

    listBaseTypeAdd = async () => {
        let page = this.page;
        let { baseTypeAddBtn } = locator.baseTypeNav;

        await page.click(baseTypeAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.BaselineTypesData = BaselineTypesData;

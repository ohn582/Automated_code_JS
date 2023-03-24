const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        otherLink: `//*[text()="Other"]`,
        overLink: `//*[text()="Overheads"]`,
    },

    overNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        overAddBtn: `[id="adminListsOverheadGrid"] [role="toolbar"] [data-qtip="Add"]`,

    },

    overCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        overBox: `[data-componentid="r1MainViewPort"] [id="adminListsOverheadGrid-bodyWrap"] [data-recordindex="3"] [data-columnid="checkcolumn-1047"]`,
        overBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsOverheadGrid-bodyWrap"] [data-recordindex="4"] [data-columnid="checkcolumn-1047"]`,
        overBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsOverheadGrid-bodyWrap"] [data-recordindex="5"] [data-columnid="checkcolumn-1047"]`
    }
}


class OverheadsTypeData {
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

    listOverSelect = async () => {
        let page = this.page;
        let { overLink, otherLink } = locator.admin_Page;

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(overLink);
        await page.waitForTimeout(3000);
    }

    listOverSelectData = async () => {
        let page = this.page;
        let { overBox, overBoxB, overBoxC } = locator.overCheckBox;

        await page.click(overBox);
        await page.click(overBoxB);
        await page.click(overBoxC);
        await page.waitForTimeout(3000);
    }

    listOverAdd = async () => {
        let page = this.page;
        let { overAddBtn } = locator.overNav;

        await page.click(overAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.OverheadsTypeData = OverheadsTypeData;

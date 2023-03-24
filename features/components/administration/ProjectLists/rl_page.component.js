const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        otherLink: `//*[text()="Project Lists"]`,
        rlLink: `//*[text()="Rank Lists"]`,
    },

    rlNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        rlAddDetailsBtn: `[id="AdminListItemGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,

        // selectin Feild 3 
        rlSelecting: `[id="AdminListGrid-body"] [data-recordindex="2"] [data-columnid="gridcolumn-1037"]`,
    },

    rlCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        rlBox: `[data-componentid="r1MainViewPort"] [id="AdminListGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="checkcolumn-1055"]`,
        rlBoxB: `[data-componentid="r1MainViewPort"] [id="AdminListGrid-bodyWrap"] [data-recordindex="1"] [data-columnid="checkcolumn-1055"]`,
        rlBoxC: `[data-componentid="r1MainViewPort"] [id="AdminListGrid-bodyWrap"] [data-recordindex="2"] [data-columnid="checkcolumn-1055"]`
    }
}


class RankListsData {
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

    listRLSelect = async () => {
        let page = this.page;
        let { rlLink, otherLink } = locator.admin_Page;

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(rlLink);
        await page.waitForTimeout(3000);
    }

    listRLDropdown = async () => {
        let page = this.page;
        let { uldDropdown } = locator.rlNav;

        let textInput = await page.$(uldDropdown);

        await textInput.click({ clickCount: 3 })
        await page.click(uldDropdown);
        // await page.waitForTimeout(3000);
    }

    listRLDataSelect = async () => {
        let page = this.page;
        let { rlSelecting } = locator.rlNav;

        await page.click(rlSelecting);
        // await page.waitForTimeout(3000);
    }

    listRLSelectData = async () => {
        let page = this.page;
        let { rlBox, rlBoxB, rlBoxC } = locator.rlCheckBox;

        await page.click(rlBox);
        await page.click(rlBoxB);
        await page.click(rlBoxC);
        await page.waitForTimeout(3000);
    }

    listRLAdd = async () => {
        let page = this.page;
        let { rlAddDetailsBtn } = locator.rlNav;

        await page.click(rlAddDetailsBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.RankListsData = RankListsData;

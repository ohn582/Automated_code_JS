const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projectListLink: `//*[text()="Project Lists"]`,
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
        rlBox: `[id="AdminListGrid-body"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        rlBoxB: `[id="AdminListGrid-body"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        rlBoxC: `[id="AdminListGrid-body"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class RankListsData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    rlListLink = async () => {
        let page = this.page;
        let { adminLink } = locator.admin_Page;
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listRLSelect = async () => {
        let page = this.page;
        let { projectListLink, rlLink } = locator.admin_Page;

        await page.click(projectListLink);
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


}

module.exports.RankListsData = RankListsData;

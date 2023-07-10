const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        otherLink: `//*[text()="Other"]`,
        overLink: `//*[text()="Overheads"]`,
    },

    overCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        overBox: `[data-componentid="r1MainViewPort"] [id="adminListsOverheadGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        overBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsOverheadGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        overBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsOverheadGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class OverheadsTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    otherListLink = async () => {
        let page = this.page;
        let { adminLink } = locator.admin_Page;
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
}

module.exports.OverheadsTypeData = OverheadsTypeData;

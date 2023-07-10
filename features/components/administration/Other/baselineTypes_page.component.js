const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        otherLink: `//*[text()="Other"]`,
        baseTypeLink: `//*[text()="Baseline Types"]`,
    },

    baseTypeCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        baseTypeBox: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        baseTypeBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        baseTypeBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class BaselineTypesData {
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
}

module.exports.BaselineTypesData = BaselineTypesData;

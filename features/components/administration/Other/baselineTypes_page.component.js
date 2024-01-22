const locator = {
    admin_Page: {
        baseTypeLink: `//*[text()="Baseline Types"]`,
    },

    baseTypeCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        baseTypeBox: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="5"] [role="row"] [tabindex="-1"]`,
        baseTypeBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="6"] [role="row"] [tabindex="-1"]`,
        baseTypeBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="7"] [role="row"] [tabindex="-1"]`
    }
}


class BaselineTypesData {
    constructor(page) {
        this.page = page;
    }

    //Baseline Type Link
    listBaseTypeSelect = async () => {
        let page = this.page;
        let { baseTypeLink } = locator.admin_Page;
        await page.click(baseTypeLink);
        await page.waitForTimeout(3000);
    }

    //Check Box
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

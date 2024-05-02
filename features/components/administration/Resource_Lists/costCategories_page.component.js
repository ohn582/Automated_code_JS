const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        ccLink: `//*[text()="Cost Categories"]`,
    },



    ccCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ccBox: `[id="adminListsCostCategoryGrid-body"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        ccBoxB: `[id="adminListsCostCategoryGrid-body"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        ccBoxC: `[id="adminListsCostCategoryGrid-body"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class ccTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    projectListLink = async() => {
        let page=this.page;
        let { adminLink }=locator.admin_Page;
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listCCSelect = async() => {
        let page=this.page;
        let { ccLink, resListLink }=locator.admin_Page;

        await page.click(resListLink);
        // await page.waitForTimeout(1000);
        await page.click(ccLink);
        await page.waitForTimeout(3000);
    }

    listCCSelectData = async() => {
        let page=this.page;
        let { ccBox, ccBoxB, ccBoxC }=locator.ccCheckBox;

        await page.click(ccBox);
        await page.click(ccBoxB);
        await page.click(ccBoxC);
        await page.waitForTimeout(3000);
    }

}

module.exports.ccTypeData = ccTypeData;

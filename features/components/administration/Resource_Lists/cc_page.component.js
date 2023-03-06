const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        ccLink: `//*[text()="Cost Categories"]`,
    },

    ccNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ccAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    ccCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ccBox: `[data-componentid="r1MainViewPort"] [id="adminListsCostCategoryGrid-bodyWrap"] [data-recordindex="10"] [data-columnid="checkcolumn-1040"]`,
        ccBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsCostCategoryGrid-bodyWrap"] [data-recordindex="11"] [data-columnid="checkcolumn-1040"]`,
        ccBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsCostCategoryGrid-bodyWrap"] [data-recordindex="12"] [data-columnid="checkcolumn-1040"]`
    }
}


class ccTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    projectListLink = async() => {
        let page=this.page;
        let { menuSliderBtn, adminLink }=locator.admin_Page;
        await page.click(menuSliderBtn);
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

    listCCAdd = async() => {
        let page=this.page;
        let { ccAddBtn }=locator.ccNav;

        await page.click(ccAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.ccTypeData = ccTypeData;

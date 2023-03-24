const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        finListLink: `//*[text()="Financial Lists"]`,
        ciLink: `//*[text()="Cost Items"]`,
    },

    ciNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ciAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    ciCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ciBox: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemGrid-bodyWrap"] [data-recordindex="17"] [data-columnid="checkcolumn-1051"]`,
        ciBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemGrid-bodyWrap"] [data-recordindex="18"] [data-columnid="checkcolumn-1051"]`,
        ciBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemGrid-bodyWrap"] [data-recordindex="19"] [data-columnid="checkcolumn-1051"]`
    }
}


class CostItemsTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    projectListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listCISelect = async () => {
        let page = this.page;
        let { ciLink, finListLink } = locator.admin_Page;

        await page.click(finListLink);
        // await page.waitForTimeout(1000);
        await page.click(ciLink);
        await page.waitForTimeout(3000);
    }

    listCISelectData = async () => {
        let page = this.page;
        let { ciBox, ciBoxB, ciBoxC } = locator.ciCheckBox;

        await page.click(ciBox);
        await page.click(ciBoxB);
        await page.click(ciBoxC);
        await page.waitForTimeout(3000);
    }

    listCIAdd = async () => {
        let page = this.page;
        let { ciAddBtn } = locator.ciNav;

        await page.click(ciAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.CostItemsTypeData = CostItemsTypeData;

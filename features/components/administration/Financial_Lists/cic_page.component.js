const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        finListLink: `//*[text()="Financial Lists"]`,
        finLink: `//*[text()="Cost Item Categories"]`,
    },

    cicNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        cicAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    cicCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        cicBox: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemCategoryGrid-bodyWrap"] [data-recordindex="5"] [data-columnid="checkcolumn-1046"]`,
        cicBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemCategoryGrid-bodyWrap"] [data-recordindex="6"] [data-columnid="checkcolumn-1046"]`,
        cicBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemCategoryGrid-bodyWrap"] [data-recordindex="7"] [data-columnid="checkcolumn-1046"]`
    }
}


class CostItemsCategoriesTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    financialListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listCICSelect = async () => {
        let page = this.page;
        let { finLink, finListLink } = locator.admin_Page;

        await page.click(finListLink);
        // await page.waitForTimeout(1000);
        await page.click(finLink);
        await page.waitForTimeout(3000);
    }

    listCICSelectData = async () => {
        let page = this.page;
        let { cicBox, cicBoxB, cicBoxC } = locator.cicCheckBox;

        await page.click(cicBox);
        await page.click(cicBoxB);
        await page.click(cicBoxC);
        await page.waitForTimeout(3000);
    }

    listCICAdd = async () => {
        let page = this.page;
        let { cicAddBtn } = locator.cicNav;

        await page.click(cicAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.CostItemsCategoriesTypeData = CostItemsCategoriesTypeData;

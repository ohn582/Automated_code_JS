const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1MainNavigationTree-innerCt"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-8"]`,
        finListLink: `//*[text()="Financial Lists"]`,
        finLink: `//*[text()="Cost Item Categories"]`,
    },

    cicCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        cicBox: `[id="adminListsCostItemCategoryGrid-body"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        cicBoxB: `[id="adminListsCostItemCategoryGrid-body"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        cicBoxC: `[id="adminListsCostItemCategoryGrid-body"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class CostItemsCategoriesTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    financialListLink = async () => {
        let page = this.page;
        let { adminLink, finListLink } = locator.admin_Page;
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        await page.click(finListLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listCICSelect = async () => {
        let page = this.page;
        let { finLink } = locator.admin_Page;

        
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
}

module.exports.CostItemsCategoriesTypeData = CostItemsCategoriesTypeData;

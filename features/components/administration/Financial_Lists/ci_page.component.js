const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1MainNavigationTree-innerCt"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-8"]`,
        finListLink: `//*[text()="Financial Lists"]`,
        ciLink: `//*[text()="Cost Items"]`,
    },

    ciCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ciBox: `[id="adminListsCostItemGrid-body"] [data-recordindex="17"] [role="row"] [tabindex="-1"]`,
        ciBoxB: `[id="adminListsCostItemGrid-body"] [data-recordindex="18"] [role="row"] [tabindex="-1"]`,
        ciBoxC: `[id="adminListsCostItemGrid-body"] [data-recordindex="19"] [role="row"] [tabindex="-1"]`,
    }
}


class CostItemsTypeData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    projectListLink = async () => {
        let page = this.page;
        let { adminLink } = locator.admin_Page;
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
        // await page.waitForTimeout(3000);
    }
}

module.exports.CostItemsTypeData = CostItemsTypeData;

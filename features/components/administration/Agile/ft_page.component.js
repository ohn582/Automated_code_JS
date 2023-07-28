const locator = {
    admin_Page: {
        adminLink: `[id="R1MainNavigationTree-innerCt"] [data-componentid="R1Navigation"] [data-componentid="ext-customtreelistitem-8"]`,
        agileListLink: `//*[text()="Agile"]`,
        ftLink: `//*[text()="Feature Types"]`,
    },

    ftCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ftBox: `[id="adminListsFeatureTypeGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        ftBoxB: `[id="adminListsFeatureTypeGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        ftBoxC: `[id="adminListsFeatureTypeGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class FeatureTypesData {
    constructor(page) {
        this.page = page;
    }

    // agile link
    agileLink = async () => {
        let page = this.page;
        let { adminLink, agileListLink } = locator.admin_Page;
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        await page.click(agileListLink);

        await page.waitForTimeout(2000);
    }

    listFTSelect = async () => {
        let page = this.page;
        let { ftLink } = locator.admin_Page;

        await page.click(ftLink);
        // await page.waitForTimeout(3000);
    }

    listFTSelectData = async () => {
        let page = this.page;
        let { ftBox, ftBoxB, ftBoxC } = locator.ftCheckBox;

        await page.click(ftBox);
        await page.click(ftBoxB);
        await page.click(ftBoxC);
        await page.waitForTimeout(3000);
    }
}

module.exports.FeatureTypesData = FeatureTypesData;

const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        projListLink: `//*[text()="Project Lists"]`,
        rankFormLink: `//*[text()="Rank Formulas"]`,
    },

    rankFormCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        rankFormBox: `[id="adminListsRankFormulaGrid-body"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`,
        rankFormBoxB: `[id="adminListsRankFormulaGrid-body"] [data-recordindex="3"] [role="row"] [tabindex="-1"]`,
        rankFormBoxC: `[id="adminListsRankFormulaGrid-body"] [data-recordindex="4"] [role="row"] [tabindex="-1"]`
    }
}


class RankFormTypeData {
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

    listRFSelect = async() => {
        let page=this.page;
        let { rankFormLink, projListLink }=locator.admin_Page;

        await page.click(projListLink);
        // await page.waitForTimeout(1000);
        await page.click(rankFormLink);
        await page.waitForTimeout(3000);
    }

    listRFSelectData = async() => {
        let page=this.page;
        let { rankFormBox, rankFormBoxB, rankFormBoxC }=locator.rankFormCheckBox;

        await page.click(rankFormBox);
        await page.click(rankFormBoxB);
        await page.click(rankFormBoxC);
        await page.waitForTimeout(3000);
    }
}

module.exports.RankFormTypeData = RankFormTypeData;

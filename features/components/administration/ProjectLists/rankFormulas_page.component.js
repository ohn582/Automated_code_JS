const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [id="r1NavToggle"]`,
        projListLink: `//*[text()="Project Lists"]`,
        rankFormLink: `//*[text()="Rank Formulas"]`,
    },

    rankFormNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        rankFormAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    rankFormCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        rankFormBox: `[data-componentid="r1MainViewPort"] [id="adminListsRankFormulaGrid-body"] [data-recordindex="2"] [data-columnid="checkcolumn-1053"]`,
        rankFormBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsRankFormulaGrid-body"] [data-recordindex="3"] [data-columnid="checkcolumn-1053"]`,
        rankFormBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsRankFormulaGrid-body"] [data-recordindex="4"] [data-columnid="checkcolumn-1053"]`
    }
}


class RankFormTypeData {
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

    listRFAdd = async() => {
        let page=this.page;
        let { rankFormAddBtn }=locator.rankFormNav;

        await page.click(rankFormAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.RankFormTypeData = RankFormTypeData;

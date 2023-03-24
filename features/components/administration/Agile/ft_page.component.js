const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        agileListLink: `//*[text()="Agile"]`,
        ftLink: `//*[text()="Feature Types"]`,
    },

    ftNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ftAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    ftCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        ftBox: `[id="adminListsFeatureTypeGrid-bodyWrap"] [data-recordindex="2"] [data-columnid="checkcolumn-1046"]`,
        ftBoxB: `[id="adminListsFeatureTypeGrid-bodyWrap"] [data-recordindex="3"] [data-columnid="checkcolumn-1046"]`,
        ftBoxC: `[id="adminListsFeatureTypeGrid-bodyWrap"] [data-recordindex="4"] [data-columnid="checkcolumn-1046"]`
    }
}


class FeatureTypesData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    agileListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listFTSelect = async () => {
        let page = this.page;
        let { ftLink, agileListLink } = locator.admin_Page;

        await page.click(agileListLink);
        // await page.waitForTimeout(1000);
        await page.click(ftLink);
        await page.waitForTimeout(3000);
    }

    listFTSelectData = async () => {
        let page = this.page;
        let { ftBox, ftBoxB, ftBoxC } = locator.ftCheckBox;

        await page.click(ftBox);
        await page.click(ftBoxB);
        await page.click(ftBoxC);
        await page.waitForTimeout(3000);
    }

    listFTAdd = async () => {
        let page = this.page;
        let { ftAddBtn } = locator.ftNav;

        await page.click(ftAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.FeatureTypesData = FeatureTypesData;

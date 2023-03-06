const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        proficienciesLink: `//*[text()="Proficiencies"]`,
    },

    proficienciesNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        proficienciesAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    proficienciesCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        proficienciesBox: `[data-componentid="r1MainViewPort"] [id="adminListsProficiencyGrid-bodyWrap"] [data-recordindex="3"] [data-columnid="checkcolumn-1040"]`,
        proficienciesBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsProficiencyGrid-bodyWrap"] [data-recordindex="4"] [data-columnid="checkcolumn-1040"]`,
        proficienciesBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsProficiencyGrid-bodyWrap"] [data-recordindex="5"] [data-columnid="checkcolumn-1040"]`
    }
}


class ProficienciesTypeData {
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

    listProficienciesSelect = async () => {
        let page = this.page;
        let { proficienciesLink, resListLink } = locator.admin_Page;

        await page.click(resListLink);
        // await page.waitForTimeout(1000);
        await page.click(proficienciesLink);
        await page.waitForTimeout(3000);
    }

    listProficienciesSelectData = async () => {
        let page = this.page;
        let { proficienciesBox, proficienciesBoxB, proficienciesBoxC } = locator.proficienciesCheckBox;

        await page.click(proficienciesBox);
        await page.click(proficienciesBoxB);
        await page.click(proficienciesBoxC);
        await page.waitForTimeout(3000);
    }

    listProficienciesAdd = async () => {
        let page = this.page;
        let { proficienciesAddBtn } = locator.proficienciesNav;

        await page.click(proficienciesAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.ProficienciesTypeData = ProficienciesTypeData;

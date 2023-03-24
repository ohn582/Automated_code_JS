const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1018"] [data-componentid="r1NavToggle"]`,
        otherLink: `//*[text()="Other"]`,
        scenarStatLink: `//*[text()="Scenario Status"]`,
    },

    scenarStatNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        scenarStatAddBtn: `[id="AdminScenarioStatusGrid-bodyWrap"] [role="toolbar"] [data-qtip="Add"]`,

    },

    scenarStatCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        scenarStatBox: `[data-componentid="r1MainViewPort"] [id="AdminScenarioStatusGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="checkcolumn-1053"]`,
        scenarStatBoxB: `[data-componentid="r1MainViewPort"] [id="AdminScenarioStatusGrid-bodyWrap"] [data-recordindex="1"] [data-columnid="checkcolumn-1053"]`,
        scenarStatBoxC: `[data-componentid="r1MainViewPort"] [id="AdminScenarioStatusGrid-bodyWrap"] [data-recordindex="2"] [data-columnid="checkcolumn-1053"]`
    }
}


class ScenarioStatusData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    otherListLink = async () => {
        let page = this.page;
        let { menuSliderBtn, adminLink } = locator.admin_Page;
        await page.click(menuSliderBtn);
        // await page.waitForTimeout(1000);
        await page.click(adminLink);
        // await page.waitForTimeout(1000);
        await page.waitForTimeout(3000);
    }

    listSS_Select = async () => {
        let page = this.page;
        let { scenarStatLink, otherLink } = locator.admin_Page;

        await page.click(otherLink);
        // await page.waitForTimeout(1000);
        await page.click(scenarStatLink);
        await page.waitForTimeout(3000);
    }

    listSS_SelectData = async () => {
        let page = this.page;
        let { scenarStatBox, scenarStatBoxB, scenarStatBoxC } = locator.scenarStatCheckBox;

        await page.click(scenarStatBox);
        await page.click(scenarStatBoxB);
        await page.click(scenarStatBoxC);
        await page.waitForTimeout(3000);
    }

    listSS_Add = async () => {
        let page = this.page;
        let { scenarStatAddBtn } = locator.scenarStatNav;

        await page.click(scenarStatAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.ScenarioStatusData = ScenarioStatusData;

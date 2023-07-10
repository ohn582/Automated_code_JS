const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        otherLink: `//*[text()="Other"]`,
        scenarStatLink: `//*[text()="Scenario Status"]`,
    },

    scenarStatCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        scenarStatBox: `[data-componentid="r1MainViewPort"] [id="AdminScenarioStatusGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        scenarStatBoxB: `[data-componentid="r1MainViewPort"] [id="AdminScenarioStatusGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        scenarStatBoxC: `[data-componentid="r1MainViewPort"] [id="AdminScenarioStatusGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class ScenarioStatusData {
    constructor(page) {
        this.page = page;
    }

    // Project OBS
    otherListLink = async () => {
        let page = this.page;
        let { adminLink } = locator.admin_Page;
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
}

module.exports.ScenarioStatusData = ScenarioStatusData;

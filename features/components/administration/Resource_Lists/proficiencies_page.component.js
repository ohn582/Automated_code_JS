const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        proficienciesLink: `//*[text()="Proficiencies"]`,
    },



    proficienciesCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        proficienciesBox: `[id="adminListsProficiencyGrid-bodyWrap"] [data-recordindex="0"] [role="row"] [tabindex="-1"]`,
        proficienciesBoxB: `[id="adminListsProficiencyGrid-bodyWrap"] [data-recordindex="1"] [role="row"] [tabindex="-1"]`,
        proficienciesBoxC: `[id="adminListsProficiencyGrid-bodyWrap"] [data-recordindex="2"] [role="row"] [tabindex="-1"]`
    }
}


class ProficienciesTypeData {
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
}

module.exports.ProficienciesTypeData = ProficienciesTypeData;

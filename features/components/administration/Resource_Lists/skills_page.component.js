const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `[id="R1WestNav"] [id="R1MainNavigationTree"] [data-componentid="ext-customtreelistitem-8"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        skillsLink: `//*[text()="Skills"]`,
    },



    skillsCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        skillsBox: `[id="adminListsSkillGrid-bodyWrap"] [data-recordindex="4"] [role="row"] [tabindex="-1"]`,
        skillsBoxB: `[id="adminListsSkillGrid-bodyWrap"] [data-recordindex="5"] [role="row"] [tabindex="-1"]`,
        skillsBoxC: `[id="adminListsSkillGrid-bodyWrap"] [data-recordindex="6"] [role="row"] [tabindex="-1"]`
    }
}


class skillsTypeData {
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

    listSkillsSelect = async () => {
        let page = this.page;
        let { skillsLink, resListLink } = locator.admin_Page;

        await page.click(resListLink);
        // await page.waitForTimeout(1000);
        await page.click(skillsLink);
        await page.waitForTimeout(3000);
    }

    listSkillsSelectData = async () => {
        let page = this.page;
        let { skillsBox, skillsBoxB, skillsBoxC } = locator.skillsCheckBox;

        await page.click(skillsBox);
        await page.click(skillsBoxB);
        await page.click(skillsBoxC);
        await page.waitForTimeout(3000);
    }
}

module.exports.skillsTypeData = skillsTypeData;

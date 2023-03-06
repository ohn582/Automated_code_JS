const locator = {
    admin_Page: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        adminLink: `//*[text()="Administration"]`,
        menuSliderBtn: `[data-componentid="r1MainViewPort"] [id="toolbar-1010"] [data-componentid="r1NavToggle"]`,
        resListLink: `//*[text()="Resource Lists"]`,
        skillsLink: `//*[text()="Skills"]`,
    },

    skillsNav: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        skillsAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    skillsCheckBox: {
        // adminLink: `[id="panel-1021-bodyWrap"] [id="R1Navigation"] [data-recordid="76"]`,
        skillsBox: `[data-componentid="r1MainViewPort"] [id="adminListsSkillGrid-bodyWrap"] [data-recordindex="12"] [data-columnid="checkcolumn-1041"]`,
        skillsBoxB: `[data-componentid="r1MainViewPort"] [id="adminListsSkillGrid-bodyWrap"] [data-recordindex="13"] [data-columnid="checkcolumn-1041"]`,
        skillsBoxC: `[data-componentid="r1MainViewPort"] [id="adminListsSkillGrid-bodyWrap"] [data-recordindex="14"] [data-columnid="checkcolumn-1041"]`
    }
}


class skillsTypeData {
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

    listSkillsAdd = async () => {
        let page = this.page;
        let { skillsAddBtn } = locator.skillsNav;

        await page.click(skillsAddBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.skillsTypeData = skillsTypeData;

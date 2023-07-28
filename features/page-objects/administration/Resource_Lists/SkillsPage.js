const { action } = require('../../../utilities/action')

const locators = {
    skillsNav: {
        skillsAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
    },

    skillsData: {
        //Creating a data
        skillsName: `[id="adminListsSkillGrid"] [data-recordindex="0"] [role="presentation"]`,
        // domainsName: `//*[text()="New Domain"]`,


        skillsNameA: `//*[text()="tes1"]`,
        skillsNameB: `//*[text()="tes2"]`,
        skillsNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsSkillGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsSkillGrid"] [role="toolbar"] [data-componentid="adminListsSkillGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="r1AdminMain"] [id="adminListsSkillGrid"] [id="toolbar"] [aria-label="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    skillsLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class SkillsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listSkillsWriteA = async () => {
        let page = this.page;
        let { skillsName } = locators.skillsData;
        let { skillsAddBtn } = locators.skillsNav;
        // await page.waitForTimeout(3000);
        await page.click(skillsAddBtn);

        let textInput = await page.$(skillsName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listSkillsWriteB = async () => {
        let page = this.page;
        let { skillsName } = locators.skillsData;
        let { skillsAddBtn } = locators.skillsNav;
        // await page.waitForTimeout(3000);
        await page.click(skillsAddBtn);

        let textInput = await page.$(skillsName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listSkillsWriteC = async () => {
        let page = this.page;
        let { skillsName } = locators.skillsData;
        let { skillsAddBtn } = locators.skillsNav;
        // await page.waitForTimeout(3000);
        await page.click(skillsAddBtn);

        let textInput = await page.$(skillsName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    skillsReTypeData = async () => {
        let page = this.page;
        let { skillsNameA } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    skillsReTypeDataB = async () => {
        let page = this.page;
        let { skillsNameB } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    skillsReTypeDataC = async () => {
        let page = this.page;
        let { skillsNameC } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsNameC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listSkillsDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listSkillsSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listSkillsReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.skillsLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.SkillsPage = SkillsPage;

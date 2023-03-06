const { action } = require('../../../utilities/action')

const locators = {
    skillsNav: {
        skillsAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsSkillsGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    skillsData: {
        //Creating a data
        skillsName: `[id="adminListsSkillGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1029"]`,
        skillsPartition: `[id="adminListsSkillGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1033"]`,
        // domainsName: `//*[text()="New Domain"]`,


        skillsNameA: `[id="adminListsSkillGrid"] [data-recordindex="13"] [data-columnid="gridcolumn-1029"]`,
        skillsPartitionA: `[id="adminListsSkillGrid"] [data-recordindex="13"] [data-columnid="gridcolumn-1033"]`,

        skillsNameB: `[id="adminListsSkillGrid"] [data-recordindex="14"] [data-columnid="gridcolumn-1029"]`,
        skillsPartitionB: `[id="adminListsSkillGrid"] [data-recordindex="14"] [data-columnid="gridcolumn-1033"]`,

        skillsNameC: `[id="adminListsSkillGrid"] [data-recordindex="15"] [data-columnid="gridcolumn-1029"]`,
        skillsPartitionC: `[id="adminListsSkillGrid"] [data-recordindex="15"] [data-columnid="gridcolumn-1033"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsSkillGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsSkillGrid"] [role="toolbar"] [data-componentid="adminListsSkillGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsSkillGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class SkillsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listSkillsWriteA = async () => {
        let page = this.page;
        let { skillsName, skillsPartition } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsName);
        let textInputB = await page.$(skillsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listSkillsWriteB = async () => {
        let page = this.page;
        let { skillsName, skillsPartition } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsName);
        let textInputB = await page.$(skillsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listSkillsWriteC = async () => {
        let page = this.page;
        let { skillsName, skillsPartition } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsName);
        let textInputB = await page.$(skillsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    skillsReTypeData = async () => {
        let page = this.page;
        let { skillsNameA, skillsPartitionA } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsNameA);
        let textInputB = await page.$(skillsPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    skillsReTypeDataB = async () => {
        let page = this.page;
        let { skillsNameB, skillsPartitionB } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsNameB);
        let textInputB = await page.$(skillsPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    skillsReTypeDataC = async () => {
        let page = this.page;
        let { skillsNameC, skillsPartitionC } = locators.skillsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(skillsNameC);
        let textInputB = await page.$(skillsPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
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
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.SkillsPage = SkillsPage;

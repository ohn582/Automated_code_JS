const { action } = require('../../../utilities/action')

const locators = {
    rankFormNav: {
        rankFormAddBtn: `[id="adminListsRankFormulaGrid"] [role="toolbar"] [data-qtip="Add"]`,
    },

    rankFormData: {
        //Creating a data
        rankFormName: `[id="adminListsRankFormulaGrid-bodyWrap"] [data-recordindex="0"] [role="presentation"]`,
        // rankFormName: `//*[text()="New Rank Formula"]`,

        rankFormNameA: `//*[text()="tes1"]`,
        rankFormNameB: `//*[text()="tes2"]`,
        rankFormNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsRankFormulaGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsRankFormulaGrid"] [role="toolbar"] [data-qtip="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="adminListsRankFormulaGrid"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    rankFormLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}



class RankFormPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listRankFormWriteA = async () => {
        let page = this.page;
        let { rankFormAddBtn }=locators.rankFormNav;
        let { rankFormName } = locators.rankFormData;

        await page.click(rankFormAddBtn);

        let textInput = await page.$(rankFormName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listRankFormWriteB = async () => {
        let page = this.page;
        let { rankFormAddBtn }=locators.rankFormNav;
        let { rankFormName } = locators.rankFormData;

        await page.click(rankFormAddBtn);

        let textInput = await page.$(rankFormName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listRankFormWriteC = async () => {
        let page = this.page;
        let { rankFormAddBtn }=locators.rankFormNav;
        let { rankFormName } = locators.rankFormData;

        await page.click(rankFormAddBtn);

        let textInput = await page.$(rankFormName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    rankFormReTypeData = async () => {
        let page = this.page;
        let { rankFormNameA, rankFormFormulaA } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        await page.dblclick(rankFormNameA)
        await page.keyboard.type('Re-Type 1');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('EFG');
        // await page.waitForTimeout(3000);
    }

    rankFormReTypeDataB = async () => {
        let page = this.page;
        let { rankFormNameB, rankFormFormulaA } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        await page.dblclick(rankFormNameB)
        await page.keyboard.type('Re-Type 2');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('JKL');
        // await page.waitForTimeout(3000);
    }

    rankFormReTypeDataC = async () => {
        let page = this.page;
        let { rankFormNameC, rankFormFormulaA } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        await page.dblclick(rankFormNameC)
        await page.keyboard.type('Re-Type 3');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('MNO');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listRankFormDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listRankFormSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listRankFormReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.rankFormLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.RankFormPage = RankFormPage;

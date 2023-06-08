const { action } = require('../../../utilities/action')

const locators = {
    rankFormNav: {
        rankFormAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
    },

    rankFormData: {
        //Creating a data
        rankFormName: `//*[text()="New Rank Formula"]`,

        rankFormNameDataA: `//*[text()="New Rank tes1"]`,
        rankFormNameDataB: `//*[text()="New Rank tes2"]`,
        rankFormNameDataC: `//*[text()="New Rank tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminMainContainer"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
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
        // await page.waitForTimeout(3000);
        // let textInput = await page.$(rankFormNameB, el=>el.getAttribute("id"));

        await page.click(rankFormAddBtn);
        await page.dblclick(rankFormName);

        // await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listRankFormWriteB = async () => {
        let page = this.page;
        let { rankFormAddBtn }=locators.rankFormNav;
        let { rankFormName } = locators.rankFormData;
        // await page.waitForTimeout(3000);
        // let textInput = await page.$(rankFormNameB, el=>el.getAttribute("id"));

        await page.click(rankFormAddBtn);
        await page.dblclick(rankFormName);

        // await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listRankFormWriteC = async () => {
        let page = this.page;
        let { rankFormAddBtn }=locators.rankFormNav;
        let { rankFormName } = locators.rankFormData;
        // await page.waitForTimeout(3000);
        // let textInput = await page.$(rankFormNameB, el=>el.getAttribute("id"));

        await page.click(rankFormAddBtn);
        await page.dblclick(rankFormName);

        // await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    rankFormReTypeData = async () => {
        let page = this.page;
        let { rankFormNameA, rankFormFormulaA } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rankFormNameA);
        let textInputB = await page.$(rankFormFormulaA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('EFG');
        // await page.waitForTimeout(3000);
    }

    rankFormReTypeDataB = async () => {
        let page = this.page;
        let { rankFormNameB, rankFormFormulaB } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rankFormNameB);
        let textInputB = await page.$(rankFormFormulaB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('JKL');
        // await page.waitForTimeout(3000);
    }

    rankFormReTypeDataC = async () => {
        let page = this.page;
        let { rankFormNameC, rankFormFormulaC } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rankFormNameC);
        let textInputB = await page.$(rankFormFormulaC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('MNO');
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
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.RankFormPage = RankFormPage;

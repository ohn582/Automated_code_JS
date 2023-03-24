const { action } = require('../../../utilities/action')

const locators = {
    rankFormNav: {
        rankFormAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsRankFormulaGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    rankFormData: {
        //Creating a data
        rankFormName: `[id="gridview-1046"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        rankFormFormula: `[id="gridview-1046"] [data-recordindex="0"] [data-columnid="gridcolumn-1037"]`,
        // domainsName: `//*[text()="New Domain"]`,


        rankFormNameA: `[id="gridview-1046"] [data-recordindex="4"] [data-columnid="gridcolumn-1036"]`,
        rankFormFormulaA: `[id="gridview-1046"] [data-recordindex="4"] [data-columnid="gridcolumn-1037"]`,

        rankFormNameB: `[id="gridview-1046"] [data-recordindex="5"] [data-columnid="gridcolumn-1036"]`,
        rankFormFormulaB: `[id="gridview-1046"] [data-recordindex="5"] [data-columnid="gridcolumn-1037"]`,

        rankFormNameC: `[id="gridview-1046"] [data-recordindex="6"] [data-columnid="gridcolumn-1036"]`,
        rankFormFormulaC: `[id="gridview-1046"] [data-recordindex="6"] [data-columnid="gridcolumn-1037"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-componentid="adminListsRankFormulaGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
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
        let { rankFormName, rankFormFormula } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rankFormName);
        let textInputB = await page.$(rankFormFormula);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('ABC');
        // await page.waitForTimeout(3000);
    }

    listRankFormWriteB = async () => {
        let page = this.page;
        let { rankFormName, rankFormFormula } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rankFormName);
        let textInputB = await page.$(rankFormFormula);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('123');
        // await page.waitForTimeout(3000);
    }

    listRankFormWriteC = async () => {
        let page = this.page;
        let { rankFormName, rankFormFormula } = locators.rankFormData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rankFormName);
        let textInputB = await page.$(rankFormFormula);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('QRS');
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

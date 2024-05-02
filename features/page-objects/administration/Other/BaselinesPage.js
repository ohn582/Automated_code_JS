const { action } = require('../../../utilities/action')

const locators = {
    baseNav: {
        baseAddBtn: `[id="adminListsBaselineTypeGrid"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    baseData: {
        //Creating a data
        baseName: `[id="adminBaselineGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1035"]`,

        baseNameA: `//*[text()="tes1"]`,
        baseNameB: `//*[text()="tes2"]`,
        baseNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminBaselineGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminBaselineGrid"] [role="toolbar"] [data-componentid="adminBaselineGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminBaselineGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class BaselinePage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listBaselineWriteA = async () => {
        let page = this.page;
        let { baseAddBtn } = locators.baseNav;
        let { baseName } = locators.baseData;
        // await page.waitForTimeout(3000);

        await page.click(baseAddBtn);

        let textInput = await page.$(baseName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listBaselineWriteB = async () => {
        let page = this.page;
        let { baseAddBtn } = locators.baseNav;
        let { baseName } = locators.baseData;
        // await page.waitForTimeout(3000);

        await page.click(baseAddBtn);

        let textInput = await page.$(baseName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listBaselineWriteC = async () => {
        let page = this.page;
        let { baseAddBtn } = locators.baseNav;
        let { baseName } = locators.baseData;
        // await page.waitForTimeout(3000);

        await page.click(baseAddBtn);

        let textInput = await page.$(baseName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    baselineReTypeData = async () => {
        let page = this.page;
        let { baseNameA, baseVerisonA } = locators.baseData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseNameA);
        let textInputB = await page.$(baseVerisonA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('34');
        // await page.waitForTimeout(3000);
    }

    baselineReTypeDataB = async () => {
        let page = this.page;
        let { baseNameB, baseVerisonB } = locators.baseData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseNameB);
        let textInputB = await page.$(baseVerisonB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('55');
        // await page.waitForTimeout(3000);
    }

    baselineReTypeDataC = async () => {
        let page = this.page;
        let { baseNameC, baseVerisonC } = locators.baseData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseNameC);
        let textInputB = await page.$(baseVerisonC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('66');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listBaselineDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.waitForTimeout(2000);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listBaselineSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.waitForTimeout(2000);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

    listBaselineReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.waitForTimeout(2000);
        await page.click(reloadNavBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.BaselinePage = BaselinePage;

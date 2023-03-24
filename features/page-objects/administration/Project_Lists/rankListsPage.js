const { action } = require('../../../utilities/action')

const locators = {
    rlNav: {
        // rlAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsBaselineTypeGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
        rlAddBtnName: `[id="AdminListGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,

        // rlAddBtnValue: `[id="AdminUserDefinedListGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,

        //WindowNav
        rlAddBtnWindow: `[role="alertdialog"] [id="messagebox-1009-toolbar"] [tabindex="0"]`,
    },
    
    rlData: {
        //Creating a data
        rlName: `[role="alertdialog"] [id="RankNewList"]`,



        rlListItemName: `[id="AdminListItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1049"]`,
        rlColor: `[id="AdminListItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1052"]`,



        rlListItemNameA: `[id="AdminListItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1049"]`,
        rlColorA: `[id="AdminListItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1052"]`,

        rlListItemNameB: `[id="AdminListItemGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1049"]`,
        rlColorB: `[id="AdminListItemGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1052"]`,

        rlListItemNameC: `[id="AdminListItemGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1049"]`,
        rlColorC: `[id="AdminListItemGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1052"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminListGrid"] [role="toolbar"] [aria-label="Remove"]`,
        yesDeleteBtn: `[data-componentid="messagebox-1009"] [data-componentid="button-1015"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminListGrid"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminListGrid"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class RankListsPage {
    constructor(page) {
        this.page = page;
    }

    //Sponsor: Create
    nameRLWrite = async () => {
        let page = this.page;
        let { rlName } = locators.rlData;
        let { rlAddBtnName, rlAddBtnWindow } = locators.rlNav;
        // await page.waitForTimeout(3000);

        await page.click(rlAddBtnName);
        let textInput = await page.$(rlName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Field 1');
        await page.click(rlAddBtnWindow);
        // await page.waitForTimeout(3000);
    }





    listRLWriteA = async () => {
        let page = this.page;
        let { rlListItemName, rlColor } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemName);
        let textInputB = await page.$(rlColor);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('TestingA');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Yellow');
        // await page.waitForTimeout(3000);
    }

    listRLWriteB = async () => {
        let page = this.page;
        let { rlListItemName, rlColor } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemName);
        let textInputB = await page.$(rlColor);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('TestingB');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Green');
        // await page.waitForTimeout(3000);
    }

    listRLWriteC = async () => {
        let page = this.page;
        let { rlListItemName, rlColor } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemName);
        let textInputB = await page.$(rlColor);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('TestingC');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Blue');
        // await page.waitForTimeout(3000);
    }





    //Sponsor: Update
    rl_ReTypeData = async () => {
        let page = this.page;
        let { rlListItemNameA, rlColorA } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemNameA);
        let textInputB = await page.$(rlColorA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Red');
        // await page.waitForTimeout(3000);
    }

    rl_ReTypeDataB = async () => {
        let page = this.page;
        let { rlListItemNameB, rlColorB } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemNameB);
        let textInputB = await page.$(rlColorB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Blue');
        // await page.waitForTimeout(3000);
    }

    rl_ReTypeDataC = async () => {
        let page = this.page;
        let { rlListItemNameC, rlColorC } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemNameC);
        let textInputB = await page.$(rlColorC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Green');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listRLDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listRLSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listRLReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.RankListsPage = RankListsPage;

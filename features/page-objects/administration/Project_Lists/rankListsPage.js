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

        rlListItemReTypeA: `//*[text()="Field 1"]`,
        rlListItemReTypeB: `//*[text()="Field 2"]`,
        rlListItemReTypeC: `//*[text()="Field 3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminListGrid"] [role="toolbar"] [aria-label="Remove"]`,
        yesDeleteBtn: `[data-componentid="messagebox-1009"] [data-componentid="button-1015"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminListGrid"] [role="toolbar"] [aria-label="Save"]`,
        saveCloseDialog: `[id="SaveProgressDialog_header"] [id="SaveProgressDialog_header"] [data-qtip="Close dialog"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminListGrid"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    baseTypeLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
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

    nameRLWriteB = async () => {
        let page = this.page;
        let { rlName } = locators.rlData;
        let { rlAddBtnName, rlAddBtnWindow } = locators.rlNav;
        // await page.waitForTimeout(3000);

        await page.click(rlAddBtnName);
        let textInput = await page.$(rlName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Field 2');
        await page.click(rlAddBtnWindow);
        // await page.waitForTimeout(3000);
    }

    nameRLWriteC = async () => {
        let page = this.page;
        let { rlName } = locators.rlData;
        let { rlAddBtnName, rlAddBtnWindow } = locators.rlNav;
        // await page.waitForTimeout(3000);

        await page.click(rlAddBtnName);
        let textInput = await page.$(rlName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Field 3');
        await page.click(rlAddBtnWindow);
        // await page.waitForTimeout(3000);
    }





    //Sponsor: Update
    rl_ReTypeData = async () => {
        let page = this.page;
        let { rlListItemReTypeA } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemReTypeA);

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        await page.waitForTimeout(1000);
    }

    rl_ReTypeDataB = async () => {
        let page = this.page;
        let { rlListItemReTypeB } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemReTypeB);

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await page.waitForTimeout(1000);
    }

    rl_ReTypeDataC = async () => {
        let page = this.page;
        let { rlListItemReTypeC } = locators.rlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rlListItemReTypeC);

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await page.waitForTimeout(1000);
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

    listRLSaveClosed = async () => {
        let page = this.page;
        let { saveBtn, saveOK, saveCloseDialog } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveCloseDialog)
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listRLReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.baseTypeLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.RankListsPage = RankListsPage;

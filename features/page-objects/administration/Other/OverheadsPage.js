const { action } = require('../../../utilities/action')

const locators = {
    overheadNav: {
        overAddBtn: `[id="adminListsOverheadGrid"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    overheadData: {
        //Creating a data
        overheadName: `[id="adminListsOverheadGrid-bodyWrap"] [data-recordindex="0"] [role="presentation"]`,

        overheadNameA: `//*[text()="tes1"]`,
        overheadNameB: `//*[text()="tes2"]`,
        overheadNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsOverheadGrid-bodyWrap"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsOverheadGrid-bodyWrap"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="toolbar"] [data-componentid="adminListsOverheadGridReload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    overheadLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class OverheadsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listOverWriteA = async () => {
        let page = this.page;
        let { overAddBtn } = locators.overheadNav;
        let { overheadName } = locators.overheadData;
        // await page.waitForTimeout(3000);

        await page.click(overAddBtn);

        let textInput = await page.$(overheadName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listOverWriteB = async () => {
        let page = this.page;
        let { overAddBtn } = locators.overheadNav;
        let { overheadName } = locators.overheadData;
        // await page.waitForTimeout(3000);

        await page.click(overAddBtn);

        let textInput = await page.$(overheadName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listOverWriteC = async () => {
        let page = this.page;
        let { overAddBtn } = locators.overheadNav;
        let { overheadName } = locators.overheadData;
        // await page.waitForTimeout(3000);

        await page.click(overAddBtn);

        let textInput = await page.$(overheadName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    overReTypeData = async () => {
        let page = this.page;
        let { overheadNameA } = locators.overheadData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(overheadNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    overReTypeDataB = async () => {
        let page = this.page;
        let { overheadNameB } = locators.overheadData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(overheadNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    overReTypeDataC = async () => {
        let page = this.page;
        let { overheadNameC } = locators.overheadData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(overheadNameC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listOverDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listOverSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listOverheadReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.overheadLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.OverheadsPage = OverheadsPage;

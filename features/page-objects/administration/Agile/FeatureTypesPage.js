const { action } = require('../../../utilities/action')

const locators = {
    ftNav: {
        ftAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    ftData: {
        //Creating a data
        ftHeaderName: `[id="adminListsFeatureTypeGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        ftNameA: `//*[text()="tes1"]`,
        ftNameB: `//*[text()="tes2"]`,
        ftNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsFeatureTypeGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsFeatureTypeGrid"] [role="toolbar"] [data-componentid="adminListsFeatureTypeGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsFeatureTypeGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    ftLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class FeatureTypesPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listFTWriteA = async () => {
        let page = this.page;
        let { ftAddBtn } = locators.ftNav;
        let { ftHeaderName } = locators.ftData;
        // await page.waitForTimeout(3000);

        await page.click(ftAddBtn);

        let textInput = await page.$(ftHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listFTWriteB = async () => {
        let page = this.page;
        let { ftAddBtn } = locators.ftNav;
        let { ftHeaderName } = locators.ftData;
        // await page.waitForTimeout(3000);

        await page.click(ftAddBtn);

        let textInput = await page.$(ftHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listFTWriteC = async () => {
        let page = this.page;
        let { ftAddBtn } = locators.ftNav;
        let { ftHeaderName } = locators.ftData;
        // await page.waitForTimeout(3000);

        await page.click(ftAddBtn);

        let textInput = await page.$(ftHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    featureTypesReTypeData = async () => {
        let page = this.page;
        let { ftNameA } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    featureTypesReTypeDataB = async () => {
        let page = this.page;
        let { ftNameB } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    featureTypesReTypeDataC = async () => {
        let page = this.page;
        let { ftNameC } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftNameC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listFTDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listFTSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listFTReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.ftLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.FeatureTypesPage = FeatureTypesPage;

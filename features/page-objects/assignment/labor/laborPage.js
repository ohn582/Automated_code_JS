const { action } = require('../../../utilities/action')

const locators = {
    baseTypeNav: {
        baseTypeAddBtn: `[id="adminListsBaselineTypeGrid"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
    },

    baseTypeData: {
        //Creating a data
        baseTypeName: `[id="adminListsBaselineTypeGrid-bodyWrap"] [data-recordindex="0"] [role="presentation"]`,
        // domainsName: `//*[text()="New Domain"]`,

        baseTypeNameA: `//*[text()="tes1"]`,
        baseTypeNameB: `//*[text()="tes2"]`,
        baseTypeNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsBaselineTypeGrid-bodyWrap"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsBaselineTypeGrid-bodyWrap"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    baseTypeLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class laborPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    laborCreateDataA = async () => {
        let page = this.page;
        let { baseTypeAddBtn } = locators.baseTypeNav;
        let { baseTypeName } = locators.baseTypeData;
        // await page.waitForTimeout(3000);

        await page.click(baseTypeAddBtn);
        
        let textInput = await page.$(baseTypeName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    






    //Sponsor: Update
    bTReTypeData = async () => {
        let page = this.page;
        let { baseTypeNameA } = locators.baseTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseTypeNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    




    //Sponsor: Delete
    listBTDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }
}

module.exports.laborPage = laborPage;

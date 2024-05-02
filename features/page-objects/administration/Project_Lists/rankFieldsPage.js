const { action } = require('../../../utilities/action')

const locators = {
    rfNav: {
        rfAddBtn: `[id="AdminRankFieldGrid-bodyWrap"] [role="toolbar"] [data-componentid="AdminRankFieldAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    rfData: {
        //Creating a data
        rfName: `[id="AdminRankFieldGrid-body"] [data-recordindex="0"] [role="presentation"]`,
        // rfName: `//*[text()="New Rank Field"]`,

        rfNameA: `//*[text()="tes1"]`,
        rfNameB: `//*[text()="tes2"]`,
        rfNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminRankFieldGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminRankFieldGrid"] [role="toolbar"] [data-componentid="AdminRankFieldSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminRankFieldGrid"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    rfLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class rfPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listRFWriteA = async () => {
        let page = this.page;
        let { rfAddBtn }=locators.rfNav;
        let { rfName } = locators.rfData;
        // await page.waitForTimeout(3000);
        
        await page.click(rfAddBtn);
        
        let textInput = await page.$(rfName, el=>el.getAttribute("id"));
        // await page.click(rfName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }
    

    listRFWriteB = async () => {
        let page = this.page;
        let { rfAddBtn }=locators.rfNav;
        let { rfName } = locators.rfData;
        // await page.waitForTimeout(3000);
        
        await page.click(rfAddBtn);
        
        let textInput = await page.$(rfName, el=>el.getAttribute("id"));
        // await page.click(rfName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listRFWriteC = async () => {
        let page = this.page;
        let { rfAddBtn }=locators.rfNav;
        let { rfName } = locators.rfData;
        // await page.waitForTimeout(3000);
        
        await page.click(rfAddBtn);
        
        let textInput = await page.$(rfName, el=>el.getAttribute("id"));
        // await page.click(rfName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }




    //Sponsor: Update
    rfReTypeData = async () => {
        let page = this.page;
        let { rfNameA, rfDescriptionA } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfNameA);
        // let textInputB = await page.$(rfDescriptionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('API');

        // await page.waitForTimeout(3000);
    }

    rfReTypeDataB = async () => {
        let page = this.page;
        let { rfNameB, rfDescriptionB } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfNameB);
        // let textInputB = await page.$(rfDescriptionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    rfReTypeDataC = async () => {
        let page = this.page;
        let { rfNameC, rfDescriptionC } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfNameC);
        // let textInputB = await page.$(rfDescriptionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listRFDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listRFSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listRFReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.rfLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.rfPage = rfPage;

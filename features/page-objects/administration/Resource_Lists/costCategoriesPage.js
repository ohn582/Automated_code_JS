const { action } = require('../../../utilities/action')

const locators = {
    ccNav: {
        ccAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    ccData: {
        //Creating a data
        ccName: `[id="adminListsCostCategoryGrid"] [data-recordindex="0"] [role="presentation"]`,

        ccNameA: `//*[text()="tes1"]`,
        ccNameB: `//*[text()="tes2"]`,
        ccNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsCostCategoryGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCostCategoryGrid"] [role="toolbar"] [data-componentid="adminListsCostCategoryGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="r1AdminMain"] [id="adminListsCostCategoryGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    ccLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class ccPage {
    constructor(page) {
        this.page = page;
    }

    //Sponsor: Create
    listCCWriteA = async() => {
        let page=this.page;
        let { ccAddBtn }=locators.ccNav;
        let { ccName }=locators.ccData;
        // await page.waitForTimeout(3000);
        await page.click(ccAddBtn);
        
        let textInput = await page.$(ccName, el=>el.getAttribute("id"));

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listCCWriteB = async() => {
        let page=this.page;
        let { ccAddBtn }=locators.ccNav;
        let { ccName }=locators.ccData;
        // await page.waitForTimeout(3000);
        await page.click(ccAddBtn);
        
        let textInput = await page.$(ccName, el=>el.getAttribute("id"));

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listCCWriteC = async() => {
        let page=this.page;
        let { ccAddBtn }=locators.ccNav;
        let { ccName }=locators.ccData;
        // await page.waitForTimeout(3000);
        await page.click(ccAddBtn);
        
        let textInput = await page.$(ccName, el=>el.getAttribute("id"));

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    ccReTypeData = async() => {
        let page=this.page;
        let { ccNameA }=locators.ccData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(ccNameA);  
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    ccReTypeDataB = async() => {
        let page=this.page;
        let { ccNameB }=locators.ccData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(ccNameB);  
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }
    
    ccReTypeDataC = async() => {
        let page=this.page;
        let { ccNameC }=locators.ccData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(ccNameC); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        // await page.waitForTimeout(3000);
    }

    
    

    //Sponsor: Delete
    listCCDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listCCSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listCCReload = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.ccLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.ccPage = ccPage;

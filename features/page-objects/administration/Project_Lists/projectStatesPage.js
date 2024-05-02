const { action } = require('../../../utilities/action')

const locators = {
    psNav: {
        psAddBtn: `[id="adminListsProjectStateGrid-bodyWrap"] [role="toolbar"] [data-componentid="adminListsProjectStateGridAdd"]`,
    },

    psData: {
        //Creating a data
        psName: `[id="adminListsProjectStateGrid-body"] [data-recordindex="0"] [role="presentation"]`,
        // domainsName: `//*[text()="New Domain"]`,

        psNameA: `//*[text()="tes1"]`,
        psNameB: `//*[text()="tes2"]`,
        psNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsProjectStateGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsProjectStateGrid"] [role="toolbar"] [data-componentid="adminListsProjectStateGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="r1AdminMain"] [id="toolbar"] [id="adminListsProjectStateGridReload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    psLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class psPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listPSWriteA = async() => {
        let page=this.page;
        let { psName }=locators.psData;
        let { psAddBtn }=locators.psNav;
        await page.click(psAddBtn);
        // await page.waitForTimeout(3000);

        let textInput = await page.$(psName, el=>el.getAttribute("id"));

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await page.waitForTimeout(1000);
    }

    listPSWriteB = async() => {
        let page=this.page;
        let { psName }=locators.psData;
        let { psAddBtn }=locators.psNav;
        await page.click(psAddBtn);
        // await page.waitForTimeout(3000);

        let textInput = await page.$(psName, el=>el.getAttribute("id"));

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await page.waitForTimeout(1000);
    }

    listPSWriteC = async() => {
        let page=this.page;
        let { psName }=locators.psData;
        let { psAddBtn }=locators.psNav;
        await page.click(psAddBtn);
        // await page.waitForTimeout(3000);

        let textInput = await page.$(psName, el=>el.getAttribute("id"));

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await page.waitForTimeout(1000);
    }




    //Sponsor: Update
    psReTypeData = async() => {
        let page=this.page;
        let { psNameA }=locators.psData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(psNameA); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        await page.waitForTimeout(1000);
    }

    psReTypeDataB = async() => {
        let page=this.page;
        let { psNameB }=locators.psData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(psNameB); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await page.waitForTimeout(1000);
    }
    
    psReTypeDataC = async() => {
        let page=this.page;
        let { psNameC }=locators.psData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(psNameC); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await page.waitForTimeout(1000);
    }

    
    

    //Sponsor: Delete
    listPSDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listPSSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listPSReload = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.psLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.psPage = psPage;

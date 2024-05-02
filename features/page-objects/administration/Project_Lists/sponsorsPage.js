const { action } = require('../../../utilities/action')

const locators = {
    sponsorsNav: {
        sponsorsAddBtn: `[id="R1TSponsors"] [role="toolbar"] [data-componentid="adminListsSponsorGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    sponsorsData: {
        //Creating a data
        sponsorsName: `[id="R1TSponsors"] [data-recordindex="0"] [role="presentation"]`,
        // sponsorsName: `[id="adminListsSponsorGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        sponsorsNameA: `//*[text()="tes1"]`,
        sponsorsNameB: `//*[text()="tes2"]`,
        sponsorsNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="R1TSponsors"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="R1TSponsors"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="R1TSponsors"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    sponsorsLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}



class sponsorsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listSponsorsWriteA = async() => {
        let page=this.page;
        let { sponsorsAddBtn }=locators.sponsorsNav;
        let { sponsorsName }=locators.sponsorsData;
        
        await page.click(sponsorsAddBtn);

        let textInput = await page.$(sponsorsName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }


    listSponsorsWriteB = async() => {
        let page=this.page;
        let { sponsorsAddBtn }=locators.sponsorsNav;
        let { sponsorsName }=locators.sponsorsData;
        
        await page.click(sponsorsAddBtn);

        let textInput = await page.$(sponsorsName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listSponsorsWriteC = async() => {
        let page=this.page;
        let { sponsorsAddBtn }=locators.sponsorsNav;
        let { sponsorsName }=locators.sponsorsData;
        
        await page.click(sponsorsAddBtn);

        let textInput = await page.$(sponsorsName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    sponsorsReTypeData = async() => {
        let page=this.page;
        let { sponsorsNameA }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(sponsorsNameA); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    sponsorsReTypeDataB = async() => {
        let page=this.page;
        let { sponsorsNameB }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(sponsorsNameB); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }
    
    sponsorsReTypeDataC = async() => {
        let page=this.page;
        let { sponsorsNameC }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(sponsorsNameC); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        // await page.waitForTimeout(3000);
    }

    
    

    //Sponsor: Delete
    listSponsorDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listSponsorSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listSponsorReload = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.sponsorsLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.sponsorsPage = sponsorsPage;

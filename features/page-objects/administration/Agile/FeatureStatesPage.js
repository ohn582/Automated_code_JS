const { action } = require('../../../utilities/action')

const locators = {
    featureStatesNav: {
        featureStatesAddBtn: `[id="adminListsFeatureStateGrid-bodyWrap"] [role="toolbar"] [data-qtip="Add"]`,
    },

    featureStatesData: {
        //Creating a data
        // featureStatesName: `[id="AdminMainContainer"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        
    
        // featureStatesHeaderName: `[id="adminListsFeatureStateGrid-bodyWrap"] [aria-label="Feature State Name"]`,
        featureStatesHeaderName: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        // domainsName: `//*[text()="New Domain"]`,

        featureStatesNameGridA: `//*[text()="tes1"]`,
        featureStatesNameReTypeA: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        featureStatesNameGridB: `//*[text()="tes2"]`,
        featureStatesNameReTypeB: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="1"] [role="presentation"]`,

        featureStatesNameGridC: `//*[text()="tes3"]`,
        featureStatesNameReTypeC: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="2"] [role="presentation"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminMainContainer"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminMainContainer"] [role="toolbar"] [id="adminListsFeatureStateGridReload"] [id="toolbar"] [data-qtip="Reload"]`,
    },

    featureStatesLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class FeatureStatesPage {
    constructor(page) {
        this.page = page;
    }


    //featureState: Create
    listFSWriteA = async () => {
        let page = this.page;
        let { featureStatesAddBtn } = locators.featureStatesNav;
        let { featureStatesHeaderName } = locators.featureStatesData;

        await page.click(featureStatesAddBtn);

        let textInput = await page.$(featureStatesHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listFSWriteB = async () => {
        let page = this.page;
        let { featureStatesAddBtn } = locators.featureStatesNav;
        let { featureStatesHeaderName } = locators.featureStatesData;

        await page.click(featureStatesAddBtn);

        let textInput = await page.$(featureStatesHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listFSWriteC = async () => {
        let page = this.page;
        let { featureStatesAddBtn } = locators.featureStatesNav;
        let { featureStatesHeaderName } = locators.featureStatesData;

        await page.click(featureStatesAddBtn);

        let textInput = await page.$(featureStatesHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //featureState: Update
    featureStateReTypeData = async () => {
        let page = this.page;
        let { featureStatesNameGridA, featureStatesNameReTypeA } = locators.featureStatesData;

        await page.dblclick(featureStatesNameGridA);
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    featureStateReTypeDataB = async () => {
        let page = this.page;
        let { featureStatesNameGridB, featureStatesNameReTypeB } = locators.featureStatesData;

        await page.dblclick(featureStatesNameGridB);
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    featureStateReTypeDataC = async () => {
        let page = this.page;
        let { featureStatesNameGridC, featureStatesNameReTypeC } = locators.featureStatesData;

        await page.dblclick(featureStatesNameGridC);
        await page.keyboard.type('Re-Type 3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listFSDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listFSSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listFSReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.featureStatesLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.FeatureStatesPage = FeatureStatesPage;

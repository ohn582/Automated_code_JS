const { action } = require('../../../utilities/action')

const locators = {
    fsNav: {
        fsAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    fsData: {
        //Creating a data
        // fsName: `[id="AdminMainContainer"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        
    
        // fsHeaderName: `[id="adminListsFeatureStateGrid-bodyWrap"] [aria-label="Feature State Name"]`,
        fsHeaderName: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        // domainsName: `//*[text()="New Domain"]`,

        fsNameGridA: `//*[text()="tes1"]`,
        fsNameReTypeA: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        fsNameGridB: `//*[text()="tes2"]`,
        fsNameReTypeB: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="1"] [role="presentation"]`,

        fsNameGridC: `//*[text()="tes3"]`,
        fsNameReTypeC: `[id="adminListsFeatureStateGrid-body"] [data-recordindex="2"] [role="presentation"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-componentid="adminListsFeatureStateGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminMainContainer"] [role="toolbar"] [id="adminListsFeatureStateGridReload"] [id="toolbar"] [data-qtip="Reload"]`,
    }

}



class FeatureStatesPage {
    constructor(page) {
        this.page = page;
    }


    //featureState: Create
    listFSWriteA = async () => {
        let page = this.page;
        let { fsAddBtn } = locators.fsNav;
        let { fsHeaderName } = locators.fsData;

        await page.click(fsAddBtn);

        let textInput = await page.$(fsHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listFSWriteB = async () => {
        let page = this.page;
        let { fsAddBtn } = locators.fsNav;
        let { fsHeaderName } = locators.fsData;

        await page.click(fsAddBtn);

        let textInput = await page.$(fsHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listFSWriteC = async () => {
        let page = this.page;
        let { fsAddBtn } = locators.fsNav;
        let { fsHeaderName } = locators.fsData;

        await page.click(fsAddBtn);

        let textInput = await page.$(fsHeaderName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //featureState: Update
    featureStateReTypeData = async () => {
        let page = this.page;
        let { fsNameGridA, fsNameReTypeA } = locators.fsData;

        await page.click(fsNameGridA);

        let textInput = await page.$(fsNameReTypeA, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    featureStateReTypeDataB = async () => {
        let page = this.page;
        let { fsNameGridB, fsNameReTypeB } = locators.fsData;

        await page.click(fsNameGridB);

        let textInput = await page.$(fsNameReTypeB, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    featureStateReTypeDataC = async () => {
        let page = this.page;
        let { fsNameGridC, fsNameReTypeC } = locators.fsData;

        await page.click(fsNameGridC);

        let textInput = await page.$(fsNameReTypeC, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
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
        let { relBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.FeatureStatesPage = FeatureStatesPage;

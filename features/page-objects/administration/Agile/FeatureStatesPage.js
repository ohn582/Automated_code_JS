const { action } = require('../../../utilities/action')

const locators = {
    fsNav: {
        fsAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsFeatureStateGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    fsData: {
        //Creating a data
        fsName: `[id="AdminMainContainer"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        // domainsName: `//*[text()="New Domain"]`,

        fsNameA: `[id="AdminMainContainer"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        fsNameB: `[id="AdminMainContainer"] [data-recordindex="1"] [data-columnid="gridcolumn-1036"]`,
        fsNameC: `[id="AdminMainContainer"] [data-recordindex="2"] [data-columnid="gridcolumn-1036"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-componentid="adminListsFeatureStateGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminMainContainer"] [role="toolbar"] [id="adminListsFeatureStateGridReload"] [id="toolbar"] [data-qtip="Reload"]`,
    }

}



class FeatureStatesPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listFSWriteA = async () => {
        let page = this.page;
        let { fsName } = locators.fsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(fsName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listFSWriteB = async () => {
        let page = this.page;
        let { fsName } = locators.fsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(fsName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listFSWriteC = async () => {
        let page = this.page;
        let { fsName } = locators.fsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(fsName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    featureStateReTypeData = async () => {
        let page = this.page;
        let { fsNameA } = locators.fsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(fsNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    featureStateReTypeDataB = async () => {
        let page = this.page;
        let { fsNameB } = locators.fsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(fsNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    featureStateReTypeDataC = async () => {
        let page = this.page;
        let { fsNameC } = locators.fsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(fsNameC);

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

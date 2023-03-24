const { action } = require('../../../utilities/action')

const locators = {
    ftNav: {
        ftAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsCostItemGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    ftData: {
        //Creating a data
        ftName: `[id="adminListsFeatureTypeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        ftPartition: `[id="adminListsFeatureTypeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1038"]`,
        // domainsName: `//*[text()="New Domain"]`,


        ftNameA: `[id="adminListsFeatureTypeGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1036"]`,
        ftPartitionA: `[id="adminListsFeatureTypeGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1038"]`,

        ftNameB: `[id="adminListsFeatureTypeGrid"] [data-recordindex="3"] [data-columnid="gridcolumn-1036"]`,
        ftPartitionB: `[id="adminListsFeatureTypeGrid"] [data-recordindex="3"] [data-columnid="gridcolumn-1038"]`,

        ftNameC: `[id="adminListsFeatureTypeGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1036"]`,
        ftPartitionC: `[id="adminListsFeatureTypeGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1038"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsFeatureTypeGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsFeatureTypeGrid"] [role="toolbar"] [data-componentid="adminListsFeatureTypeGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsFeatureTypeGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class FeatureTypesPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listFTWriteA = async () => {
        let page = this.page;
        let { ftName, ftPartition } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftName);
        let textInputB = await page.$(ftPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listFTWriteB = async () => {
        let page = this.page;
        let { ftName, ftPartition } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftName);
        let textInputB = await page.$(ftPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listFTWriteC = async () => {
        let page = this.page;
        let { ftName, ftPartition } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftName);
        let textInputB = await page.$(ftPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    featureTypesReTypeData = async () => {
        let page = this.page;
        let { ftNameA, ftPartitionA } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftNameA);
        let textInputB = await page.$(ftPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    featureTypesReTypeDataB = async () => {
        let page = this.page;
        let { ftNameB, ftPartitionB } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftNameB);
        let textInputB = await page.$(ftPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    featureTypesReTypeDataC = async () => {
        let page = this.page;
        let { ftNameC, ftPartitionC } = locators.ftData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ftNameC);
        let textInputB = await page.$(ftPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
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
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.FeatureTypesPage = FeatureTypesPage;

const { action } = require('../../../utilities/action')

const locators = {
    baseTypeNav: {
        baseTypeAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsBaselineTypeGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    baseTypeData: {
        //Creating a data
        baseTypeName: `[id="adminListsBaselineTypeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        baseTypePartition: `[id="adminListsBaselineTypeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1039"]`,
        // domainsName: `//*[text()="New Domain"]`,


        baseTypeNameA: `[id="adminListsBaselineTypeGrid"] [data-recordindex="3"] [data-columnid="gridcolumn-1036"]`,
        baseTypePartitionA: `[id="adminListsBaselineTypeGrid"] [data-recordindex="3"] [data-columnid="gridcolumn-1039"]`,

        baseTypeNameB: `[id="adminListsBaselineTypeGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1036"]`,
        baseTypePartitionB: `[id="adminListsBaselineTypeGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1039"]`,

        baseTypeNameC: `[id="adminListsBaselineTypeGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1036"]`,
        baseTypePartitionC: `[id="adminListsBaselineTypeGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1039"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsBaselineTypeGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsBaselineTypeGrid"] [role="toolbar"] [data-componentid="adminListsBaselineTypeGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class BaselineTypePage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listBTWriteA = async () => {
        let page = this.page;
        let { baseTypeName, baseTypePartition } = locators.baseTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseTypeName);
        let textInputB = await page.$(baseTypePartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listBTWriteB = async () => {
        let page = this.page;
        let { baseTypeName, baseTypePartition } = locators.baseTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseTypeName);
        let textInputB = await page.$(baseTypePartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listBTWriteC = async () => {
        let page = this.page;
        let { baseTypeName, baseTypePartition } = locators.baseTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseTypeName);
        let textInputB = await page.$(baseTypePartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    bTReTypeData = async () => {
        let page = this.page;
        let { baseTypeNameA, baseTypePartitionA } = locators.baseTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseTypeNameA);
        let textInputB = await page.$(baseTypePartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    bTReTypeDataB = async () => {
        let page = this.page;
        let { baseTypeNameB, baseTypePartitionB } = locators.baseTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseTypeNameB);
        let textInputB = await page.$(baseTypePartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    bTReTypeDataC = async () => {
        let page = this.page;
        let { baseTypeNameC, baseTypePartitionC } = locators.baseTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(baseTypeNameC);
        let textInputB = await page.$(baseTypePartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
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

    listBTSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listBTReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.BaselineTypePage = BaselineTypePage;

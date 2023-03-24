const { action } = require('../../../utilities/action')

const locators = {
    overTypeNav: {
        overTypeAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsOverheadGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    overTypeData: {
        //Creating a data
        overTypeName: `[id="adminListsOverheadGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        overTypePartition: `[id="adminListsOverheadGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1038"]`,
        // domainsName: `//*[text()="New Domain"]`,


        overTypeNameA: `[id="adminListsOverheadGrid"] [data-recordindex="3"] [data-columnid="gridcolumn-1036"]`,
        overTypePartitionA: `[id="adminListsOverheadGrid"] [data-recordindex="3"] [data-columnid="gridcolumn-1038"]`,

        overTypeNameB: `[id="adminListsOverheadGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1036"]`,
        overTypePartitionB: `[id="adminListsOverheadGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1038"]`,

        overTypeNameC: `[id="adminListsOverheadGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1036"]`,
        overTypePartitionC: `[id="adminListsOverheadGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1038"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsOverheadGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsOverheadGrid"] [role="toolbar"] [data-componentid="adminListsOverheadGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="toolbar"] [data-componentid="adminListsOverheadGridReload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class OverheadsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listOverWriteA = async () => {
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

    listOverWriteB = async () => {
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

    listOverWriteC = async () => {
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
    overReTypeData = async () => {
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

    overReTypeDataB = async () => {
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

    overReTypeDataC = async () => {
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
    listOverDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listOverSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listOverReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.OverheadsPage = OverheadsPage;

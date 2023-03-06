const { action } = require('../../../utilities/action')

const locators = {
    pcNav: {
        pcAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsProjectStateGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    pcData: {
        //Creating a data
        pcName: `[id="adminListsProjectCodeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"]`,
        pcPartition: `[id="adminListsProjectCodeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1030"]`,
        // domainsName: `//*[text()="New Domain"]`,


        pcNameA: `[id="adminListsProjectCodeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"]`,
        pcPartitionA: `[id="adminListsProjectCodeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1030"]`,

        pcNameB: `[id="adminListsProjectCodeGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1028"]`,
        pcPartitionB: `[id="adminListsProjectCodeGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1030"]`,

        pcNameC: `[id="adminListsProjectCodeGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1028"]`,
        pcPartitionC: `[id="adminListsProjectCodeGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1030"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsProjectCodeGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsProjectCodeGrid"] [role="toolbar"] [data-componentid="adminListsProjectCodeGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsProjectCodeGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class pcPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listPCWriteA = async () => {
        let page = this.page;
        let { pcName, pcPartition } = locators.pcData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(pcName);
        let textInputB = await page.$(pcPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listPCWriteB = async () => {
        let page = this.page;
        let { pcName, pcPartition } = locators.pcData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(pcName);
        let textInputB = await page.$(pcPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listPCWriteC = async () => {
        let page = this.page;
        let { pcName, pcPartition } = locators.pcData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(pcName);
        let textInputB = await page.$(pcPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    pcReTypeData = async () => {
        let page = this.page;
        let { pcNameA, pcPartitionA } = locators.pcData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(pcNameA);
        let textInputB = await page.$(pcPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    pcReTypeDataB = async () => {
        let page = this.page;
        let { pcNameB, pcPartitionB } = locators.pcData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(pcNameB);
        let textInputB = await page.$(pcPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    pcReTypeDataC = async () => {
        let page = this.page;
        let { pcNameC, pcPartitionC } = locators.pcData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(pcNameC);
        let textInputB = await page.$(pcPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listPCDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listPCSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listPCReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.pcPage = pcPage;

const { action } = require('../../../utilities/action')

const locators = {
    ciNav: {
        ciAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsCostItemGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    ciData: {
        //Creating a data
        ciName: `[id="adminListsCostItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"] [id="celleditor-1054"]`,
        ciPartition: `[id="adminListsCostItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1043"]`,
        // domainsName: `//*[text()="New Domain"]`,


        ciNameA: `[id="adminListsCostItemGrid"] [data-recordindex="17"] [data-columnid="gridcolumn-1036"]`,
        ciPartitionA: `[id="adminListsCostItemGrid"] [data-recordindex="17"] [data-columnid="gridcolumn-1043"]`,

        ciNameB: `[id="adminListsCostItemGrid"] [data-recordindex="18"] [data-columnid="gridcolumn-1036"]`,
        ciPartitionB: `[id="adminListsCostItemGrid"] [data-recordindex="18"] [data-columnid="gridcolumn-1043"]`,

        ciNameC: `[id="adminListsCostItemGrid"] [data-recordindex="19"] [data-columnid="gridcolumn-1036"]`,
        ciPartitionC: `[id="adminListsCostItemGrid"] [data-recordindex="19"] [data-columnid="gridcolumn-1043"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsCostItemGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCostItemGrid"] [role="toolbar"] [data-componentid="adminListsCostItemGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class CostItemsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listCIWriteA = async () => {
        let page = this.page;
        let { ciName, ciPartition } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciName);
        let textInputB = await page.$(ciPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listCIWriteB = async () => {
        let page = this.page;
        let { ciName, ciPartition } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciName);
        let textInputB = await page.$(ciPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listCIWriteC = async () => {
        let page = this.page;
        let { ciName, ciPartition } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciName);
        let textInputB = await page.$(ciPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    costItemsReTypeData = async () => {
        let page = this.page;
        let { ciNameA, ciPartitionA } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciNameA);
        let textInputB = await page.$(ciPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    costItemsReTypeDataB = async () => {
        let page = this.page;
        let { ciNameB, ciPartitionB } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciNameB);
        let textInputB = await page.$(ciPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    costItemsReTypeDataC = async () => {
        let page = this.page;
        let { ciNameC, ciPartitionC } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciNameC);
        let textInputB = await page.$(ciPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listCIDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listCISave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listCIReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.CostItemsPage = CostItemsPage;

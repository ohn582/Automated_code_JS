const { action } = require('../../../utilities/action')

const locators = {
    ciNav: {
        ciAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsCostCategoryGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    ciData: {
        //Creating a data
        ciName: `[id="adminListsCostItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"]`,
        ciPartition: `[id="adminListsCostItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1035"]`,
        // domainsName: `//*[text()="New Domain"]`,


        ciNameA: `[id="adminListsCostItemGrid"] [data-recordindex="17"] [data-columnid="gridcolumn-1028"]`,
        ciPartitionA: `[id="adminListsCostItemGrid"] [data-recordindex="17"] [data-columnid="gridcolumn-1035"]`,

        ciNameB: `[id="adminListsCostItemGrid"] [data-recordindex="18"] [data-columnid="gridcolumn-1028"]`,
        ciPartitionB: `[id="adminListsCostItemGrid"] [data-recordindex="18"] [data-columnid="gridcolumn-1035"]`,

        ciNameC: `[id="adminListsCostItemGrid"] [data-recordindex="19"] [data-columnid="gridcolumn-1028"]`,
        ciPartitionC: `[id="adminListsCostItemGrid"] [data-recordindex="19"] [data-columnid="gridcolumn-1035"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsCostItemGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCostItemGrid"] [role="toolbar"] [data-componentid="adminListsCostItemGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class costItemsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listCIWriteA = async () => {
        let page = this.page;
        let { costItemsName, costItemsPartition } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemsName);
        let textInputB = await page.$(costItemsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listCIWriteB = async () => {
        let page = this.page;
        let { costItemsName, costItemsPartition } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemsName);
        let textInputB = await page.$(costItemsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listCIWriteC = async () => {
        let page = this.page;
        let { costItemsName, costItemsPartition } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemsName);
        let textInputB = await page.$(costItemsPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    costItemsReTypeData = async () => {
        let page = this.page;
        let { costItemsNameA, costItemsPartitionA } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemsNameA);
        let textInputB = await page.$(costItemsPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    costItemsReTypeDataB = async () => {
        let page = this.page;
        let { costItemsNameB, costItemsPartitionB } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemsNameB);
        let textInputB = await page.$(costItemsPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    costItemsReTypeDataC = async () => {
        let page = this.page;
        let { costItemsNameC, costItemsPartitionC } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemsNameC);
        let textInputB = await page.$(costItemsPartitionC);

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

module.exports.costItemsPage = costItemsPage;

const { action } = require('../../../utilities/action')

const locators = {
    cicNav: {
        cicAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsCostItemCategoryGrid"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    cicData: {
        //Creating a data
        cicName: `[id="adminListsCostItemCategoryGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"] [id="celleditor-1049"]`,
        cicPartition: `[id="adminListsCostItemCategoryGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1038"]`,
        // domainsName: `//*[text()="New Domain"]`,


        // cicNameA: `[id="adminListsCostItemCategoryGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1036"]`,
        // cicPartitionA: `[id="adminListsCostItemCategoryGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1038"]`,

        // cicNameB: `[id="adminListsCostItemCategoryGrid"] [data-recordindex="6"] [data-columnid="gridcolumn-1036"]`,
        // cicPartitionB: `[id="adminListsCostItemCategoryGrid"] [data-recordindex="6"] [data-columnid="gridcolumn-1038"]`,

        // cicNameC: `[id="adminListsCostItemCategoryGrid"] [data-recordindex="7"] [data-columnid="gridcolumn-1036"]`,
        // cicPartitionC: `[id="adminListsCostItemCategoryGrid"] [data-recordindex="7"] [data-columnid="gridcolumn-1038"]`,


        cicNameA: `//*[text()="tes1"]`,
        cicPartitionA: `//*[text()="Testing"]`,

        cicNameB: `//*[text()="tes2"]`,
        cicPartitionB: `//*[text()="API"]`,

        cicNameC: `//*[text()="tes3"]`,
        cicPartitionC: `//*[text()="Consulting"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsCostItemCategoryGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCostItemCategoryGrid"] [role="toolbar"] [data-componentid="adminListsCostItemCategoryGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class CostItemCategoriesPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listCICWriteA = async () => {
        let page = this.page;
        let { cicName, cicPartition } = locators.cicData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(cicName);
        let textInputB = await page.$(cicPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listCICWriteB = async () => {
        let page = this.page;
        let { cicName, cicPartition } = locators.cicData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(cicName);
        let textInputB = await page.$(cicPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listCICWriteC = async () => {
        let page = this.page;
        let { cicName, cicPartition } = locators.cicData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(cicName);
        let textInputB = await page.$(cicPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    costItemsCategoriesReTypeData = async () => {
        let page = this.page;
        let { cicNameA, cicPartitionA } = locators.cicData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(cicNameA);
        let textInputB = await page.$(cicPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type(' Re-Type 1');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    costItemsCategoriesReTypeDataB = async () => {
        let page = this.page;
        let { cicNameB, cicPartitionB } = locators.cicData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(cicNameB);
        let textInputB = await page.$(cicPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type(' Re-Type 2');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    costItemsCategoriesReTypeDataC = async () => {
        let page = this.page;
        let { cicNameC, cicPartitionC } = locators.cicData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(cicNameC);
        let textInputB = await page.$(cicPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type(' Re-Type 3');
        // await textInputB.click({ clickCount: 3 })
        // await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listCICDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listCICSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listCICReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.CostItemCategoriesPage = CostItemCategoriesPage;

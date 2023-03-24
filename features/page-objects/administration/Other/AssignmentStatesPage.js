const { action } = require('../../../utilities/action')

const locators = {
    asNav: {
        asAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsEffortStateGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    asData: {
        //Creating a data
        asName: `[id="adminListsEffortStateGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        asPartition: `[id="adminListsEffortStateGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1041"]`,
        // domainsName: `//*[text()="New Domain"]`,

        asNameA: `[id="adminListsEffortStateGrid"] [data-recordindex="3"] [data-columnid="gridcolumn-1036"]`,
        asPartitionA: `[id="adminListsEffortStateGrid"] [data-recordindex="3"] [data-columnid="gridcolumn-1041"]`,
        asNameB: `[id="adminListsEffortStateGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1036"]`,
        asPartitionB: `[id="adminListsEffortStateGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1041"]`,
        asNameC: `[id="adminListsEffortStateGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1036"]`,
        asPartitionC: `[id="adminListsEffortStateGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1041"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsEffortStateGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsEffortStateGrid"] [role="toolbar"] [data-componentid="adminListsEffortStateGridSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsEffortStateGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class AssignmentStatePage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listASWriteA = async () => {
        let page = this.page;
        let { asName, asPartition } = locators.asData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(asName);
        let textInputB = await page.$(asPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listASWriteB = async () => {
        let page = this.page;
        let { asName, asPartition } = locators.asData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(asName);
        let textInputB = await page.$(asPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listASWriteC = async () => {
        let page = this.page;
        let { asName, asPartition } = locators.asData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(asName);
        let textInputB = await page.$(asPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    asReTypeData = async () => {
        let page = this.page;
        let { asNameA, asPartitionA } = locators.asData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(asNameA);
        let textInputB = await page.$(asPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    asReTypeDataB = async () => {
        let page = this.page;
        let { asNameB, asPartitionB } = locators.asData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(asNameB);
        let textInputB = await page.$(asPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    asReTypeDataC = async () => {
        let page = this.page;
        let { asNameC, asPartitionC } = locators.asData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(asNameC);
        let textInputB = await page.$(asPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listASDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listASSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listASReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.AssignmentStatePage = AssignmentStatePage;

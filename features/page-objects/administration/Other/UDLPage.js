const { action } = require('../../../utilities/action')

const locators = {
    udlNav: {
        udlAddDetailsBtn: `[id="AdminUserDefinedListGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,

        //WindowNav
        udlAddBtnWindowAlert: `[id="AdminUdfListAddWindow"] [role="toolbar"] [tabindex="0"]`,
    },
    
    udlData: {
        //Creating a data
        udlName: `[id="AdminUdfListAddWindow"] [name="AdminUdfListAddWindowCombo"]`,



        udlValue: `[id="AdminUserDefinedListDetailGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1052"]`,
        udlPartition: `[id="AdminUserDefinedListDetailGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1054"]`,



        udlValueA: `[id="AdminUserDefinedListDetailGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1052"]`,
        udlPartitionA: `[id="AdminUserDefinedListDetailGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1054"]`,

        udlValueB: `[id="AdminUserDefinedListDetailGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1052"]`,
        udlPartitionB: `[id="AdminUserDefinedListDetailGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1054"]`,

        udlValueC: `[id="AdminUserDefinedListDetailGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1052"]`,
        udlPartitionC: `[id="AdminUserDefinedListDetailGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1054"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminUserDefinedListDetailGrid"] [role="toolbar"] [aria-label="Remove"]`,
        yesDeleteBtn: `[data-componentid="messagebox-1009"] [data-componentid="button-1015"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminUserDefinedListDetailGrid"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="AdminUserDefinedListDetailGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class UserDefinedPage {
    constructor(page) {
        this.page = page;
    }

    //Sponsor: Create
    nameUDLWrite = async () => {
        let page = this.page;
        let { udlName } = locators.udlData;
        let { udlAddDetailsBtn, udlAddBtnWindowAlert } = locators.udlNav;
        // await page.waitForTimeout(3000);

        await page.click(udlAddDetailsBtn);
        let textInput = await page.$(udlName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Field 3');
        
        await page.click(udlAddBtnWindowAlert);
        // await page.waitForTimeout(3000);
    }





    listUDLWriteA = async () => {
        let page = this.page;
        let { udlValue, udlPartition } = locators.udlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(udlValue);
        let textInputB = await page.$(udlPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('TestingA');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    listUDLWriteA = async () => {
        let page = this.page;
        let { udlValue, udlPartition } = locators.udlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(udlValue);
        let textInputB = await page.$(udlPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('TestingB');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listUDLWriteB = async () => {
        let page = this.page;
        let { udlValue, udlPartition } = locators.udlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(udlValue);
        let textInputB = await page.$(udlPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('TestingC');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listUDLWriteC = async () => {
        let page = this.page;
        let { udlValue, udlPartition } = locators.udlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(udlValue);
        let textInputB = await page.$(udlPartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    udl_ReTypeData = async () => {
        let page = this.page;
        let { udlValueA, udlPartitionA } = locators.udlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(udlValueA);
        let textInputB = await page.$(udlPartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    udl_ReTypeDataB = async () => {
        let page = this.page;
        let { udlValueB, udlPartitionB } = locators.udlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(udlValueB);
        let textInputB = await page.$(udlPartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    udl_ReTypeDataC = async () => {
        let page = this.page;
        let { udlValueC, udlPartitionC } = locators.udlData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(udlValueC);
        let textInputB = await page.$(udlPartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listUDLDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listUDLSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listUDLReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.UserDefinedPage = UserDefinedPage;

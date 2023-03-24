const { action } = require('../../../utilities/action')

const locators = {
    eventTypeNav: {
        eventTypeAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsBaselineTypeGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    eventTypeData: {
        //Creating a data
        eventTypeName: `[id="AdminEventTypeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        eventTypePartition: `[id="AdminEventTypeGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1040"]`,
        // domainsName: `//*[text()="New Domain"]`,


        eventTypeNameA: `[id="AdminEventTypeGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1036"]`,
        eventTypePartitionA: `[id="AdminEventTypeGrid"] [data-recordindex="4"] [data-columnid="gridcolumn-1040"]`,

        eventTypeNameB: `[id="AdminEventTypeGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1036"]`,
        eventTypePartitionB: `[id="AdminEventTypeGrid"] [data-recordindex="5"] [data-columnid="gridcolumn-1040"]`,

        eventTypeNameC: `[id="AdminEventTypeGrid"] [data-recordindex="6"] [data-columnid="gridcolumn-1036"]`,
        eventTypePartitionC: `[id="AdminEventTypeGrid"] [data-recordindex="6"] [data-columnid="gridcolumn-1040"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminEventTypeGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminEventTypeGrid"] [role="toolbar"] [data-componentid="AdminEventTypeSave"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class EventTypePage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listETWriteA = async () => {
        let page = this.page;
        let { eventTypeName, eventTypePartition } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeName);
        let textInputB = await page.$(eventTypePartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listETWriteB = async () => {
        let page = this.page;
        let { eventTypeName, eventTypePartition } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeName);
        let textInputB = await page.$(eventTypePartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listETWriteC = async () => {
        let page = this.page;
        let { eventTypeName, eventTypePartition } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeName);
        let textInputB = await page.$(eventTypePartition);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    etReTypeData = async () => {
        let page = this.page;
        let { eventTypeNameA, eventTypePartitionA } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeNameA);
        let textInputB = await page.$(eventTypePartitionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    etReTypeDataB = async () => {
        let page = this.page;
        let { eventTypeNameB, eventTypePartitionB } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeNameB);
        let textInputB = await page.$(eventTypePartitionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    etReTypeDataC = async () => {
        let page = this.page;
        let { eventTypeNameC, eventTypePartitionC } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeNameC);
        let textInputB = await page.$(eventTypePartitionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listETDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listETSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listETReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.EventTypePage = EventTypePage;

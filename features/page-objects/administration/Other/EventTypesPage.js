const { action } = require('../../../utilities/action')

const locators = {
    eventTypeNav: {
        eventTypeAddBtn: `[id="AdminEventTypeGrid"] [role="toolbar"] [data-qtip="Add"]`,
    },

    eventTypeData: {
        //Creating a data
        eventTypeName: `[id="AdminEventTypeGrid-bodyWrap"] [data-recordindex="0"] [role="presentation"]`,

        eventTypeNameA: `//*[text()="tes1"]`,
        eventTypeNameB: `//*[text()="tes2"]`,
        eventTypeNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminEventTypeGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminEventTypeGrid"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[data-componentid="messagebox-1009"] [id="messagebox-1009-toolbar"] [id="button-1013"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsBaselineTypeGridReload-btnWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    eventTypeLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class EventTypePage {
    constructor(page) {
        this.page = page;
    }


    //Event Type: Create
    listETWriteA = async () => {
        let page = this.page;
        let { eventTypeAddBtn } = locators.eventTypeNav;
        let { eventTypeName } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        await page.click(eventTypeAddBtn);

        let textInput = await page.$(eventTypeName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listETWriteB = async () => {
        let page = this.page;
        let { eventTypeAddBtn } = locators.eventTypeNav;
        let { eventTypeName } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        await page.click(eventTypeAddBtn);

        let textInput = await page.$(eventTypeName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listETWriteC = async () => {
        let page = this.page;
        let { eventTypeAddBtn } = locators.eventTypeNav;
        let { eventTypeName } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        await page.click(eventTypeAddBtn);

        let textInput = await page.$(eventTypeName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    etReTypeData = async () => {
        let page = this.page;
        let { eventTypeNameA } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    etReTypeDataB = async () => {
        let page = this.page;
        let { eventTypeNameB } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    etReTypeDataC = async () => {
        let page = this.page;
        let { eventTypeNameC } = locators.eventTypeData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(eventTypeNameC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
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
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.eventTypeLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.EventTypePage = EventTypePage;

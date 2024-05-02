const { action } = require('../../../utilities/action')

const locators = {
    asNav: {
        asAddBtn: `[id="adminListsEffortStateGrid"] [role="toolbar"] [data-qtip="Add"]`,
    },

    asData: {
        //Creating a data
        // asName: `[id="adminListsEffortStateGrid-body"] [data-recordindex="0"] [role="presentation"]`,
        assignmentStateID: `//*[text()="Pdw.R1.Model.EffortState-1"]`,

        asNameA: `//*[text()="tes1"]`,
        asNameB: `//*[text()="tes2"]`,
        asNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsEffortStateGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsEffortStateGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="adminListsEffortStateGrid"] [id="toolbar"] [tabindex="0"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    asLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class AssignmentStatePage {
    constructor(page) {
        this.page = page;
    }


    //Assignment States: Create
    listASWriteA = async () => {
        let page = this.page;
        let { asAddBtn } = locators.asNav;
        let { assignmentStateID } = locators.asData;
        // await page.waitForTimeout(3000);

        await page.click(asAddBtn);       

        // await page.click(assignmentStateID)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('tes1');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('89');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('Acme Life Sciences');
        // await page.waitForTimeout(3000);
    }


    listASWriteB = async () => {
        let page = this.page;
        let { asAddBtn } = locators.asNav;
        let { assignmentStateID } = locators.asData;
        // await page.waitForTimeout(3000);

        await page.click(asAddBtn);       

        // await page.click(assignmentStateID)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('tes2');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('44');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('BU 2');
        // await page.waitForTimeout(3000);
    }

    listASWriteC = async () => {
        let page = this.page;
        let { asAddBtn } = locators.asNav;
        let { assignmentStateID } = locators.asData;
        // await page.waitForTimeout(3000);

        await page.click(asAddBtn);       

        // await page.click(assignmentStateID)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('tes3');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('24');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('BU 1');
        // await page.waitForTimeout(3000);
    }




    //Assignment States: Update
    asReTypeDataA = async () => {
        let page = this.page;
        let { asNameA } = locators.asData;

        await page.click(asNameA)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('Re-Type 1');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('24');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('BU 1');
        // await page.waitForTimeout(3000);
    }

    asReTypeDataB = async () => {
        let page = this.page;
        let { asNameB } = locators.asData;

        await page.click(asNameB)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('Re-Type 2');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('57');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('BU 1');
        // await page.waitForTimeout(3000);
    }

    asReTypeDataC = async () => {
        let page = this.page;
        let { asNameC } = locators.asData;

        await page.click(asNameC)
        await page.keyboard.press('Control+A');
        await page.keyboard.type('Re-Type 3');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('89');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('Acme Life Sciences');
        // await page.waitForTimeout(3000);
    }




    //Assignment States: Delete
    listASDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.waitForTimeout(2000);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    //Assignment States: Save
    listASSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.waitForTimeout(2000);
        await page.click(saveOK);
        // await page.waitForTimeout(3000);
    }

    //Assignment States: Reload
    listASReload = async () => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.asLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.waitForTimeout(2000);
        await page.click(logoutUserBtn);
        await page.waitForTimeout(2000);
        await page.click(hereLinkLogout);
    }
}

module.exports.AssignmentStatePage = AssignmentStatePage;

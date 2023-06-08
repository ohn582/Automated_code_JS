const { action } = require('../../../utilities/action')

const locators = {
    pcNav: {
        pcAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsProjectStateGridAdd"]`,
        pcAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`
    },

    pcData: {
        //Creating a data
        pcName: `[id="adminListsProjectCodeGrid-body"] [data-recordindex="0"] [role="presentation"]`,

        pcNameA: `//*[text()="tes1"]`,
        pcNameB: `//*[text()="tes2"]`,
        pcNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsProjectCodeGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsProjectCodeGrid"] [role="toolbar"] [data-qtip="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[id="adminListsProjectCodeGrid-bodyWrap"] [id="toolbar"] [id="adminListsProjectCodeGridReload-btnIconEl"]`,
        reloadNavBtn: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    }

}



class pcPage {
    constructor(page) {
        this.page = page;
    }


    //Phases & Milestones: Create
    listPCWriteA = async () => {
        let page = this.page;
        let { pcName } = locators.pcData;
        let { pcAddBtn } = locators.pcNav;
        // await page.waitForTimeout(3000);
        await page.click(pcAddBtn);

        let textInputA = await page.$(pcName, el=>el.getAttribute("id"));
        await textInputA.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listPCWriteB = async () => {
        let page = this.page;
        let { pcName } = locators.pcData;
        let { pcAddBtn } = locators.pcNav;
        // await page.waitForTimeout(3000);
        await page.click(pcAddBtn);

        let textInputA = await page.$(pcName, el=>el.getAttribute("id"));
        await textInputA.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listPCWriteC = async () => {
        let page = this.page;
        let { pcName } = locators.pcData;
        let { pcAddBtn } = locators.pcNav;
        // await page.waitForTimeout(3000);
        await page.click(pcAddBtn);

        let textInputA = await page.$(pcName, el=>el.getAttribute("id"));
        await textInputA.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    pcReTypeData = async () => {
        let page = this.page;
        let { pcNameA } = locators.pcData;
        // await page.waitForTimeout(3000);

        await page.dblclick(pcNameA);
        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    pcReTypeDataB = async () => {
        let page = this.page;
        let { pcNameB } = locators.pcData;
        // await page.waitForTimeout(3000);

        await page.dblclick(pcNameB);
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    pcReTypeDataC = async () => {
        let page = this.page;
        let { pcNameC } = locators.pcData;
        // await page.waitForTimeout(3000);

        await page.dblclick(pcNameC);
        await page.keyboard.type('Re-Type 3');
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

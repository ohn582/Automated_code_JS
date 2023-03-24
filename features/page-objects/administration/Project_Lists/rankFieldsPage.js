const { action } = require('../../../utilities/action')

const locators = {
    rfNav: {
        rfAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="AdminRankFieldAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    rfData: {
        //Creating a data
        rfName: `[id="AdminRankFieldGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        rfDescription: `[id="AdminRankFieldGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1037"]`,
        // domainsName: `//*[text()="New Domain"]`,


        rfNameA: `[id="AdminRankFieldGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1036"]`,
        rfDescriptionA: `[id="AdminRankFieldGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1037"]`,

        rfNameB: `[id="AdminRankFieldGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1036"]`,
        rfDescriptionB: `[id="AdminRankFieldGrid"] [data-recordindex="1"] [data-columnid="gridcolumn-1037"]`,

        rfNameC: `[id="AdminRankFieldGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1036"]`,
        rfDescriptionC: `[id="AdminRankFieldGrid"] [data-recordindex="2"] [data-columnid="gridcolumn-1037"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminRankFieldGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminRankFieldGrid"] [role="toolbar"] [data-componentid="AdminRankFieldSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminRankFieldGrid"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class rfPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listRFWriteA = async () => {
        let page = this.page;
        let { rfName, rfDescription } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfName);
        let textInputB = await page.$(rfDescription);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listRFWriteB = async () => {
        let page = this.page;
        let { rfName, rfDescription } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfName);
        let textInputB = await page.$(rfDescription);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listRFWriteC = async () => {
        let page = this.page;
        let { rfName, rfDescription } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfName);
        let textInputB = await page.$(rfDescription);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        await textInputB.click({ clickCount: 1 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    rfReTypeData = async () => {
        let page = this.page;
        let { rfNameA, rfDescriptionA } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfNameA);
        let textInputB = await page.$(rfDescriptionA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    rfReTypeDataB = async () => {
        let page = this.page;
        let { rfNameB, rfDescriptionB } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfNameB);
        let textInputB = await page.$(rfDescriptionB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    rfReTypeDataC = async () => {
        let page = this.page;
        let { rfNameC, rfDescriptionC } = locators.rfData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(rfNameC);
        let textInputB = await page.$(rfDescriptionC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({ clickCount: 3 })
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Delete
    listRFDelete = async () => {
        let page = this.page;
        let { deleteBtn, yesDeleteBtn } = locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listRFSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listRFReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.rfPage = rfPage;

const { action } = require('../../../utilities/action')

const locators = {
    ciNav: {
        ciAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    ciData: {
        //Creating a data
        ciName: `[id="adminListsCostItemGrid-body"] [data-recordindex="0"] [role="presentation"]`,
        ciPartition: `[id="adminListsCostItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1043"]`,
        // domainsName: `//*[text()="New Domain"]`,

        ciNameA: `//*[text()="tes1"]`,
        ciNameB: `//*[text()="tes2"]`,
        ciNameC: `//*[text()="tes3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsCostItemGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCostItemGrid"] [role="toolbar"] [data-componentid="adminListsCostItemGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
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
        let { ciAddBtn } = locators.ciNav;
        let { ciName } = locators.ciData;
        // await page.waitForTimeout(3000);

        await page.click(ciAddBtn);

        let textInput = await page.$(ciName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listCIWriteB = async () => {
        let page = this.page;
        let { ciAddBtn } = locators.ciNav;
        let { ciName } = locators.ciData;
        // await page.waitForTimeout(3000);

        await page.click(ciAddBtn);

        let textInput = await page.$(ciName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listCIWriteC = async () => {
        let page = this.page;
        let { ciAddBtn } = locators.ciNav;
        let { ciName } = locators.ciData;
        // await page.waitForTimeout(3000);

        await page.click(ciAddBtn);

        let textInput = await page.$(ciName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');

        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    costItemsReTypeData = async () => {
        let page = this.page;
        let { ciNameA } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');;
        // await page.waitForTimeout(3000);
    }

    costItemsReTypeDataB = async () => {
        let page = this.page;
        let { ciNameB } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    costItemsReTypeDataC = async () => {
        let page = this.page;
        let { ciNameC } = locators.ciData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(ciNameC);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 3');
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

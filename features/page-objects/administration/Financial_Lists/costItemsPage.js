const { action } = require('../../../utilities/action')

const locators = {
    costItemNav: {
        costItemAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    costItemData: {
        //Creating a data
        costItemName: `[id="adminListsCostItemGrid-body"] [data-recordindex="0"] [role="presentation"]`,
        costItemPartition: `[id="adminListsCostItemGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1043"]`,
        // domainsName: `//*[text()="New Domain"]`,

        costItemNameA: `//*[text()="tes1"]`,
        costItemNameB: `//*[text()="tes2"]`,
        costItemNameC: `//*[text()="tes3"]`,
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
    },

    costItemLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class CostItemsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listCIWriteA = async () => {
        let page = this.page;
        let { costItemAddBtn } = locators.costItemNav;
        let { costItemName } = locators.costItemData;
        // await page.waitForTimeout(3000);

        await page.click(costItemAddBtn);

        let textInput = await page.$(costItemName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listCIWriteB = async () => {
        let page = this.page;
        let { costItemAddBtn } = locators.costItemNav;
        let { costItemName } = locators.costItemData;
        // await page.waitForTimeout(3000);

        await page.click(costItemAddBtn);

        let textInput = await page.$(costItemName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listCIWriteC = async () => {
        let page = this.page;
        let { costItemAddBtn } = locators.costItemNav;
        let { costItemName } = locators.costItemData;
        // await page.waitForTimeout(3000);

        await page.click(costItemAddBtn);

        let textInput = await page.$(costItemName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');

        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    costItemsReTypeData = async () => {
        let page = this.page;
        let { costItemNameA } = locators.costItemData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemNameA);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 1');;
        // await page.waitForTimeout(3000);
    }

    costItemsReTypeDataB = async () => {
        let page = this.page;
        let { costItemNameB } = locators.costItemData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemNameB);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    costItemsReTypeDataC = async () => {
        let page = this.page;
        let { costItemNameC } = locators.costItemData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(costItemNameC);

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
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.costItemLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.CostItemsPage = CostItemsPage;

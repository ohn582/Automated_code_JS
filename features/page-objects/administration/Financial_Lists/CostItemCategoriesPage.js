const { action } = require('../../../utilities/action')

const locators = {
    cicNav: {
        cicAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
    },

    cicData: {
        //Creating a data
        cicName: `[id="adminListsCostItemCategoryGrid-body"] [data-recordindex="0"] [role="presentation"]`,
        cicPartition: `[id="adminListsCostItemCategoryGrid-body"] [data-recordindex="0"] [aria-selected="true"]`,
        // domainsName: `//*[text()="New Domain"]`,

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
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCostItemGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    cicLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class CostItemCategoriesPage {
    constructor(page) {
        this.page = page;
    }

    
    //Sponsor: Create
    listCICWriteA = async () => {
        let page = this.page;
        let { cicAddBtn } = locators.cicNav;
        let { cicName, cicPartition } = locators.cicData;
        // await page.waitForTimeout(3000);
        
        await page.click(cicAddBtn);
        
        let textInput = await page.$(cicName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await textInputB.click({ clickCount: 1 })
        // await page.keyboard.type('Testing');

        // await page.waitForTimeout(3000);
    }

    listCICWriteB = async () => {
        let page = this.page;
        let { cicAddBtn } = locators.cicNav;
        let { cicName, cicPartition } = locators.cicData;
        // await page.waitForTimeout(3000);

        await page.click(cicAddBtn);

        let textInput = await page.$(cicName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await textInputB.click({ clickCount: 1 })
        // await page.keyboard.type('Testing');

        // await page.waitForTimeout(3000);
    }

    listCICWriteC = async () => {
        let page = this.page;
        let { cicAddBtn } = locators.cicNav;
        let { cicName, cicPartition } = locators.cicData;
        // await page.waitForTimeout(3000);

        await page.click(cicAddBtn);

        let textInput = await page.$(cicName, el=>el.getAttribute("id"));

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await textInputB.click({ clickCount: 1 })
        // await page.keyboard.type('Testing');

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
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.cicLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.CostItemCategoriesPage = CostItemCategoriesPage;

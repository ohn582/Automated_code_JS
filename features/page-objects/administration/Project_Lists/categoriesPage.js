const { action } = require('../../../utilities/action')

const locators = {
    categoriesNav: {
        categoriesAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [id="adminListsCategoryGridAdd"]`,
    },

    categoriesData: {
        //Creating a data
        categoriesSelect: `[id="adminListsCategoryGrid-bodyWrap"] [data-recordindex="0"] [role="presentation"]`,

        categoriesReTypeA: `//*[text()="tes1"]`,
        categoriesReTypeB: `//*[text()="tes2"]`,
        categoriesReTypeC: `//*[text()="tes3"]`,

    },

    deleteNav: {
        deleteBtn: `[id="adminListsCategoryGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCategoryGrid"] [role="toolbar"] [data-qtip="Save"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCategoryGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    listCategorieReload: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }
}



class categoriesPage {
    constructor(page) {
        this.page = page;
    }


    //categories: Create
    listCategoriesWriteA = async() => {
        let page=this.page;
        let { categoriesAddBtn }=locators.categoriesNav;
        let { categoriesSelect, categoriesNameType }=locators.categoriesData;

        // await page.waitForTimeout(3000); 

        await page.click(categoriesAddBtn);

        let textInput = await page.$(categoriesSelect);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes1');
        // await page.waitForTimeout(3000);
    }

    listCategoriesWriteB = async() => {
        let page=this.page;
        let { categoriesAddBtn }=locators.categoriesNav;
        let { categoriesSelect, categoriesNameType }=locators.categoriesData;

        // await page.waitForTimeout(3000); 

        await page.click(categoriesAddBtn);

        let textInput = await page.$(categoriesSelect);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes2');
        // await page.waitForTimeout(3000);
    }

    listCategoriesWriteC = async() => {
        let page=this.page;
        let { categoriesAddBtn }=locators.categoriesNav;
        let { categoriesSelect, categoriesNameType }=locators.categoriesData;

        // await page.waitForTimeout(3000); 

        await page.click(categoriesAddBtn);

        let textInput = await page.$(categoriesSelect);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('tes3');
        // await page.waitForTimeout(3000);
    }




    //categories: Update
    categoriesReTypeData = async() => {
        let page=this.page;
        let { categoriesReTypeA }=locators.categoriesData;

        // await page.waitForTimeout(3000); 

        await page.dblclick(categoriesReTypeA);

        await page.keyboard.type('Re-Type 1');
        await page.waitForTimeout(3000);
    }

    categoriesReTypeDataB = async() => {
        let page=this.page;
        let { categoriesReTypeB }=locators.categoriesData;

        // await page.waitForTimeout(3000); 

        await page.dblclick(categoriesReTypeB);

        await page.keyboard.type('Re-Type 2');
        await page.waitForTimeout(3000);
        // await page.waitForTimeout(3000);
    }
    
    categoriesReTypeDataC = async() => {
        let page=this.page;
        let { categoriesReTypeC }=locators.categoriesData;

        // await page.waitForTimeout(3000); 

        await page.dblclick(categoriesReTypeC);

        await page.keyboard.type('Re-Type 3');
        await page.waitForTimeout(3000);
        // await page.waitForTimeout(3000);
    }

    
    

    //Sponsor: Delete
    listCategorieDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listCategorieSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listCategorieReload = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.listCategorieReload;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.categoriesPage = categoriesPage;

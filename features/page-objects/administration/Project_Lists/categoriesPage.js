const { action } = require('../../../utilities/action')

const locators = {
    categoriesNav: {
        categoriesAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsCategoryGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    categoriesData: {
        //Creating a data
        categoriesName: `[id="adminListsCategoryGrid"] [data-componentid="gridview-1036"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"]`,
        categoriesPartition: `[id="adminListsCategoryGrid"] [data-componentid="gridview-1036"] [data-recordindex="0"] [data-columnid="gridcolumn-1030"]`,
        // domainsName: `//*[text()="New Domain"]`,


        categoriesNameA: `[id="adminListsCategoryGrid"] [data-componentid="gridview-1036"] [data-recordindex="4"] [data-columnid="gridcolumn-1027"]`,
        categoriesPartitionA: `[id="adminListsCategoryGrid"] [data-componentid="gridview-1036"] [data-recordindex="4"] [data-columnid="gridcolumn-1029"]`,

        categoriesNameB: `[id="adminListsCategoryGrid"] [data-componentid="gridview-1036"] [data-recordindex="5"] [data-columnid="gridcolumn-1027"]`,
        categoriesPartitionB: `[id="adminListsCategoryGrid"] [data-componentid="gridview-1036"] [data-recordindex="5"] [data-columnid="gridcolumn-1029"]`,

        categoriesNameC: `[id="adminListsCategoryGrid"] [data-componentid="gridview-1036"] [data-recordindex="6"] [data-columnid="gridcolumn-1027"]`,
        categoriesPartitionC: `[id="adminListsCategoryGrid"] [data-componentid="gridview-1036"] [data-recordindex="6"] [data-columnid="gridcolumn-1029"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsCategoryGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCategoryGrid"] [role="toolbar"] [data-componentid="adminListsSponsorGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCategoryGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class categoriesPage {
    constructor(page) {
        this.page = page;
    }


    //categories: Create
    listCategoriesWriteA = async() => {
        let page=this.page;
        let { categoriesName, categoriesPartition }=locators.categoriesData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(categoriesName);
        let textInputB = await page.$(categoriesPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }


    listCategoriesWriteB = async() => {
        let page=this.page;
        let { categoriesNameB, categoriesPartitionB }=locators.categoriesData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(categoriesNameB);
        let textInputB = await page.$(categoriesPartitionB); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listCategoriesWriteC = async() => {
        let page=this.page;
        let { categoriesNameC, categoriesPartitionC }=locators.categoriesData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(categoriesNameC);
        let textInputB = await page.$(categoriesPartitionC); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //categories: Update
    categoriesReTypeData = async() => {
        let page=this.page;
        let { categoriesNameA, categoriesPartitionA }=locators.categoriesData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(categoriesNameA); 
        let textInputB = await page.$(categoriesPartitionA); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    categoriesReTypeDataB = async() => {
        let page=this.page;
        let { categoriesNameB, categoriesPartitionB }=locators.categoriesData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(categoriesNameB); 
        let textInputB = await page.$(categoriesPartitionB); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }
    
    categoriesReTypeDataC = async() => {
        let page=this.page;
        let { categoriessNameC, categoriesPartitionC }=locators.categoriesData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(categoriesNameC); 
        let textInputB = await page.$(categoriesPartitionC); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Testing');
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
        let page=this.page;
        let { relBtn, reloadNavBtn }=locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.categoriesPage = categoriesPage;

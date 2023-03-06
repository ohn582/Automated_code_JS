const { action } = require('../../../utilities/action')

const locators = {
    viewsNav: {
        viewsAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="AdminViewsAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    viewsCreate: {
        viewsName: `[role="alertdialog"] [id="messagebox-1001-bodyWrap"] [id="container-1003-innerCt"] [id="VCapacityNewView"]`,
        viewsPartition: `[id="ext-element-692"] [data-componentid="gridview-1036"] [data-recordindex="0"] [class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1030 x-grid-cell-first x-unselectable"]`,


        filterReWright: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="0"] [data-columnid="gridcolumn-1029"]`,
        filterReWrightB: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="1"] [data-columnid="gridcolumn-1029"]`,
        filterReWrightC: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="2"] [data-columnid="gridcolumn-1029"]`,
    
        messageAddBtn: `[id="messagebox-1001"] [id="messagebox-1001-toolbar"] [data-componentid="button-1005"]`,
    },

    deleteNav: {
        deleteBtn: `[id="AdminFilterDesginer"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `[role="alertdialog"] [data-componentid="button-1005"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminFilterDesginer-body"] [role="toolbar"] [data-qtip="Save"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[id="AdminFilterDesginer"] [id="toolbar-1039"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class viewsPage {
    constructor(page) {
        this.page = page;
    }


    //Filters: Create
    viewData = async() => {
        let page=this.page;
        let { viewsAddBtn }=locators.viewsNav;
        let { viewsName, viewsPartition, messageAddBtn }=locators.viewsCreate;
        // await page.waitForTimeout(3000);
        
        await page.click(viewsAddBtn);
        let textInput = await page.$(viewsName); 
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Data 1');
        await page.click(messageAddBtn);
        await page.click(viewsPartition);
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    viewDataB = async() => {
        let page=this.page;
        let { viewsAddBtn }=locators.viewsNav;
        let { viewsName, viewsPartition, messageAddBtn }=locators.viewsCreate;
        // await page.waitForTimeout(3000);
        
        await page.click(viewsAddBtn);
        let textInput = await page.$(viewsName); 
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Data 2');
        await page.click(messageAddBtn);
        await page.click(viewsPartition);
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    viewDataC = async() => {
        let page=this.page;
        let { viewsAddBtn }=locators.viewsNav;
        let { viewsName, viewsPartition, messageAddBtn }=locators.viewsCreate;
        // await page.waitForTimeout(3000);
        
        await page.click(viewsAddBtn);
        let textInput = await page.$(viewsName); 
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Data 3');
        await page.click(messageAddBtn);
        await page.click(viewsPartition);
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    




    //Filters: Update
    viewsReTypeData = async() => {
        let page=this.page;
        let { filterReWright, viewsPartition }=locators.viewsCreate;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(filterReWright); 
        let textInputB = await page.$(viewsPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    viewsReTypeDataB = async() => {
        let page=this.page;
        let { filterReWright, viewsPartition }=locators.viewsCreate;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(filterReWright); 
        let textInputB = await page.$(viewsPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    viewsReTypeDataC = async() => {
        let page=this.page;
        let { filterReWright, viewsPartition }=locators.viewsCreate;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(filterReWright); 
        let textInputB = await page.$(viewsPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }


    







    //Filters: Delete
    filterDeleteData = async() => {
        let page=this.page;
        let { filterDelete }=locators.filtersData;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(filterDelete);
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    






    filterSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    filterReload = async() => {
        let page=this.page;
        let { relBtn }=locators.reloadBtn;
        await page.click(relBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.viewsPage = viewsPage;

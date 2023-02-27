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
        let { viewsName, viewsPartition }=locators.viewsCreate;
        // await page.waitForTimeout(3000);
        
        await page.click(viewsAddBtn);
        let textInput = await page.$(viewsName); 
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Data 1');
        await page.click(filterDataAdd);
        await page.click(viewsPartition);
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    




    //Filters: Update
    filterReTypeData = async() => {
        let page=this.page;
        let { filterReWright, filterPartition }=locators.filtersData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(filterReWright); 
        let textInputB = await page.$(filterPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
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

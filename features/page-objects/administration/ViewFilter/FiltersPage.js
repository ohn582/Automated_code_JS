const { action } = require('../../../utilities/action')

const locators = {
    filtersNav: {
        filterAddBtn: `[role="toolbar"] [aria-label="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    filtersData: {
        filterDataAdd: `[role="alertdialog"] [id="messagebox-1001-bodyWrap"] [id="messagebox-1001-toolbar"] [data-componentid="button-1005"]`,
        filterName: `[role="alertdialog"] [id="messagebox-1001-bodyWrap"] [id="container-1003-innerCt"] [id="FinancialNewFilter"]`,

        filterPartition: `[id="ext-element-692"] [data-componentid="gridview-1036"] [data-recordindex="0"] [class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1030 x-grid-cell-first x-unselectable"]`,
        filterPartitionB: `[id="ext-element-692"] [data-componentid="gridview-1036"] [data-recordindex="1"] [class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1030 x-grid-cell-first x-unselectable"]`,
        filterPartitionC: `[id="ext-element-692"] [data-componentid="gridview-1036"] [data-recordindex="2"] [class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1030 x-grid-cell-first x-unselectable"]`,

        
        filterReWright: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="0"] [data-columnid="gridcolumn-1029"]`,
        filterReWrightB: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="1"] [data-columnid="gridcolumn-1029"]`,
        filterReWrightC: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="2"] [data-columnid="gridcolumn-1029"]`,

        filterDelete: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="0"] [data-columnid="gridcolumn-1029"]`,
        filterDeleteB: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="0"] [data-columnid="gridcolumn-1029"]`,
        filterDeleteC: `[id="AdminFilterDesginer"] [id="ext-element-692"] [data-recordindex="0"] [data-columnid="gridcolumn-1029"]`,

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



class viewFilterPage {
    constructor(page) {
        this.page = page;
    }


    //Filters: Create
    filterData = async() => {
        let page=this.page;
        let { filterAddBtn }=locators.filtersNav;
        let { filterName, filterDataAdd, filterPartition }=locators.filtersData;
        // await page.waitForTimeout(3000);
        
        await page.click(filterAddBtn);
        let textInput = await page.$(filterName); 
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Data 1');
        await page.click(filterDataAdd);
        await page.click(filterPartition);
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    filterDataB = async() => {
        let page=this.page;
        let { filterAddBtn }=locators.filtersNav;
        let { filterName, filterDataAdd, filterPartition }=locators.filtersData;
        // await page.waitForTimeout(3000);
        
        await page.click(filterAddBtn);
        let textInputB = await page.$(filterName); 
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Data 2');
        await page.click(filterDataAdd);
        await page.click(filterPartition);
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    filterDataC = async() => {
        let page=this.page;
        let { filterAddBtn }=locators.filtersNav;
        let { filterName, filterDataAdd, filterPartition }=locators.filtersData;
        // await page.waitForTimeout(3000);

        await page.click(filterAddBtn);
        let textInputC = await page.$(filterName); 
        await textInputC.click({clickCount: 3})
        await page.keyboard.type('Data 3');
        await page.click(filterDataAdd);
        await page.click(filterPartition);
        await page.keyboard.type('Consulting');
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

    filterReTypeDataB = async() => {
        let page=this.page;
        let { filterReWrightB, filterPartitionB }=locators.filtersData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(filterReWrightB); 
        let textInputB = await page.$(filterPartitionB); 
        
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    filterReTypeDataC = async() => {
        let page=this.page;
        let { filterReWrightC, filterPartitionC }=locators.filtersData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(filterReWrightC); 
        let textInputB = await page.$(filterPartitionC); 
        
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Testing');
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

    filterDeleteDataB = async() => {
        let page=this.page;
        let { filterDeleteB }=locators.filtersData;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(filterDeleteB);
        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }


    filterDeleteDataC = async() => {
        let page=this.page;
        let { filterDeleteC }=locators.filtersData;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(filterDeleteC);
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

module.exports.viewFilterPage = viewFilterPage;

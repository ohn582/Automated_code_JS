const { action } = require('../../../utilities/action')

const locators = {
    udlNav: {
        udlAddDetailsBtn: `[id="AdminUserDefinedListGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,

        //WindowNav
        udlAddBtnWindowAlert: `[id="AdminUdfListAddWindow"] [role="toolbar"] [tabindex="0"]`,

        //User Defined List 
        AddUserDefinedListDetails: `[aria-label="User Defined List Details field set"] [id="AdminUserDefinedListDetailGrid"] [role="toolbar"] [tabindex="0"]`,
    },
    
    udlData: {
        //Creating a data
        udlName: `[id="AdminUdfListAddWindow"] [name="AdminUdfListAddWindowCombo"]`,
 
        //User Defined List 
        createDefinedListDetails: `[id="AdminUserDefinedListDetailGrid-bodyWrap"] [role="toolbar"] [aria-label="Add"]`,
        newListItem: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="0"]`,
        
        field31: `//*[text()="Field 31"]`,
        field144: `//*[text()="Field 144"]`,
        fieldCostNotes: `//*[text()="Cost Notes"]`,
        
        udlUpdateA: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="0"]`,
        udlUpdateB: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="1"]`,
        udlUpdateC: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="2"]`,

        checkBoxA: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="0"] [class="x-grid-cell-inner x-grid-checkcolumn-cell-inner"]`,
        checkBoxB: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="1"] [class="x-grid-cell-inner x-grid-checkcolumn-cell-inner"]`,
        checkBoxC: `[id="AdminUserDefinedListDetailGrid-body"] [data-recordindex="2"] [class="x-grid-cell-inner x-grid-checkcolumn-cell-inner"]`,
    },

    deleteNav: {
        deleteIcon: `[id="AdminUserDefinedListDetailGrid"] [role="toolbar"] [aria-label="Remove"]`,
        deleteBtn: `//*[text()="Delete"]`,
    },

    saveNav: {
        saveBtn: `[id="AdminUserDefinedListDetailGrid"] [role="toolbar"] [aria-label="Save"]`,
        saveOK: `[role="alertdialog"] [class="x-toolbar x-docked x-toolbar-footer x-box-layout-ct"] [tabindex="0"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="AdminUserDefinedListDetailGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class UserDefinedPage {
    constructor(page) {
        this.page = page;
    }

    //UDL: Create
    nameUDLWriteA = async () => {
        let page = this.page;
        let { udlName, field31 } = locators.udlData;
        let { udlAddDetailsBtn, udlAddBtnWindowAlert } = locators.udlNav;
        // await page.waitForTimeout(3000);

        await page.click(udlAddDetailsBtn);
        let textInput = await page.$(udlName);

        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Field 31');

        await page.click(field31);
        
        await page.click(udlAddBtnWindowAlert);
        // await page.waitForTimeout(3000);
    }

    nameUDLWriteB = async () => {
        let page = this.page;
        let { udlName, field144 } = locators.udlData;
        let { udlAddDetailsBtn, udlAddBtnWindowAlert } = locators.udlNav;
        let { reloadNavBtn } = locators.reloadBtn;
        // await page.waitForTimeout(3000);

        await page.click(udlAddDetailsBtn);
        let textInput = await page.$(udlName);
        
        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Field 144');
        
        await page.click(field144);
        
        await page.click(udlAddBtnWindowAlert);
        // await page.waitForTimeout(3000);
    }

    nameUDLWriteC = async () => {
        let page = this.page;
        let { udlName, fieldCostNotes } = locators.udlData;
        let { udlAddDetailsBtn, udlAddBtnWindowAlert } = locators.udlNav;
        let { reloadNavBtn } = locators.reloadBtn;
        // await page.waitForTimeout(3000);
        
        await page.click(udlAddDetailsBtn);
        let textInput = await page.$(udlName);
        
        await textInput.click({ clickCount: 3 })
        await page.keyboard.type('Cost Notes');
        
        await page.click(fieldCostNotes);
        
        await page.click(udlAddBtnWindowAlert);
        // await page.waitForTimeout(3000);
    }


    //Creating UDLD
    addDefinedListDetailsA = async () => {
        let page = this.page;
        let { createDefinedListDetails } = locators.udlData;
        let { newListItem } = locators.udlData;
        // await page.waitForTimeout(3000);
        
        // let textInput = await page.$(newListItem);
        
        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test A');
        
        await page.waitForTimeout(1000);
        
        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test B');
        
        await page.waitForTimeout(1000);
        
        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test C');
        // await page.waitForTimeout(3000);
    }

    addDefinedListDetailsB = async () => {
        let page = this.page;
        let { createDefinedListDetails } = locators.udlData;
        let { newListItem } = locators.udlData;
        // await page.waitForTimeout(3000);
        
        // let textInput = await page.$(newListItem);
        
        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test A');

        await page.waitForTimeout(1000);

        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test B');

        await page.waitForTimeout(1000);

        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test C');
        // await page.waitForTimeout(3000);
    }

    addDefinedListDetailsC = async () => {
        let page = this.page;
        let { createDefinedListDetails } = locators.udlData;
        let { newListItem } = locators.udlData;
        // await page.waitForTimeout(3000);

        // let textInput = await page.$(newListItem);

        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test A');

        await page.waitForTimeout(1000);

        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test B');

        await page.waitForTimeout(1000);

        await page.click(createDefinedListDetails);
        await page.dblclick(newListItem);
        await page.keyboard.type('Test C');
        // await page.waitForTimeout(3000);
    }





    //Sponsor: Update
    udl_ReTypeDataA = async () => {
        let page = this.page;
        let { field31, udlUpdateA, udlUpdateB, udlUpdateC } = locators.udlData;
        // await page.waitForTimeout(3000);
;
        // let textInputA = await page.$(udlUpdateA);
        // let textInputA = await action.click(this.page, udlUpdateA);

        await page.click(field31)
        // await textInputA.click({ clickCount: 3 })
        await page.dblclick(udlUpdateA);
        await page.keyboard.type('re-wright A');
        // await page.waitForTimeout(1000);
        await page.dblclick(udlUpdateB);
        await page.keyboard.type('re-wright B');
        // await page.waitForTimeout(1000);
        await page.dblclick(udlUpdateC);
        await page.keyboard.type('re-wright C');
        // await page.waitForTimeout(3000);
    }

    udl_ReTypeDataB = async () => {
        let page = this.page;
        let { field144, udlUpdateA, udlUpdateB, udlUpdateC } = locators.udlData;
        // await page.waitForTimeout(3000);
;
        // let textInputA = await page.$(udlUpdateA);
        // let textInputA = await action.click(this.page, udlUpdateA);

        await page.click(field144)
        // await textInputA.click({ clickCount: 3 })
        await page.dblclick(udlUpdateA);
        await page.keyboard.type('re-wright A');
        await page.dblclick(udlUpdateB);
        await page.keyboard.type('re-wright B');
        await page.dblclick(udlUpdateC);
        await page.keyboard.type('re-wright C');
        // await page.waitForTimeout(3000);
    }

    udl_ReTypeDataC = async () => {
        let page = this.page;
        let { fieldCostNotes, udlUpdateA, udlUpdateB, udlUpdateC } = locators.udlData;
        // await page.waitForTimeout(3000);
;
        // let textInputA = await page.$(udlUpdateA);
        // let textInputA = await action.click(this.page, udlUpdateA);

        await page.click(fieldCostNotes)
        // await textInputA.click({ clickCount: 3 })
        await page.dblclick(udlUpdateA);
        await page.keyboard.type('re-wright A');
        await page.dblclick(udlUpdateB);
        await page.keyboard.type('re-wright B');
        await page.dblclick(udlUpdateC);
        await page.keyboard.type('re-wright C');
        // await page.waitForTimeout(3000);
    }



    //Sponsor: Delete
    listUDLDeleteA = async () => {
        let page = this.page;
        let { deleteIcon, deleteBtn } = locators.deleteNav;
        let { field31, checkBoxA, checkBoxB, checkBoxC } = locators.udlData;
        let { saveBtn, saveOK } = locators.saveNav;
        // await page.waitForTimeout(3000);
        await page.click(field31)
        await page.click(checkBoxA)
        await page.click(checkBoxB)
        await page.click(checkBoxC)

        await page.click(deleteIcon)
        await page.click(deleteBtn)
        // await page.waitForTimeout(3000);
    }

    listUDLDeleteB = async () => {
        let page = this.page;
        let { deleteIcon, deleteBtn } = locators.deleteNav;
        let { field144, checkBoxA, checkBoxB, checkBoxC } = locators.udlData;
        let { saveBtn, saveOK } = locators.saveNav;
        // await page.waitForTimeout(3000);
        await page.click(field144)
        await page.click(checkBoxA)
        await page.click(checkBoxB)
        await page.click(checkBoxC)
        
        await page.click(deleteIcon)
        await page.click(deleteBtn)
        // await page.waitForTimeout(3000);
    }

    listUDLDeleteC = async () => {
        let page = this.page;
        let { deleteIcon, deleteBtn } = locators.deleteNav;
        let { fieldCostNotes, checkBoxA, checkBoxB, checkBoxC } = locators.udlData;
        let { saveBtn, saveOK } = locators.saveNav;
        // await page.waitForTimeout(3000);
        await page.click(fieldCostNotes)
        await page.click(checkBoxA)
        await page.click(checkBoxB)
        await page.click(checkBoxC)
        
        await page.click(deleteIcon)
        await page.click(deleteBtn)
        // await page.waitForTimeout(3000);
    }



    listUDLSave = async () => {
        let page = this.page;
        let { saveBtn, saveOK } = locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listUDLReload = async () => {
        let page = this.page;
        let { relBtn, reloadNavBtn } = locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.UserDefinedPage = UserDefinedPage;

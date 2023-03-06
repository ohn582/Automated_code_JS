const { action } = require('../../../utilities/action')

const locators = {
    ccNav: {
        ccAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsCostCategoryGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    ccData: {
        //Creating a data
        ccName: `[id="adminListsCostCategoryGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"]`,
        ccPartition: `[id="adminListsCostCategoryGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1032"]`,
        // domainsName: `//*[text()="New Domain"]`,


        ccNameA: `[id="adminListsCostCategoryGrid"] [data-recordindex="10"] [data-columnid="gridcolumn-1028"]`,
        ccPartitionA: `[id="adminListsCostCategoryGrid"] [data-recordindex="10"] [data-columnid="gridcolumn-1032"]`,

        ccNameB: `[id="adminListsCostCategoryGrid"] [data-recordindex="11"] [data-columnid="gridcolumn-1028"]`,
        ccPartitionB: `[id="adminListsCostCategoryGrid"] [data-recordindex="11"] [data-columnid="gridcolumn-1032"]`,

        ccNameC: `[id="adminListsCostCategoryGrid"] [data-recordindex="12"] [data-columnid="gridcolumn-1028"]`,
        ccPartitionC: `[id="adminListsCostCategoryGrid"] [data-recordindex="12"] [data-columnid="gridcolumn-1032"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsCostCategoryGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCostCategoryGrid"] [role="toolbar"] [data-componentid="adminListsCostCategoryGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCostCategoryGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class ccPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listCCWriteA = async() => {
        let page=this.page;
        let { ccName, ccPartition }=locators.ccData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(ccName);
        let textInputB = await page.$(ccPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listCCWriteB = async() => {
        let page=this.page;
        let { ccName, ccPartition }=locators.ccData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(ccName);
        let textInputB = await page.$(ccPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listCCWriteC = async() => {
        let page=this.page;
        let { ccName, ccPartition }=locators.ccData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(ccName);
        let textInputB = await page.$(ccPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    ccReTypeData = async() => {
        let page=this.page;
        let { ccNameA, ccPartitionA }=locators.ccData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(ccNameA); 
        let textInputB = await page.$(ccPartitionA); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    ccReTypeDataB = async() => {
        let page=this.page;
        let { ccNameB, ccPartitionB }=locators.ccData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(ccNameB); 
        let textInputB = await page.$(ccPartitionB); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }
    
    ccReTypeDataC = async() => {
        let page=this.page;
        let { ccNameC, ccPartitionC }=locators.ccData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(ccNameC); 
        let textInputB = await page.$(ccPartitionC); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    
    

    //Sponsor: Delete
    listCCDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listCCSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listCCReload = async() => {
        let page=this.page;
        let { relBtn, reloadNavBtn }=locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.ccPage = ccPage;

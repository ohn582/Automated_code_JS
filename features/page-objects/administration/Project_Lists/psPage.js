const { action } = require('../../../utilities/action')

const locators = {
    psNav: {
        psAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsProjectStateGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    psData: {
        //Creating a data
        psName: `[id="adminListsProjectStateGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"]`,
        psPartition: `[id="adminListsProjectStateGrid"] [data-recordindex="0"] [data-columnid="gridcolumn-1033"]`,
        // domainsName: `//*[text()="New Domain"]`,


        psNameA: `[id="adminListsProjectStateGrid"] [data-recordindex="10"] [data-columnid="gridcolumn-1028"]`,
        psPartitionA: `[id="adminListsProjectStateGrid"] [data-recordindex="10"] [data-columnid="gridcolumn-1033"]`,

        psNameB: `[id="adminListsProjectStateGrid"] [data-recordindex="11"] [data-columnid="gridcolumn-1028"]`,
        psPartitionB: `[id="adminListsProjectStateGrid"] [data-recordindex="11"] [data-columnid="gridcolumn-1033"]`,

        psNameC: `[id="adminListsProjectStateGrid"] [data-recordindex="12"] [data-columnid="gridcolumn-1028"]`,
        psPartitionC: `[id="adminListsProjectStateGrid"] [data-recordindex="12"] [data-columnid="gridcolumn-1033"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsProjectStateGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsProjectStateGrid"] [role="toolbar"] [data-componentid="adminListsProjectStateGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsProjectStateGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class psPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listPSWriteA = async() => {
        let page=this.page;
        let { psName, psPartition }=locators.psData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(psName);
        let textInputB = await page.$(psPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listPSWriteB = async() => {
        let page=this.page;
        let { psName, psPartition }=locators.psData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(psName);
        let textInputB = await page.$(psPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listPSWriteC = async() => {
        let page=this.page;
        let { psName, psPartition }=locators.psData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(psName);
        let textInputB = await page.$(psPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    psReTypeData = async() => {
        let page=this.page;
        let { psNameA, psPartitionA }=locators.psData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(psNameA); 
        let textInputB = await page.$(psPartitionA); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    psReTypeDataB = async() => {
        let page=this.page;
        let { psNameB, psPartitionB }=locators.psData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(psNameB); 
        let textInputB = await page.$(psPartitionB); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }
    
    psReTypeDataC = async() => {
        let page=this.page;
        let { psNameC, psPartitionC }=locators.psData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(psNameC); 
        let textInputB = await page.$(psPartitionC); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    
    

    //Sponsor: Delete
    listPSDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listPSSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listPSReload = async() => {
        let page=this.page;
        let { relBtn, reloadNavBtn }=locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.psPage = psPage;

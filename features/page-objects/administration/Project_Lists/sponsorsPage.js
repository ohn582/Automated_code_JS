const { action } = require('../../../utilities/action')

const locators = {
    sponsorsNav: {
        sponsorsAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsSponsorGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    sponsorsData: {
        //Creating a data
        sponsorsName: `[id="adminListsSponsorGrid"] [data-componentid="gridview-1035"] [data-recordindex="0"] [data-columnid="gridcolumn-1027"]`,
        sponsorsPartition: `[id="adminListsSponsorGrid"] [data-componentid="gridview-1035"] [data-recordindex="0"] [data-columnid="gridcolumn-1029"]`,
        // domainsName: `//*[text()="New Domain"]`,


        sponsorsNameA: `[id="adminListsSponsorGrid"] [data-componentid="gridview-1035"] [data-recordindex="4"] [data-columnid="gridcolumn-1027"]`,
        sponsorsPartitionA: `[id="adminListsSponsorGrid"] [data-componentid="gridview-1035"] [data-recordindex="4"] [data-columnid="gridcolumn-1029"]`,

        sponsorsNameB: `[id="adminListsSponsorGrid"] [data-componentid="gridview-1035"] [data-recordindex="5"] [data-columnid="gridcolumn-1027"]`,
        sponsorsPartitionB: `[id="adminListsSponsorGrid"] [data-componentid="gridview-1035"] [data-recordindex="5"] [data-columnid="gridcolumn-1029"]`,

        sponsorsNameC: `[id="adminListsSponsorGrid"] [data-componentid="gridview-1035"] [data-recordindex="6"] [data-columnid="gridcolumn-1027"]`,
        sponsorsPartitionC: `[id="adminListsSponsorGrid"] [data-componentid="gridview-1035"] [data-recordindex="6"] [data-columnid="gridcolumn-1029"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsSponsorGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsSponsorGrid"] [role="toolbar"] [data-componentid="adminListsSponsorGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsSponsorGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class sponsorsPage {
    constructor(page) {
        this.page = page;
    }


    //Sponsor: Create
    listSponsorsWriteA = async() => {
        let page=this.page;
        let { sponsorsName, sponsorsPartition }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(sponsorsName);
        let textInputB = await page.$(sponsorsPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes1');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listSponsorsWriteB = async() => {
        let page=this.page;
        let { sponsorsName, sponsorsPartition }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(sponsorsName);
        let textInputB = await page.$(sponsorsPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes2');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    listSponsorsWriteC = async() => {
        let page=this.page;
        let { sponsorsName, sponsorsPartition }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(sponsorsName);
        let textInputB = await page.$(sponsorsPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('tes3');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    sponsorsReTypeData = async() => {
        let page=this.page;
        let { sponsorsNameA, sponsorsPartitionA }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(sponsorsNameA); 
        let textInputB = await page.$(sponsorsPartitionA); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    sponsorsReTypeDataB = async() => {
        let page=this.page;
        let { sponsorsNameB, sponsorsPartitionB }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(sponsorsNameB); 
        let textInputB = await page.$(sponsorsPartitionB); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }
    
    sponsorsReTypeDataC = async() => {
        let page=this.page;
        let { sponsorsNameC, sponsorsPartitionC }=locators.sponsorsData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(sponsorsNameC); 
        let textInputB = await page.$(sponsorsPartitionC); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    
    

    //Sponsor: Delete
    listSponsorDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listSponsorSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listSponsorReload = async() => {
        let page=this.page;
        let { relBtn, reloadNavBtn }=locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.sponsorsPage = sponsorsPage;

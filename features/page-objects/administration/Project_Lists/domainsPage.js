const { action } = require('../../../utilities/action')

const locators = {
    domainsNav: {
        domainsAddBtn: `[id="r1AdminMain"] [role="toolbar"] [data-componentid="adminListsDomainGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    domainsData: {
        //Creating a data
        domainsName: `[id="adminListsDomainGrid"] [data-componentid="gridview-1037"] [data-recordindex="0"] [data-columnid="gridcolumn-1028"]`,
        domainPartition: `[id="adminListsDomainGrid"] [data-componentid="gridview-1037"] [data-recordindex="0"] [data-columnid="gridcolumn-1031"]`,
        // domainsName: `//*[text()="New Domain"]`,


        domainsNameA: `[id="adminListsDomainGrid"] [data-componentid="gridview-1037"] [data-recordindex="1"] [data-columnid="gridcolumn-1028"]`,
        domainPartitionA: `[id="adminListsDomainGrid"] [data-componentid="gridview-1037"] [data-recordindex="1"] [data-columnid="gridcolumn-1031"]`,

        domainsNameB: `[id="adminListsDomainGrid"] [data-componentid="gridview-1037"] [data-recordindex="2"] [data-columnid="gridcolumn-1028"]`,
        domainPartitionB: `[id="adminListsDomainGrid"] [data-componentid="gridview-1037"] [data-recordindex="2"] [data-columnid="gridcolumn-1031"]`,

        domainsNameC: `[id="adminListsDomainGrid"] [data-componentid="gridview-1037"] [data-recordindex="3"] [data-columnid="gridcolumn-1028"]`,
        domainPartitionC: `[id="adminListsDomainGrid"] [data-componentid="gridview-1037"] [data-recordindex="3"] [data-columnid="gridcolumn-1031"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsDomainGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsDomainGrid"] [role="toolbar"] [data-componentid="adminListsDomainGridSave"]`,
        saveOK: `[data-componentid="messagebox-1001"] [id="messagebox-1001-toolbar"] [id="button-1005"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsDomainGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    }

}



class domainPage {
    constructor(page) {
        this.page = page;
    }


    //Filters: Create
    listDomainWriteA = async() => {
        let page=this.page;
        let { domainsName, domainPartition }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(domainsName);
        let textInputB = await page.$(domainPartition); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Data 1');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listDomainWriteB = async() => {
        let page=this.page;
        let { domainsName, domainPartition }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(domainsName); 
        let textInputB = await page.$(domainPartition);

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Data 2');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }

    listDomainWriteC = async() => {
        let page=this.page;
        let { domainsName, domainPartition }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        let textInput = await page.$(domainsName); 
        let textInputB = await page.$(domainPartition);

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Data 3');
        await textInputB.click({clickCount: 1})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    

    //Filters: Update
    domainReTypeData = async() => {
        let page=this.page;
        let { domainsNameA, domainPartitionA }=locators.domainsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(domainsNameA); 
        let textInputB = await page.$(domainPartitionA); 

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    domainReTypeDataB = async() => {
        let page=this.page;
        let { domainsNameB, domainPartitionB }=locators.domainsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(domainsNameB); 
        let textInputB = await page.$(domainPartitionB);

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    domainReTypeDataC = async() => {
        let page=this.page;
        let { domainsNameC, domainPartitionC }=locators.domainsData;
        // await page.waitForTimeout(3000);

        let textInput = await page.$(domainsNameC); 
        let textInputB = await page.$(domainPartitionC);

        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        await textInputB.click({clickCount: 3})
        await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }


    

    //Domain: Delete
    listDomainDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listDomainSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listDomainReload = async() => {
        let page=this.page;
        let { relBtn, reloadNavBtn }=locators.reloadBtn;
        await page.click(relBtn);
        await page.click(reloadNavBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.domainPage = domainPage;

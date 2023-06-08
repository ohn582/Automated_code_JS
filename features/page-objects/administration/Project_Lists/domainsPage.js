const { action } = require('../../../utilities/action')

const locators = {
    domainsNav: {
        domainsAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-componentid="adminListsDomainGridAdd"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },

    domainsData: {
        //Creating a data
        domainSelect: `//*[text()="New Domain"]`,

        //Update
        textBoxNameReTypeA: `//*[text()="New Data 1"]`,
        textBoxNameReTypeB: `//*[text()="New Data 2"]`,
        textBoxNameReTypeC: `//*[text()="New Data 3"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsDomainGrid"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsDomainGrid"] [role="toolbar"] [data-componentid="adminListsDomainGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        reloadNavBtn: `[id="adminListsDomainGrid-bodyWrap"] [role="toolbar"] [id="adminListsDomainGridReload"]`,
        yesBtn: `//*[text()="Yes"]`,
    }

}



class domainPage {
    constructor(page) {
        this.page = page;
    }


    // Create
    listDomainWriteA = async() => {
        let page=this.page;
        let { domainsAddBtn }=locators.domainsNav;
        let { domainSelect }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        await page.click(domainsAddBtn);
        await page.dblclick(domainSelect);

        await page.keyboard.type('Data 1');
        // await page.waitForTimeout(3000);
    }

    listDomainWriteB = async() => {
        let page=this.page;
        let { domainsAddBtn }=locators.domainsNav;
        let { domainSelect }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        await page.click(domainsAddBtn);
        await page.dblclick(domainSelect);

        await page.keyboard.type('Data 2');
        // await page.waitForTimeout(3000);
    }

    listDomainWriteC = async() => {
        let page=this.page;
        let { domainsAddBtn }=locators.domainsNav;
        let { domainSelect }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        await page.click(domainsAddBtn);
        await page.dblclick(domainSelect);

        await page.keyboard.type('Data 3');
        // await page.waitForTimeout(3000);
    }

    

    //Update
    domainReTypeData = async() => {
        let page=this.page;
        let { textBoxNameReTypeA }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        await page.dblclick(textBoxNameReTypeA);

        await page.keyboard.type('Re-Type 1');
        // await page.waitForTimeout(3000);
    }

    domainReTypeDataB = async() => {
        let page=this.page;
        let { textBoxNameReTypeB }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        await page.dblclick(textBoxNameReTypeB);

        await page.keyboard.type('Re-Type 2');
        // await page.waitForTimeout(3000);
    }

    domainReTypeDataC = async() => {
        let page=this.page;
        let { textBoxNameReTypeC }=locators.domainsData;
        // await page.waitForTimeout(3000);
        
        await page.dblclick(textBoxNameReTypeC);

        await page.keyboard.type('Re-Type 3');
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
        let { yesBtn, reloadNavBtn }=locators.reloadBtn;
        await page.click(reloadNavBtn);
        // await page.click(yesBtn);
        await page.waitForTimeout(3000);
    }
}

module.exports.domainPage = domainPage;

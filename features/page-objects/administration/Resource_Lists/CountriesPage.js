const { action } = require('../../../utilities/action')

const locators = {
    countriesNav: {
        countriesAddBtn: `[id="AdminMainContainer"] [role="toolbar"] [data-qtip="Add"]`,
        savePeriodBtn: `[id="r1AdminMain"] [data-qtip="Save"]`,
        savePeriodOK: `[id="messagebox-1001"] [data-ref="btnWrap"]`,
    },


    countriesData: {
        //Creating a data
        countriesName: `[id="adminListsCountryGrid-bodyWrap"] [data-recordindex="0"] [role="presentation"]`,
        // countriesName: `//*[text()="New Country"]`,
        // countriesPartition: `[id="adminListsCountryGrid-bodyWrap"] [data-recordindex="0"] [data-columnid="gridcolumn-1032"]`,
        // domainsName: `//*[text()="New Domain"]`,


        countriesNameA: `//*[text()="tes1"]`,
        // countriesPartitionA: `[id="adminListsCountryGrid-bodyWrap"] [data-recordindex="7"] [data-columnid="gridcolumn-1032"]`,

        countriesNameB: `//*[text()="tes2"]`,
        // countriesPartitionB: `[id="adminListsCountryGrid-bodyWrap"] [data-recordindex="8"] [data-columnid="gridcolumn-1032"]`,

        countriesNameC: `//*[text()="tes3"]`,
        // countriesPartitionC: `[id="adminListsCountryGrid-bodyWrap"] [data-recordindex="9"] [data-columnid="gridcolumn-1032"]`,
    },

    deleteNav: {
        deleteBtn: `[id="adminListsCountryGrid-bodyWrap"] [role="toolbar"] [data-qtip="Remove"]`,
        yesDeleteBtn: `//*[text()="Yes"]`,
    },

    saveNav: {
        saveBtn: `[id="adminListsCountryGrid-bodyWrap"] [role="toolbar"] [data-componentid="adminListsCountryGridSave"]`,
        saveOK: `[role="alertdialog"] [role="presentation"] [role="button"] [data-ref="btnWrap"]`,
    },

    reloadBtn: {
        relBtn: `[data-componentid="r1MainViewPort"] [id="adminListsCountryGrid-bodyWrap"] [id="toolbar"] [data-qtip="Reload"]`,
        reloadNavBtn: `//*[text()="Yes"]`,
    },

    countriesLogoutBtn: {
        adminUserBtn: `//*[text()="Administrator"]`,
        logoutUserBtn: `//*[text()="Logout"]`,
        hereLinkLogout: `//*[text()=" here"]`,
    }

}



class CountriesPage {
    constructor(page) {
        this.page = page;
    }

    //Sponsor: Create
    listCountriesWriteA = async() => {
        let page=this.page;
        let { countriesName, countriesPartition }=locators.countriesData;
        let { countriesAddBtn }=locators.countriesNav;

        // let textInputB = await page.$(countriesPartition); 
        // await page.waitForTimeout(3000);
        
        await page.click(countriesAddBtn);
        
        let textInput = await page.$(countriesName, el=>el.getAttribute("id"));
        await textInput.click({clickCount: 3})
        // await page.dblclick(countriesName);
        await page.keyboard.type('tes1');
        // await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listCountriesWriteB = async() => {
        let page=this.page;
        let { countriesName, countriesPartition }=locators.countriesData;
        let { countriesAddBtn }=locators.countriesNav;

        // let textInputB = await page.$(countriesPartition); 
        // await page.waitForTimeout(3000);
        
        await page.click(countriesAddBtn);
        
        let textInput = await page.$(countriesName, el=>el.getAttribute("id"));
        await textInput.click({clickCount: 3})
        // await page.dblclick(countriesName);
        await page.keyboard.type('tes2');
        // await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    listCountriesWriteC = async() => {
        let page=this.page;
        let { countriesName, countriesPartition }=locators.countriesData;
        let { countriesAddBtn }=locators.countriesNav;

        // let textInputB = await page.$(countriesPartition); 
        // await page.waitForTimeout(3000);
        
        await page.click(countriesAddBtn);
        
        let textInput = await page.$(countriesName, el=>el.getAttribute("id"));
        await textInput.click({clickCount: 3})
        // await page.dblclick(countriesName);
        await page.keyboard.type('tes3');
        // await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }




    //Sponsor: Update
    countriesReTypeData = async() => {
        let page=this.page;
        let { countriesNameA, countriesPartitionA }=locators.countriesData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(countriesNameA); 
        // let textInputB = await page.$(countriesPartitionA); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 1');
        // await textInputB.click({clickCount: 3})
        // await page.keyboard.type('API');
        // await page.waitForTimeout(3000);
    }

    countriesReTypeDataB = async() => {
        let page=this.page;
        let { countriesNameB, countriesPartitionB }=locators.countriesData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(countriesNameB); 
        // let textInputB = await page.$(countriesPartitionB); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 2');
        // await textInputB.click({clickCount: 3})
        // await page.keyboard.type('Consulting');
        // await page.waitForTimeout(3000);
    }
    
    countriesReTypeDataC = async() => {
        let page=this.page;
        let { countriesNameC, countriesPartitionC }=locators.countriesData;
        // await page.waitForTimeout(3000);
    
        let textInput = await page.$(countriesNameC); 
        // let textInputB = await page.$(countriesPartitionC); 
    
        await textInput.click({clickCount: 3})
        await page.keyboard.type('Re-Type 3');
        // await textInputB.click({clickCount: 3})
        // await page.keyboard.type('Testing');
        // await page.waitForTimeout(3000);
    }

    
    

    //Sponsor: Delete
    listCountriesDelete = async() => {
        let page=this.page;
        let { deleteBtn, yesDeleteBtn }=locators.deleteNav;
        // await page.waitForTimeout(3000);

        await page.click(deleteBtn);
        await page.click(yesDeleteBtn);
        // await page.waitForTimeout(3000);
    }

    listCountriesSave = async() => {
        let page=this.page;
        let { saveBtn, saveOK }=locators.saveNav;
        await page.click(saveBtn);
        await page.click(saveOK);
        await page.waitForTimeout(3000);
    }

    listCountriesReload = async() => {
        let page = this.page;
        let { adminUserBtn, logoutUserBtn, hereLinkLogout } = locators.countriesLogoutBtn;
    
        await page.click(adminUserBtn);
        await page.click(logoutUserBtn);
        await page.click(hereLinkLogout);
    }
}

module.exports.CountriesPage = CountriesPage;
